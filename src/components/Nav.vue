<template>
  <div
    @click="toggleMenu"
    @mousemove="activateMouseFollow"
    @mouseleave="resetMouseFollow"
    class="menu-toggle"
    ref="menu"
  >
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
import { onMounted, ref } from 'vue';
import { useMouseFollow } from '../composables/useMouseFollow';

const menu = ref(null);

const nav = ref(null);

const bar1 = ref(null);
const bar2 = ref(null);
const bar3 = ref(null);

const { activateMouseFollow, resetMouseFollow } = useMouseFollow(menu, 40, 5);

const isMenuVisible = ref(false);
const tl = gsap.timeline({ reversed: true, paused: true });
onMounted(() => {
  const duration: number = 0.6;
  tl
    // .from(
    //   bar1.value, {
    //     rotate: '0deg',
    //     top: '30%',
    //   }
    // )
    // .from (
    //   bar2.value, {
    //     opacity: 1,
    //     width: '60%',
    //   }
    // )
    // .from(
    //   bar3.value, {

    //     rotate: '0deg',
    //     bottom: '30%',
    //   }
    // )
    // .from(nav.value, {
    //   height: '0vh',
    //   opacity: 0.9,
    // })

    .to(
      bar1.value,
      {
        rotate: '45deg',
        duration: duration,
        top: '47.5%',
        ease: 'back.out',
      },
      '0'
    )
    .to(
      bar3.value,
      {
        rotate: '-45deg',
        duration: duration,
        bottom: '47.5%',
        ease: 'back.out',
      },
      '<'
    )
    .to(
      bar2.value,
      {
        opacity: 0,
        width: 0,
      },
      '<'
    )
    .to(
      nav.value,
      {
        height: '100vh',
        opacity: 1,
      },
      '<'
    );
});
const toggleMenu = () => {
  tl.reversed() ? tl.play() : tl.reverse();

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
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 6rem;
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

@media screen and (max-width: 600px) {
  .menu-toggle {
    top: 10px;
    right: 10px;
    height: 5.2rem;
  }
}
</style>
