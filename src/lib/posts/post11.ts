import { BlogPost } from "../blogData";

export const post11: BlogPost = {
  slug: "test-auto-indexing-verification",
  language: "en",
  translationGroup: "post11",
  title: "Test: Auto URL Indexing Verification",
  description: "This is a test post to verify GitHub Actions auto URL indexing workflow.",
  date: "2026-02-28",
  category: "Test",
  keywords: ["test", "auto indexing"],
  content: `
    <h2>Auto Indexing Test</h2>
    <p>This post verifies that the GitHub Actions workflow automatically submits URLs to Google and Naver.</p>
  `,
};
