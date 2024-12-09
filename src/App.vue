<template>
  <div class="wrapper">
    <Nav />
    <Hero />
    <About />
    <Skills />
    <Works />
    <Contact />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import SplitType from 'split-type';
import { onMounted, ref, Ref } from 'vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import Nav from './components/Nav.vue';
import Skills from './components/Skills.vue';
import Works from './components/Works.vue';
import { useMouseFollow } from './composables/useMouseFollow';

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

.section {
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
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
