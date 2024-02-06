import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5000,
    proxy: {
      "/api": {
        target: "https://dataneuron-backend-1mvm.onrender.com",
        changeOrigin: true,
      },
    },
  },
});
