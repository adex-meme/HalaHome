import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import pxtovw from "postcss-px-to-viewport";
import path from "path";

const usePxToVw = pxtovw({
  viewportWidth: 1440,
  viewportUnit: "vw",
  mediaQuery: true,
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [usePxToVw],
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
