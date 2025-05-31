import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // allows external access
    port: 5173  // or any port you prefer
  },
  plugins: [react() , tailwindcss(),],
})
