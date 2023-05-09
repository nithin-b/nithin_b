// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
modules: ['@element-plus/nuxt'],
  css: ["~/assets/scss/element/index.scss", "~/assets/scss/app.scss"],
  vite: {
      css: {
         preprocessorOptions: {
            scss: {
               additionalData:
                  '@use "~/assets/scss/element/_var.scss" as element; @use "~/assets/scss/_var.scss" as *;',
            },
         },
      },
   },
})
