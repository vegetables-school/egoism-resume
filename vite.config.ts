import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { join } from "path";

// https://vitejs.dev/config/

/* eslint-disable @typescript-eslint/no-unused-vars */
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react(), UnoCSS()],
    resolve: {
      alias: {
        '@': join(__dirname, "src"),
      }
    },
  }

})