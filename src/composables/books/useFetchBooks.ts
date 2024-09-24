import type { Books } from "~/types/api/books";

export function useFetchBooks() {
  const url = "/api/books";

  return useQuery<Books>({
    queryKey: [url],
    queryFn: () => customFetch(url),
  });
}
