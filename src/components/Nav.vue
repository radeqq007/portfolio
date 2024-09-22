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
import SplitType from 'split-type';
import { onMounted, ref } from 'vue';

const menu = ref(null);

const bar1 = ref(null);
const bar2 = ref(null);
const bar3 = ref(null);

const isMenuVisible = ref(false);

const toggleMenu = () => {
  const duration: number = 0.6;

  isMenuVisible.value = !isMenuVisible.value;

  // TODO: Fix this
  if (!isMenuVisible.value) {
    gsap.to(bar1.value, {
      duration: duration,
      transform: 'rotate(45deg)',
      top: '10%',
      ease: 'bounce.out',
    });
    gsap.to(bar2.value, {
      duration: duration,
      opacity: 0,
    });

    gsap.to(bar3.value, {
      duration: duration,
      transform: 'rotate(-45deg)',
      top: '-10%',
      ease: 'bounce.out',
      y: -10,
    });
  } else {
    gsap.to(bar1.value, {
      duration: duration,
      transform: 'rotate(0)',
      top: 0,

      ease: 'bounce.out',
    });
    gsap.to(bar2.value, {
      duration: duration,
      opacity: 1,
    });
    gsap.to(bar3.value, {
      duration: duration,
      transform: 'rotate(0)',
      top: 0,
      ease: 'bounce.out',
    });
  }
};

// h2 hover effect
onMounted(() => {
  const headersText = SplitType.create('a');
  if (headersText.lines != null) {
    headersText.lines.forEach(line => {
      const hoverTimeline = gsap.timeline({ paused: true });
      hoverTimeline
        .to(line, {
          scale: 0.9,
          duration: 0.1,
          ease: 'power1.out',
        })
        .to(line, {
          scale: 1,
          duration: 0.8,
          ease: 'back.out',
        });

      line.addEventListener('click', () => {
        hoverTimeline.restart();
      });
    });
  }
});
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
    position: relative;
    width: 60%;
    height: 4px;
    border-radius: 2rem;
    background-color: var(--bg);
  }
}
</style>
