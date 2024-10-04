<template>
  <div @click="toggleMenu" class="menu-toggle" ref="menu">
    <div class="bar" ref="bar1"></div>
    <div class="bar" ref="bar2"></div>
    <div class="bar" ref="bar3"></div>
  </div>
  <nav :class="isMenuVisible ? 'active' : ''" ref="nav">
    <a @click="closeMenuOnLinkClick" href="#about">About Me</a>
    <a @click="closeMenuOnLinkClick" href="#skills">Skills</a>
    <a @click="closeMenuOnLinkClick" href="#work">Work</a>
    <a @click="closeMenuOnLinkClick" href="#contact">Contact</a>
  </nav>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ref } from 'vue';

const menu = ref(null);

const nav = ref(null);

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
    )
      .to(
        bar3.value,
        {
          duration: 0.5,
          bottom: '47.5%', // For whatever reason 50% is too much
          ease: 'power3.out',
        },
        '0'
      )

      .to(
        bar1.value,
        {
          duration: duration,
          transform: 'rotate(45deg)',
          backgroundColor: 'rgb(255, 56, 182)',
          ease: 'power3.out',
        },
        '0.2'
      )

      .to(
        bar2.value,
        {
          duration: duration,
          opacity: 0,
          ease: 'power3.out',
        },
        '0'
      )

      .to(
        bar3.value,
        {
          duration: duration,
          backgroundColor: 'rgb(255, 56, 182)',
          transform: 'rotate(-45deg)',
          ease: 'power3.out',
        },
        '0.2'
      )

      .to(
        '.menu-toggle',
        {
          duration: duration,
        },
        '0'
      )

      .to(
        nav.value,
        {
          duration: 0.4,
          height: '100vh',
          top: '0',
          borderRadius: '0',
          ease: 'power3.out',
        },
        '0'
      )

      .to(
        '.menu-toggle',
        {
          backgroundColor: 'rgb(14, 13, 18)',
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

        backgroundColor: 'rgb(14, 13, 18)',
        ease: 'power3.out',
      },
      '0'
    )

      .to(
        bar3.value,
        {
          duration: duration,
          transform: 'rotate(0)',
          backgroundColor: 'rgb(14, 13, 18)',
          ease: 'power3.out',
        },
        '0'
      )

      .to(
        bar1.value,
        {
          duration: 0.4,
          top: '30%',
        },
        '0.2'
      )

      .to(
        bar3.value,
        {
          duration: 0.4,
          bottom: '30%',
        },
        '0.2'
      )

      .to(
        bar2.value,
        {
          duration: duration,
          opacity: 1,
          ease: 'power3.out',
        },
        '0'
      )

      .to(
        '.menu-toggle',
        {
          backgroundColor: 'rgb(255, 56, 182)',
          duration: duration,
        },
        '0'
      )

      .to(
        nav.value,
        {
          duration: 0.2,
          height: '0',
          top: '-10%',
          ease: 'power3.in',
        },
        '0'
      );
  }

  isMenuVisible.value = !isMenuVisible.value;
};

const closeMenuOnLinkClick = () => {
  if (isMenuVisible.value) {
    toggleMenu();
  }
};
</script>

<style scoped>
nav {
  z-index: 100;
  position: fixed;
  width: 100%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 2rem;
  height: 0;
  overflow: hidden;
  background-color: var(--bg);
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
  font-weight: 200;
  font-size: 3rem;
}

a:hover {
  color: var(--primary);
  scale: 1.05;
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
</style>
