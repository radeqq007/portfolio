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
import SplitType from 'split-type';
import { onMounted } from 'vue';
import About from './components/About.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import Nav from './components/Nav.vue';
import Skills from './components/Skills.vue';
import Works from './components/Works.vue';

// h2 hover effect
onMounted(() => {
  const headersText = SplitType.create('h2');
  if (headersText.chars != null) {
    headersText.chars.forEach(char => {
      const hoverTimeline = gsap.timeline({ paused: true });
      hoverTimeline
        .to(char, {
          scale: 1.1,
          duration: 0.5,
          ease: 'back.out',
        })
        .to(char, {
          scale: 1,
          duration: 1,
          ease: 'back.out',
        });

      char.addEventListener('mouseenter', () => {
        hoverTimeline.restart();
      });
    });
  }
});
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
