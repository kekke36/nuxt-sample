<script setup lang="ts">
const { data: books } = await useBooks();
</script>

<template>
  <ul>
    <li v-for="{ id, title, author } of books?.books" :key="id">
      {{ title }} ({{ author }})
    </li>
  </ul>
</template>
