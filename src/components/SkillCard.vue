<template>
  <div class="card" ref="card">
    <img :src="img" alt="skillCard" />
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, ref } from 'vue';

gsap.registerPlugin(ScrollTrigger);

const { img, text } = defineProps({
  img: String,
  text: String,
});

const card = ref(null);

onMounted(() => {
  if (card.value) {
    gsap.to(card.value, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: 'back.out',
      scrollTrigger: {
        trigger: card.value,
        start: 'top bottom',
      },
    });

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
        filter: 'grayscale(1)',
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
  scale: 0.95;
  opacity: 0;
  padding: 0.1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 1rem;
  background-color: color-mix(in srgb, white 4%, transparent);
  border: 1px solid color-mix(in srgb, white 10%, transparent);

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

@media screen and (max-width: 600px) {
  .card {
    filter: grayscale(0);
  }
}
</style>
