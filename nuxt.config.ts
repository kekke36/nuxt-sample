// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false, // 初期表示時にmswのモックAPIを呼ぶためにssr: falseが必要
});
