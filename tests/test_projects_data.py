"""
tests/test_projects_data.py
Automated test suite verifying the integrity, schema conformance,
and contracts of the portfolio projects dataset.
"""

import json
import re
import unittest
from pathlib import Path

WORKSPACE_ROOT = Path(__file__).resolve().parent.parent
CONFIG_PATH = WORKSPACE_ROOT / "data" / "projects_config.json"
OUTPUT_PATH = WORKSPACE_ROOT / "src" / "data" / "projects.json"


class TestPortfolioDataIntegrity(unittest.TestCase):

    def setUp(self):
        self.assertTrue(CONFIG_PATH.exists(), f"Missing config file at {CONFIG_PATH}")
        self.assertTrue(OUTPUT_PATH.exists(), f"Missing output file at {OUTPUT_PATH}")

        with open(OUTPUT_PATH, "r", encoding="utf-8") as f:
            self.data = json.load(f)

    def test_top_level_keys(self):
        """Ensure required top-level payload keys are present."""
        expected_keys = {"metadata", "user", "categories", "skills", "projects"}
        self.assertTrue(expected_keys.issubset(self.data.keys()))

    def test_user_profile_contract(self):
        """Verify user profile contains essential contact and identity information."""
        user = self.data.get("user", {})
        self.assertIn("name", user)
        self.assertIn("github", user)
        self.assertIn("email", user)
        self.assertIn("title", user)
        self.assertIn("bio", user)

        self.assertEqual(user["github"], "leann027")
        self.assertTrue(re.match(r"^[^@\s]+@[^@\s]+\.[^@\s]+$", user["email"]))

    def test_projects_schema_and_validity(self):
        """Verify project objects adhere strictly to the schema."""
        projects = self.data.get("projects", [])
        self.assertGreater(len(projects), 0, "Projects list must not be empty")

        seen_ids = set()
        valid_categories = {c["id"] for c in self.data.get("categories", [])}
        valid_categories.add("all")

        for p in projects:
            p_id = p.get("id")
            self.assertIsNotNone(p_id)
            self.assertNotIn(p_id, seen_ids, f"Duplicate project ID found: {p_id}")
            seen_ids.add(p_id)

            self.assertTrue(p.get("title"), f"Project {p_id} has empty title")
            self.assertTrue(p.get("shortDescription"), f"Project {p_id} has empty shortDescription")
            self.assertTrue(p.get("fullDescription"), f"Project {p_id} has empty fullDescription")

            # Check categories
            category = p.get("category")
            self.assertIn(category, valid_categories, f"Invalid category '{category}' in project {p_id}")

            # Check languages and technologies
            self.assertIsInstance(p.get("languages"), list)
            self.assertGreater(len(p.get("languages", [])), 0, f"Project {p_id} has no languages")
            self.assertIsInstance(p.get("technologies"), list)
            self.assertGreater(len(p.get("technologies", [])), 0, f"Project {p_id} has no technologies")

            # Check URLs
            github_url = p.get("githubUrl", "")
            self.assertTrue(github_url.startswith("https://github.com/"), f"Invalid GitHub URL in {p_id}: {github_url}")

            if p.get("demoUrl"):
                self.assertTrue(
                    p["demoUrl"].startswith("http://") or p["demoUrl"].startswith("https://"),
                    f"Invalid demo URL in {p_id}: {p['demoUrl']}"
                )

            # Check highlights
            highlights = p.get("highlights", [])
            self.assertIsInstance(highlights, list)

    def test_skills_matrix(self):
        """Ensure skills matrix contains required classifications."""
        skills = self.data.get("skills", {})
        self.assertIn("languages", skills)
        self.assertIn("frameworks", skills)
        self.assertIn("tools", skills)

        for lang in skills["languages"]:
            self.assertIn("name", lang)
            self.assertIn("description", lang)


if __name__ == "__main__":
    unittest.main()

