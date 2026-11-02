import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// Nothing to alias: the component draws everything itself and imports only
// react and gsap. Keep the config bare so the copy stays portable.
export default defineConfig({
  plugins: [react()],
  server: { port: 5180, open: false },
})
