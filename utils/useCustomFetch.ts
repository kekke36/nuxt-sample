import type { UseFetchOptions } from "nuxt/app";

export const useCustomFetch = <T>(
  url: string,
  options: UseFetchOptions<T> = {}
) => {
  return useFetch(url, { ...options, $fetch: customFetch });
};
