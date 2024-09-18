<script setup lang="ts">
const { data: books } = await useFetch<{
  books: { id: number; title: string; author: string }[];
}>("http://localhost:3000/api/books");
</script>

<template>
  <main>
    <h1>Books</h1>
    <ul>
      <li v-for="{ id, title, author } of books?.books" :key="id">
        {{ title }} ({{ author }})
      </li>
    </ul>
  </main>
</template>
