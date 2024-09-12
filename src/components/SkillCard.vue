<template>
  <div class="card" ref="card" :style="{ transform: cardTransform }">
    <img :src="img" alt="skillCard" />
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { useMouseInElement } from '@vueuse/core';
import { computed, ref } from 'vue';

const { img, text } = defineProps({
  img: String,
  text: String,
});

const card = ref(null);
const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(card);

const cardTransform = computed(() => {
  const maxRotation: number = 10;

  const rotationX = (
    maxRotation / 2 -
    (elementY.value / elementHeight.value) * maxRotation
  ).toFixed(2);

  const rotationY = (
    (elementX.value / elementWidth.value) * maxRotation -
    maxRotation / 2
  ).toFixed(2);

  return isOutside.value
    ? ''
    : `perspective(${elementWidth.value}px) rotateX(${rotationX}deg)  rotateY(${rotationY}deg)`;
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

  transition: 0.2s ease-in-out filter, 0.2s ease-in-out color,
    0.2s ease-in-out scale;
}

.card:hover {
  filter: grayscale(0);
  color: var(--text);
  scale: 1.1;
}
img {
  height: 4rem;
}

p {
  font-size: 3rem;
}
</style>
