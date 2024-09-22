<script setup lang="ts">
import type { Todos } from "~/mocks/handlers/todos";

const { data: books } = await useBooks();

const {
  data: todos,
  status,
  execute,
} = useCustomFetch<Todos>("/todos", {
  method: "POST",
  immediate: false,
  body: {
    id: 1324,
    title: "asdf",
  },
});

// const todos = ref();
console.log(constants.test.ASADF);

const postApi = async () => {
  // const { data: res } = await apiClient.post("http://localhost:3000/todos");

  // const { $customFetch } = useNuxtApp();

  // const res = await customFetch<Todos>("/todos", {
  //   method: "POST",
  // });

  execute();

  // todos.value = res.value;
};

const { isLoading, progress } = useLoadingIndicator();
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

    <p>isLoading{{ isLoading }}</p>
    <p>progress{{ progress }}</p>
    <p>status{{ status }}</p>
  </main>
</template>
