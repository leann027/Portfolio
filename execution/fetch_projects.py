#!/usr/bin/env python3
"""
execution/fetch_projects.py
Deterministic pipeline script to fetch, merge, and normalize project metadata
for the interactive portfolio, adhering to the 3-layer architecture defined in Agents.md.
"""

import json
import os
import subprocess
import sys
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Optional

WORKSPACE_ROOT = Path(__file__).resolve().parent.parent
CONFIG_PATH = WORKSPACE_ROOT / "data" / "projects_config.json"
CACHE_PATH = WORKSPACE_ROOT / ".tmp" / "github_cache.json"
OUTPUT_PATH = WORKSPACE_ROOT / "src" / "data" / "projects.json"


def run_gh_repo_view(owner: str, repo: str) -> Optional[Dict[str, Any]]:
    """Query gh CLI for repository details if available."""
    try:
        cmd = [
            "gh", "repo", "view", f"{owner}/{repo}",
            "--json", "name,description,stargazerCount,forkCount,updatedAt,isPrivate,primaryLanguage,url"
        ]
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            check=False,
            timeout=8
        )
        if result.returncode == 0 and result.stdout.strip():
            return json.loads(result.stdout)
    except Exception as e:
        # Graceful fallback if gh CLI times out, is not installed, or repo is not found
        pass
    return None


def load_cache() -> Dict[str, Any]:
    """Load cached GitHub responses from .tmp/ directory."""
    if CACHE_PATH.exists():
        try:
            with open(CACHE_PATH, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return {}
    return {}


def save_cache(cache_data: Dict[str, Any]) -> None:
    """Save GitHub responses into .tmp/ cache."""
    CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(CACHE_PATH, "w", encoding="utf-8") as f:
        json.dump(cache_data, f, indent=2, ensure_ascii=False)


def build_projects_data(force_refresh: bool = False) -> Dict[str, Any]:
    """Merge static configuration with live GitHub enrichment."""
    if not CONFIG_PATH.exists():
        raise FileNotFoundError(f"Configuration file not found: {CONFIG_PATH}")

    with open(CONFIG_PATH, "r", encoding="utf-8") as f:
        config = json.load(f)

    user_info = config.get("user", {})
    github_user = user_info.get("github", "leann027")
    configured_projects = config.get("projects", [])
    categories = config.get("categories", [])
    skills = config.get("skills", {})

    cache = {} if force_refresh else load_cache()
    normalized_projects: List[Dict[str, Any]] = []

    for item in configured_projects:
        repo_name = item.get("repoName", item.get("id"))
        cache_key = f"{github_user}/{repo_name}"

        # Try to enrich from cache or gh CLI
        repo_metadata = cache.get(cache_key)
        if not repo_metadata or force_refresh:
            gh_data = run_gh_repo_view(github_user, repo_name)
            if gh_data:
                repo_metadata = gh_data
                cache[cache_key] = gh_data

        stars = 0
        forks = 0
        updated_at = item.get("updatedAt", datetime.now().strftime("%Y-%m-%d"))

        if repo_metadata:
            stars = repo_metadata.get("stargazerCount", 0)
            forks = repo_metadata.get("forkCount", 0)
            raw_updated = repo_metadata.get("updatedAt")
            if raw_updated:
                try:
                    updated_at = raw_updated.split("T")[0]
                except Exception:
                    pass

        # Build normalized project payload
        project_entry = {
            "id": item["id"],
            "repoName": repo_name,
            "title": item["title"],
            "tagline": item.get("tagline", ""),
            "shortDescription": item["shortDescription"],
            "fullDescription": item.get("fullDescription", item["shortDescription"]),
            "category": item.get("category", "all"),
            "languages": item.get("languages", []),
            "technologies": item.get("technologies", []),
            "githubUrl": item.get("githubUrl", f"https://github.com/{github_user}/{repo_name}"),
            "demoUrl": item.get("demoUrl"),
            "isPrivate": item.get("isPrivate", False),
            "academic": item.get("academic", False),
            "institution": item.get("institution"),
            "featured": item.get("featured", False),
            "status": item.get("status", "Completado"),
            "updatedAt": updated_at,
            "stars": stars,
            "forks": forks,
            "highlights": item.get("highlights", [])
        }
        normalized_projects.append(project_entry)

    save_cache(cache)

    output_payload = {
        "metadata": {
            "generatedAt": datetime.now().isoformat(),
            "totalProjects": len(normalized_projects),
            "featuredCount": sum(1 for p in normalized_projects if p["featured"])
        },
        "user": user_info,
        "categories": categories,
        "skills": skills,
        "projects": normalized_projects
    }

    return output_payload


def main() -> int:
    force_refresh = "--force" in sys.argv or "-f" in sys.argv
    dry_run = "--dry-run" in sys.argv

    print("[*] Starting deterministic projects data pipeline...")
    data = build_projects_data(force_refresh=force_refresh)

    print(f"[*] Processed {len(data['projects'])} projects successfully.")

    if dry_run:
        print("[*] DRY RUN: Output will not be written to disk.")
        print(json.dumps(data, indent=2, ensure_ascii=False)[:500] + "\n...")
        return 0

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"[✓] Successfully exported portfolio data to: {OUTPUT_PATH}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

