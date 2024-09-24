import { useQuery } from "@tanstack/vue-query";

export const useCustomFetch = <T>(url: string) => {
  return useQuery<T>({
    queryKey: [url],
    queryFn: () => customFetch(url),
  });
};
