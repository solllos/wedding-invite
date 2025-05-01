import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const _dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/wedding-invite/",
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  build: {
    cssTarget: "chrome61",
  },
  environments: {
    client: {
      build: {
        outDir: "dist",
      },
    },
    ssr: {
      build: {
        outDir: "dist/server",
        rollupOptions: {
          input: path.resolve(_dirname, "src/entry-server.tsx"),
        },
      },
    },
  },
  plugins: [
    react(),
    {
      name: "ssr-middleware",
      configureServer(server) {
        return () => {
          server.middlewares.use(async (req, res, next) => {
            const url = req.originalUrl ?? "/";
            try {
              const { render } = await server.ssrLoadModule(
                "/src/entry-server.tsx"
              );
              const appHtml = render(url);
              const template = await server.transformIndexHtml(
                url,
                fs.readFileSync(path.resolve(_dirname, "index.html"), "utf-8")
              );
              const html = template.replace(`<!--app-html-->`, appHtml);
              res.setHeader("content-type", "text/html").end(html);
            } catch (e) {
              next(e);
            }
          });
        };
      },
      async configurePreviewServer(server) {
        const template = fs.readFileSync(
          path.resolve(_dirname, "dist/index.html"),
          "utf-8"
        );
        const { render } = await import(
          url.pathToFileURL(
            path.resolve(_dirname, "./dist/server/entry-server.js")
          ).href
        );
        return () => {
          server.middlewares.use(async (req, res, next) => {
            const url = req.originalUrl ?? "/";
            try {
              const appHtml = render(url);
              const html = template.replace(`<!--app-html-->`, appHtml);
              res.setHeader("content-type", "text/html").end(html);
            } catch (e) {
              next(e);
            }
          });
        };
      },
    },
  ],
});
