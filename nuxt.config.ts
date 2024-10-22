export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  typescript: {
    strict: true, // Enables strict type checking
  },
  // Tailwind is already handled by the Nuxt Tailwind module
  postcss: {
    plugins: {
      autoprefixer: {}, // Can keep autoprefixer
    },
  },

  experimental: {
    payloadExtraction: true, // Example of a valid experimental feature
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },

  modules: [
    '@nuxtjs/tailwindcss', // This already handles tailwind setup
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
  ],

  googleFonts: {
    families: {
      Montserrat: [400, 500, 600, 700], // Define specific font weights
    },
  },
});
