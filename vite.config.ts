import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// TanStack Start targeting Vercel. Vercel auto-detects the output preset and
// deploys SSR as a Node serverless function with static client assets.
export default defineConfig({
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({ target: "vercel" }),
    viteReact(),
  ],
  server: {
    host: true,
    port: Number(process.env.PORT) || 8080,
    strictPort: false,
  },
});
