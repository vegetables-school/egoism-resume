import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { join } from "path";
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/

/* eslint-disable @typescript-eslint/no-unused-vars */
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [vueJsx(), vue(), UnoCSS()],
    resolve: {
      alias: {
        '@': join(__dirname, "src"),
      }
    },
  }

})