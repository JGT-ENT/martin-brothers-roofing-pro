import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import vercel from "vite-plugin-vercel";

// Optimized for Vercel deployment.
// - tanstackStart: SSR + file-based routing
// - vite-plugin-vercel: emits .vercel/output (Build Output API v3)
//   so Vercel deploys SSR as a Node serverless function and serves
//   the client bundle as static assets from the edge CDN.
export default defineConfig({
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    vercel(),
  ],
  server: {
    host: true,
    port: Number(process.env.PORT) || 8080,
  },
  vercel: {
    // Run SSR as a Node serverless function (cheap, cold-start friendly).
    defaultMaxDuration: 15,
  },
});
