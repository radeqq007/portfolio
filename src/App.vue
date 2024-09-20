<template>
  <div class="wrapper">
    <Nav />
    <Hero />
    <About />
    <Skills />
  </div>
</template>

<script setup lang="ts">
import About from './components/About.vue';
import Hero from './components/Hero.vue';
import Nav from './components/Nav.vue';
import Skills from './components/Skills.vue';
</script>

<style>
h2 {
  font-weight: 400;
  margin-bottom: 0;
  font-size: 5rem;
  color: var(--primary);
  letter-spacing: 4px;
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
