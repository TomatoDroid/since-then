// uno.config.ts
import { defineConfig, presetAttributify } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetAttributify()
  ]
})