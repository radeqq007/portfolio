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
  </div>
</template>

<script setup>
import NavButton from './components/NavButton.vue';
import Hero from './components/Hero.vue';
</script>

<style>
nav {
  position: fixed;
  padding: 1rem;
  right: 1.5rem;
  top: 1rem;
  z-index: 100;

  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.wrapper {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

.section {
  height: 100vh;
  scroll-snap-align: start;
  background-color: var(--bg-color);
  overflow: hidden;
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

.bg-blob {
  background-color: var(--primary-color);
  height: 35rem;
  aspect-ratio: 1;
  border-radius: 50%;
  filter: blur(250px);
  position: absolute;
}

h1 {
  margin: 0;
  color: var(--primary-color);
  font-family: 'Kaushan Script';
  font-weight: normal;
  line-height: 1;
}
</style>
