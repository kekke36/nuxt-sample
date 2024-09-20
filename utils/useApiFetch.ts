import type { UseFetchOptions } from "nuxt/app";

export const useApiFetch = <T>(
  url: string,
  options: UseFetchOptions<T> = {}
) => {
  return useFetch(url, { ...options, baseURL: "http://localhost:3000" });
};
