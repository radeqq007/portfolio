<template>
  <div class="card">
    <img :src="img" alt="skillCard" />
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  img: String,
  text: String,
});
</script>

<style scoped>
.card {
  padding: 0.1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 1rem;
  background-color: color-mix(in srgb, var(--text) 2%, transparent);
  color: color-mix(in srgb, var(--text) 60%, transparent);

  filter: grayscale(1);

  transition: 0.1s ease-in-out filter, 0.1s ease-in-out color;
}

.card:hover {
  filter: grayscale(0);
  color: var(--text);
}
img {
  height: 4rem;
}

p {
  font-size: 3rem;
}
</style>
