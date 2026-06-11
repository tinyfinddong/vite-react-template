import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import devServer from "@hono/vite-dev-server";

export default defineConfig(({ command }) => ({
	plugins: [
		react(),
		// 开发时用 Node.js dev server（兼容 WebContainer），构建时用 Cloudflare 插件
		command === "serve"
			? devServer({
					entry: "src/worker/index.ts",
					exclude: [/^\/(?!api\/).*/],
				})
			: cloudflare(),
	],
}));
