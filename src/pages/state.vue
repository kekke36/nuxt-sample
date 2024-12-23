<script setup lang="ts">
import { useBooks } from "~/composables/books/useBooks";

const asdf = useState("asdf", () => ({ id: 134, name: "adsf" }));
const { books, updateTitle } = useBooks();
</script>

<template>
  <h1>state</h1>
  {{ books[0] }}

  <button @click="() => updateTitle(1, 'asdf')">update</button>
</template>
