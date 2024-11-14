import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react({
      babel: { plugins: [['module:@preact/signals-react-transform']] },
    }),
    svgr({
      svgrOptions: { exportType: 'default' },
    }),
  ],
})
