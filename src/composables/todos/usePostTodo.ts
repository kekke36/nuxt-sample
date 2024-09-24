import type { Todos } from "~/types/api/todos";

export function usePostTodo() {
  return useMutation<Todos>({
    mutationFn: () =>
      customFetch("todos", {
        method: "POST",
      }),
  });
}
