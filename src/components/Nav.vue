<template>
  <nav>
    <NavButton href="#about" content="about" />
    <NavButton href="#works" content="works" />
    <NavButton href="#social-links" content="follow me" />
    <div class="nav-bg"></div>
  </nav>
</template>

<script setup>
import NavButton from './NavButton.vue';
</script>

<style scoped>
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
</style>
