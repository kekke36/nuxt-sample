import type { Books } from "~/types/api/books";

export function useFetchBooks() {
  const url = "/api/books";

  return useCustomFetch<Books>(url);
}
