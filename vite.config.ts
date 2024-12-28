/// <reference types="vitest" />
/// <reference types="vite/client" />

import {defineConfig} from "vite"
import {fileURLToPath, URL} from "node:url"

import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		open: true
	},
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./vitest.setup.ts"
	},
	resolve: {
		alias: {
			"@/src": fileURLToPath(new URL("./src", import.meta.url)),
			"@/constants": fileURLToPath(new URL("./constants", import.meta.url)),
			"@/shared": fileURLToPath(new URL("./src/shared", import.meta.url)),
			"@/ui": fileURLToPath(new URL("./src/shared/ui", import.meta.url))
		}
	}
})
