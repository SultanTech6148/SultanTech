import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // This will expose the server to the network
    port: 5173         // Optionally, you can change the port if needed
  },
})
