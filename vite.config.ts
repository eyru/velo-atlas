import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // 离线单文件必须只有一个 JS chunk，才能被 build-standalone 完整内联。
  const singleFile = mode === "offline";
  return {
    base: "./",
    plugins: [react()],
    server: {
      host: "127.0.0.1",
      port: 5173,
      strictPort: true,
      watch: {
        ignored: ["**/.edge-profile/**", "**/shots/**", "**/research/**", "**/*.tmpdir/**", "**/.tmpdir/**"],
      },
    },
    build: {
      chunkSizeWarningLimit: 1800,
      rollupOptions: {
        output: singleFile
          ? { inlineDynamicImports: true }
          : {
              // React 运行时与车型数据库各自成块：
              // 首页可以并行预载，页面切换只换几 KB 的业务 chunk。
              manualChunks(id) {
                if (id.includes("node_modules/react-dom") || id.includes("node_modules/scheduler")) return "react";
                if (/node_modules\/react\//.test(id)) return "react";
                if (/src\/data\//.test(id)) return "data";
                return undefined;
              },
            },
      },
    },
  };
});
