import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "icons/*.png"],
      manifest: {
        name: "GALAXIA AI — Negotiation Intelligence",
        short_name: "GALAXIA AI",
        description: "Elite real-time AI for calls, texts, video, and face-to-face conversations. Powered by FBI negotiation science.",
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
        orientation: "portrait-primary",
        start_url: "/",
        scope: "/",
        id: "galaxia-ai",
        categories: ["productivity", "utilities"],
        icons: [
          {
            src: "/icons/icon-192.webp",
            sizes: "192x192",
            type: "image/webp",
          },
          {
            src: "/icons/icon-512.webp",
            sizes: "512x512",
            type: "image/webp",
          },
          {
            src: "/icons/icon-maskable-512.webp",
            sizes: "512x512",
            type: "image/webp",
            purpose: "maskable",
          },
        ],
        screenshots: [
          {
            src: "/icons/icon-512.webp",
            sizes: "512x512",
            type: "image/webp",
            form_factor: "narrow",
            label: "GALAXIA AI Dashboard",
          },
        ],
        shortcuts: [
          {
            name: "Text Assistant",
            short_name: "Text AI",
            description: "Craft the perfect text reply",
            url: "/?mode=text",
            icons: [{ src: "/icons/icon-192.webp", sizes: "192x192" }],
          },
          {
            name: "Phone AI",
            short_name: "Phone AI",
            description: "Live phone call coaching",
            url: "/?mode=phone",
            icons: [{ src: "/icons/icon-192.webp", sizes: "192x192" }],
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
})
