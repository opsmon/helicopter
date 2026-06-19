import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_PAGES_REPOSITORY ?? "helicopter";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? `/${repositoryName}` : "",
  assetPrefix: isGitHubPages ? `/${repositoryName}/` : "",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? `/${repositoryName}` : "",
  },
};

export default nextConfig;
