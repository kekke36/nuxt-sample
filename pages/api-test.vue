<script setup lang="ts">
const { data: books } = await useApiFetch<{
  books: { id: number; title: string; author: string }[];
}>("http://localhost:3000/api/books");

const todos = ref();

const postApi = async () => {
  const { data: res } = await apiClient.post("http://localhost:3000/todos");
  todos.value = res;
};
</script>

<template>
  <main>
    <h1>Books</h1>
    <ul>
      <li v-for="{ id, title, author } of books?.books" :key="id">
        {{ title }} ({{ author }})
      </li>
    </ul>

    <div>
      <button @click="postApi">post</button>
      <p>{{ todos?.title }}</p>
    </div>
  </main>
</template>
