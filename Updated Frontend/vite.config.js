import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), viteTsconfigPaths()],
  build: {
    outDir: "build",
  },
  server: {
    host: true,
    port : 3000,
    proxy: {
        '/api': {
            target: 'http://127.0.0.1:5000',
            changeOrigin: true
            // secure: false
        }
    }
    
},
})
