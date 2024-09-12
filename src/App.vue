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
  font-weight: 200;
  font-size: 5rem;
  color: var(--primary);
}
</style>
