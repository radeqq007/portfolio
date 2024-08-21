<template>
  <nav>
    <NavButton href="#about" content="about" />
    <NavButton href="#works" content="works" />
    <NavButton href="#social-links" content="follow me" />
    <div class="nav-bg"></div>
  </nav>
  <div class="wrapper">
    <div class="line"></div>

    <Hero />
    <About />
  </div>
</template>

<script setup>
import NavButton from './components/NavButton.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
</script>

<style>
nav {
  position: fixed;
  padding: 1rem;
  right: 2rem;
  top: 1rem;
  z-index: 100;

  min-width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.nav-bg {
  position: fixed;
  z-index: -1;
  background-color: var(--bg-color);
  height: 5rem;
  width: 100%;
  transform: translateX(
    -4%
  ); /* This sucks but I don't feel like dealing with this right now */
  filter: blur(50px);
}

/* TODO: Fix the scroll snap*/
.wrapper {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

.section {
  position: relative;
  height: 100vh;
  scroll-snap-align: start;
  background-color: var(--bg-color);
  overflow: hidden;
  padding: 4rem;
  z-index: 2; /* idk why this works but without this blobs aren't visible */
}

.line {
  position: absolute;
  top: 80vh;
  bottom: 10vh;
  left: 3rem;
  z-index: 99; /* I don't know what's overflowing it but withouth this it's not visible*/
  width: 0.4rem;
  border-radius: 1rem;
  background-color: var(--primary-color);
}

h1 {
  margin: 0;
  color: var(--primary-color);
  font-family: 'Kaushan Script';
  font-weight: normal;
  line-height: 1;
  font-size: 3rem;
}

p {
  color: var(--secondary-color);
  font-family: 'Karla';
  font-size: 2rem;
}
</style>
