import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// Optimized for Vercel deployment.
// TanStack Start builds a Node SSR bundle that the Vercel serverless
// function in `api/[...all].ts` invokes. Client assets are served
// statically by Vercel's edge CDN.
export default defineConfig({
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
  server: {
    host: true,
    port: Number(process.env.PORT) || 8080,
  },
});
