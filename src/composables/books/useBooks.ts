import { useFetchBooks } from "./useFetchBooks";

export function useBooks() {
  const books = ref<{ id: number; title: string; author: string }[]>([]);
  const { data } = useFetchBooks();

  watch(data, () => {
    if (!data.value?.books) return;
    books.value = data.value.books;
  });

  function updateTitle(id: number, title: string) {
    books.value = books.value.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      }
      return book;
    });
  }

  return { books, updateTitle };
}
