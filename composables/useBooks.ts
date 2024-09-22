export function useBooks() {
  return useCustomFetch<{
    books: { id: number; title: string; author: string }[];
  }>("/api/books");
}
