import pluginBabel from '@rolldown/plugin-babel'
import { reactCompilerPreset } from '@vitejs/plugin-react'
import { defineConfig } from 'tsdown'

export default defineConfig({
  dts: true,
  exports: true,
  platform: 'neutral',
  unbundle: true,
  plugins: [
    pluginBabel({
      presets: [reactCompilerPreset()],
    }),
  ],
})
