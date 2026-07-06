import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "wedding_website";
const isPagesBuild = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: "https://example.github.io",
  base: isPagesBuild ? `/${repoName}/` : "/",
  output: "static",
  vite: {
    plugins: [tailwindcss()]
  }
});
