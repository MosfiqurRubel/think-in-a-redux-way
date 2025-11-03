import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
// ✅ Vite Config for React 19 + Redux Toolkit + TailwindCSS
export default defineConfig({
  plugins: [
    react(), // React JSX + Fast Refresh
    tailwindcss(), // TailwindCSS v4 plugin
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // এখন "@/components", "@/features", etc. -> "./src/components"
    },
  },
  server: {
    port: 5173, // Default Vite port
    open: true, // Auto open browser on dev
  },
});
