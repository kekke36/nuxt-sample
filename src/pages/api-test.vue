<script setup lang="ts">
import { useFetchBooks } from "../composables/books/useFetchBooks";
import { usePostTodo } from "../composables/todos/usePostTodo";

const { data: books } = await useFetchBooks();
const { data: todos, mutate } = usePostTodo();

// const {
//   data: todos,
//   status,
//   execute,
// } = useCustomFetch<Todos>("/todos", {
//   method: "POST",
//   immediate: false,
//   body: {
//     id: 1324,
//     title: "asdf",
//   },
// });

// const todos = ref();
console.log(constants.test.ASADF);

function postApi() {
  // const { data: res } = await apiClient.post("http://localhost:3000/todos");
  // const { $customFetch } = useNuxtApp();
  // const res = await customFetch<Todos>("/todos", {
  //   method: "POST",
  //   onResponse: () => console.log("success"),
  // });
  // execute();
  // todos.value = res.value;

  mutate();
}

const isFetching = useIsFetching();
const isMutating = useIsMutating();
</script>

<template>
  <main>
    <h1>Books</h1>
    <Suspense>
      <div>
        <ul>
          <li v-for="{ id, title, author } of books?.books" :key="id">
            {{ title }} ({{ author }})
          </li>
        </ul>
        <BookList />
      </div>
      <template #fallback> Loading... </template>
    </Suspense>

    <div>
      <button @click="postApi">post</button>
      <p>{{ todos?.title }}</p>
    </div>

    <p>isFetching{{ isFetching }}</p>
    <p>isMutating{{ isMutating }}</p>
  </main>
</template>
