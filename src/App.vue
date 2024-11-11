<template>
  <div class="wrapper">
    <Nav />
    <Hero />
    <About />
    <Skills />
    <Works />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import Lenis from 'lenis';
import SplitType from 'split-type';
import { onMounted } from 'vue';
import About from './components/About.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import Nav from './components/Nav.vue';
import Skills from './components/Skills.vue';
import Works from './components/Works.vue';
import { useMouseFollow } from './composables/useMouseFollow';
import { ref, Ref } from 'vue';

// h2 hover effect
onMounted(() => {
  const headersText = SplitType.create('h2');
  if (headersText.chars != null) {
    headersText.chars.forEach(char => {
      const charRef: Ref<HTMLElement | null> = ref(char);

      const { activateMouseFollow, resetMouseFollow } = useMouseFollow(
        charRef,
        20
      );

      char.addEventListener('mousemove', activateMouseFollow);
      char.addEventListener('mouseleave', resetMouseFollow);
    });
  }
});

// Smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: t => Math.min(1, 100.1 - Math.pow(2, -10 * t)),
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
</script>

<style>
h2 {
  font-weight: 400;
  margin-bottom: 0;
  font-size: 5rem;
  color: var(--primary);
  letter-spacing: 4px;
  overflow: hidden;
  cursor: default;
}

p {
  font-weight: 300;
}
@media screen and (max-width: 600px) {
  h2 {
    font-weight: 500;
    font-size: 3.4rem;
  }
}
</style>
