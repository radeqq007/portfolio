<template>
  <nav>
    <a href="#about">About Me</a>
    <a href="#skills">Skills</a>
    <a href="#work">Work</a>
    <a href="#contact">Contact</a>
  </nav>
</template>

<script setup>
import gsap from 'gsap-trial';
import SplitText from 'gsap-trial/SplitText';
import { onMounted } from 'vue';

gsap.registerPlugin(SplitText);

onMounted(() => {
  const links = document.querySelectorAll('nav a');

  links.forEach(link => {
    const split = new SplitText(link, {
      type: 'chars',
    });

    const chars = split.chars;

    const hoverTimeline = gsap.timeline({ paused: true });

    hoverTimeline
      .to(chars, {
        yPercent: -100,
        stagger: 0.01,
        duration: 0.2,
        ease: 'power1.inOut',
      })
      .to(chars, {
        yPercent: 100,
        duration: 0,
      })
      .to(chars, {
        yPercent: 0,
        stagger: 0.01,
        duration: 0.2,
        ease: 'power1.inOut',
      });

    link.addEventListener('click', () => {
      hoverTimeline.restart();
    });
  });
});
</script>

<style scoped>
nav {
  position: fixed;
  width: 100%;
  top: 6px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

a {
  text-decoration: none;
  font-size: 2rem;
  color: var(--text);
  font-weight: 100;
  text-shadow: 0 0 10px var(--bg);

  transition: color 0.1s ease-in-out;
  overflow: hidden;
}

a:hover {
  color: var(--primary);
}
</style>
