<script setup lang="ts">
import { z } from "zod";

const testSchema = z.object({
  name: z.string(),
  age: z.number(),
  tel: z.string(),
});

type User = z.infer<typeof testSchema>;

const data: User = {
  name: "test",
  age: 12,
  tel: "12341234",
};

const nameSchema = z.string({
  invalid_type_error: "asdf",
});
const result = nameSchema.safeParse("1234");

const res = ref("");

if (result.success) {
  res.value = "success";
  console.log(result.data);
} else {
  res.value = "fail";
  console.log(result.data);
  console.log(result.error.message);
}
</script>

<template>
  index
  <p>{{ res }}</p>
  <p v-if="result.error">{{ result.error.errors[0].message }}</p>
</template>
