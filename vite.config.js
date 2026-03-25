import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: './',
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['raiinglogo.PNG'],
      manifest: {
        name: '晋东南古建 · 清明巡礼 2026',
        short_name: '晋东南巡礼',
        description: '晋东南古建筑自驾指南，离线访问，快速启动。',
        theme_color: '#f5f5f7',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: './',
        icons: [
          {
            src: 'raiinglogo.PNG',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
});
