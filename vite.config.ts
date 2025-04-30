import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    cssTarget: "chrome61",
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
