import path from "node:path";
import swc from "unplugin-swc";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [swc.vite()],
    resolve: {
        alias: {
            "~": path.resolve(import.meta.dir, "app"),
            "@": path.resolve(import.meta.dir, "app", "services"),
        },
    },
    test:{
        include:["./app/**/*.test.ts"]
    }
});
