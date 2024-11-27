import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
    // port: 4200,
  },
  resolve: {
    alias: {
      "@features": "/src/features",
      "@shared": "/src/shared",
      "@assets": "/src/assets",
    },
  },
  // proxy: {
  //   "/login": {
  //     target: "https://bk-id2.info.com.np",
  //     changeOrigin: true,
  //     rewrite: (path) => path.replace(/^\/login/, "/connect/token"),
  //   },
  // },
});
