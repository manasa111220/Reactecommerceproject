import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import  tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  server: {
    historyApiFallback: true
  }
})