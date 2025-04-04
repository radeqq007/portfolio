<template>
  <div class="card" ref="card">
    <img :src="img" alt="skillCard" />
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Ref } from 'vue';
import { onMounted, ref } from 'vue';

gsap.registerPlugin(ScrollTrigger);

const { img, text } = defineProps({
  img: String,
  text: String,
});

const card: Ref<HTMLElement | null> = ref<HTMLElement | null>(null);

onMounted(() => {
  if (card.value) {
    card.value.addEventListener('mouseenter', () => {
      gsap.to(card.value, {
        filter: 'grayscale(0)',
        color: 'white',
        scale: 1.06,
        duration: 0.3,
        ease: 'back.out',
      });
    });

    card.value.addEventListener('mouseleave', () => {
      gsap.to(card.value, {
        filter: window.innerWidth <= 600 ? 'grayscale(0)' : 'grayscale(1)', // Don't apply grayscale when on mobile
        color: 'color-mix(in srgb, var(--text) 60%, transparent)',
        scale: 1,
        duration: 0.5,
        ease: 'back.out',
      });
    });
  }
});
</script>

<style scoped>
.card {
  padding: 0.1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 1rem;
  background-color: color-mix(in srgb, white 4%, transparent);
  border: 1px solid color-mix(in srgb, white 10%, transparent);
  backdrop-filter: blur(1.8px);
  color: color-mix(in srgb, var(--text) 60%, transparent);

  filter: grayscale(1);

  transition: 0.2s ease-in-out filter, 0.2s ease-in-out color,
    0.2s ease-in-out scale;
}

img {
  height: 4rem;
}

p {
  font-size: 3rem;
}

@media screen and (max-width: 1024px) {
  .card {
    filter: grayscale(0);
  }
}
</style>
