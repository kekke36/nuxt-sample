// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false, // NOTE: SSRだと初期表示時にMSWのモックAPIが呼べない
  modules: ["@nuxt/eslint", "@hebilicious/vue-query-nuxt"],
});
