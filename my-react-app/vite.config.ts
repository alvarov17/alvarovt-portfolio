import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // ✅ ADD THIS

export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  base: "/alvarovt-portfolio/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})