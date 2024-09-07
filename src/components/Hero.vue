<template>
  <div class="hero">
    <h1>Radosław<br />Kaczmarczyk</h1>
    <p>A passionate <span id="typewriter"></span><span id="cursor"></span></p>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { onMounted } from 'vue';

gsap.registerPlugin(TextPlugin);

onMounted(() => {
  const phrases = [
    'software developer',
    'student from Poland',
    'problem solver',
    'open-source enthusiast',
  ];

  const mainTimeline = gsap.timeline({
    repeat: -1,
  });

  phrases.forEach(phrase => {
    const textTimeline = gsap.timeline({
      repeat: 1,
      yoyo: true,
      repeatDelay: 3,
    });

    textTimeline.to('#typewriter', {
      text: phrase,
      duration: 1,
    });

    mainTimeline.add(textTimeline);
  });
});
</script>

<style scoped>
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 8rem;
  font-weight: 900;
  text-align: center;
  line-height: 0.8;
  margin: 0;
}

p {
  font-weight: 300;
  font-size: 2rem;
}

#typewriter {
  color: var(--primary);
}
</style>
