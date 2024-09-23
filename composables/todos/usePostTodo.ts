import type { Todos } from "~/mocks/handlers/todos";

export function usePostTodo() {
  return useMutation<Todos>({
    mutationFn: () =>
      customFetch("todos", {
        method: "POST",
      }),
  });
}
