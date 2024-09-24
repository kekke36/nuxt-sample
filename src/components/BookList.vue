<script setup lang="ts">
import { useFetchBooks } from "~/composables/books/useFetchBooks";

const { data: books } = await useFetchBooks();
</script>

<template>
  <ul>
    <li v-for="{ id, title, author } of books?.books" :key="id">
      {{ title }} ({{ author }})
    </li>
  </ul>
</template>
