import { defineConfig } from "vite";
import path from "node:path";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    ssr: {
        noExternal: ["react-helmet-async"],
    },
    resolve: {
        // RESOURCES ALIAS
        alias: {
            "@": path.resolve(import.meta.dir, "app", "services"),
            "~": path.resolve(import.meta.dir, "app"),
        },
    },
});
