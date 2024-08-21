<template>
  <div class="nav" :class="{ active: isMenuOpen }">
    <div class="menu-toggle" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <div class="menu-toggle-bg"></div>
    <nav>
      <NavButton href="#about" content="about" @click="toggleMenu" />
      <NavButton href="#works" content="works" @click="toggleMenu" />
      <NavButton href="#social-links" content="follow me" @click="toggleMenu" />
      <div class="nav-bg"></div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavButton from './NavButton.vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
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

.menu-toggle {
  display: none;
}

@media only screen and (max-width: 650px) {
  nav {
    display: none;
  }

  .menu-toggle {
    position: relative;
    height: 4rem;
    aspect-ratio: 1;
    background-color: var(--primary-color);
    position: fixed;
    right: 10px;
    top: 10px;
    z-index: 100;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    z-index: 100;
    transition: background-color 0.15s ease-in-out;
  }

  .active .menu-toggle {
    background-color: var(--bg-color);
  }

  .menu-toggle-bg {
    position: fixed;
    background-color: var(--primary-color);
    z-index: 99;
    right: 10px;
    top: 10px;
    scale: 1;
    height: 4rem;
    aspect-ratio: 1;
    border-radius: 50%;
    transition: scale 0.15s ease-in-out;
  }

  .active .menu-toggle-bg {
    scale: 100;
  }

  .active nav {
    height: 60vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .bar {
    width: 70%;
    height: 3px;
    border-radius: 10px;
    background-color: var(--bg-color);
    z-index: 100;
    transition: background-color 0.15s ease-in-out, opacity 0.15s ease-in-out,
      transform 0.15s ease-in-out;
  }

  .active .bar:nth-of-type(1) {
    transform: rotate(45deg);
    position: absolute;
  }
  .active .bar:nth-of-type(2) {
    opacity: 0;
  }
  .active .bar:nth-of-type(3) {
    transform: rotate(-45deg);
    position: absolute;
  }

  .active .bar {
    background-color: var(--primary-color);
  }
  .nav-open {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .nav-bg {
    display: none;
  }
}
</style>
