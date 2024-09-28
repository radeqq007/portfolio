<template>
  <div @click="toggleMenu" class="menu-toggle" ref="menu">
    <div class="bar" ref="bar1"></div>
    <div class="bar" ref="bar2"></div>
    <div class="bar" ref="bar3"></div>
  </div>
  <nav :class="isMenuVisible ? 'active' : ''">
    <a href="#about">About Me</a>
    <a href="#skills">Skills</a>
    <a href="#work">Work</a>
    <a href="#contact">Contact</a>
  </nav>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';

const menu = ref(null);

const bar1 = ref(null);
const bar2 = ref(null);
const bar3 = ref(null);

const isMenuVisible = ref(false);

const toggleMenu = () => {
  const duration: number = 0.6;
  const tl = gsap.timeline({});

  if (!isMenuVisible.value) {
    tl.to(
      bar1.value,
      {
        duration: 0.2,
        top: '47.5%', // For whatever reason 50% is too much
        ease: 'power3.out',
      },
      '0'
    );
    tl.to(
      bar3.value,
      {
        duration: 0.5,
        bottom: '47.5%', // For whatever reason 50% is too much
        ease: 'power3.out',
      },
      '0'
    );

    tl.to(
      bar1.value,
      {
        duration: duration,
        transform: 'rotate(45deg)',
        ease: 'power3.out',
      },
      '0.2'
    );
    tl.to(
      bar2.value,
      {
        duration: duration,
        opacity: 0,
        ease: 'power3.out',
      },
      '0'
    );

    tl.to(
      bar3.value,
      {
        duration: duration,
        transform: 'rotate(-45deg)',
        ease: 'power3.out',
      },
      '0.2'
    );

    tl.to(
      '.menu-toggle',
      {
        duration: duration,
      },
      '0'
    );
  } else {
    tl.to(
      bar1.value,
      {
        duration: duration,
        transform: 'rotate(0)',
        ease: 'power3.out',
      },
      '0'
    );
    tl.to(
      bar3.value,
      {
        duration: duration,
        transform: 'rotate(0)',
        ease: 'power3.out',
      },
      '0'
    );
    tl.to(
      bar1.value,
      {
        duration: 0.4,
        top: '30%',
      },
      '0.2'
    );
    tl.to(
      bar3.value,
      {
        duration: 0.4,
        bottom: '30%',
      },
      '0.2'
    );

    tl.to(
      bar2.value,
      {
        duration: duration,
        opacity: 1,
        ease: 'power3.out',
      },
      '0'
    );

    tl.to(
      '.menu-toggle',
      {
        duration: duration,
      },
      '0'
    );
  }

  isMenuVisible.value = !isMenuVisible.value;
};
</script>

<style scoped>
nav {
  z-index: 100;
  height: 4rem;
  position: fixed;
  width: 100%;
  background-image: linear-gradient(var(--bg) 60%, rgba(0, 0, 0, 0));
  padding-top: 6px;
  left: 0;
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 2rem;
}
.menu-toggle {
  display: none;
  z-index: 999;
}

a {
  text-decoration: none;
  font-size: 2rem;
  color: var(--text);
  font-weight: 100;

  transition: color 0.1s ease-in-out, scale 0.1s ease-in-out;
  overflow: hidden;
}

a:hover {
  color: var(--primary);
  scale: 1.05;
}

@media screen and (max-width: 600px) {
  nav {
    display: none;
  }

  .menu-toggle {
    position: fixed;
    top: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 5rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--primary);
  }

  .bar {
    position: absolute;
    width: 60%;
    height: 4px;
    border-radius: 2rem;
    background-color: var(--bg);
  }

  .bar:nth-of-type(1) {
    top: 30%;
  }
  .bar:nth-of-type(3) {
    bottom: 30%;
  }
}
</style>
