<template>
  <div class="hero">
    <img
      src="/images/me.webp"
      alt=""
      @mousemove="imgMouseFollow"
      @mouseleave="imgResetMouseFollow"
      ref="img"
    />

    <svg
      ref="header"
      id="animatedText"
      viewBox="0 0 1200 300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="50%"
        y="30%"
        dominant-baseline="middle"
        text-anchor="middle"
        class="header"
      >
        <tspan dy="0">Radosław</tspan>
        <tspan x="50%" dy="0.8em">Kaczmarczyk</tspan>
      </text>
    </svg>
    <p>A passionate <span id="typewriter"></span></p>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { onMounted, ref } from 'vue';
import { useMouseFollow } from '../composables/useMouseFollow';

gsap.registerPlugin(TextPlugin);

onMounted(() => {
  const phrases: Array<string> = [
    'software developer',
    'student from Poland',
    'problem solver',
    'open-source enthusiast',
  ];

  const mainTimeline = gsap.timeline({
    repeat: -1,
  });

  const headerTimeline = gsap.timeline({});

  // Animate the header stroke effect and make the subheader appear
  headerTimeline
    .to('.header', {
      strokeDasharray: '10rem 0',
      strokeDashoffset: '10%',
      duration: 1.8,
      ease: 'power1.out',
    })
    .to('.header', {
      fill: 'white',
      duration: 0.2,
    })
    .to('p', {
      opacity: 1,
      duration: 1,
    });

  headerTimeline.add(mainTimeline);

  phrases.forEach(phrase => {
    const textTimeline = gsap.timeline({
      repeat: 1,
      yoyo: true,
      repeatDelay: 5,
    });

    textTimeline.to('#typewriter', {
      text: phrase,
      duration: 1,
    });

    mainTimeline.add(textTimeline);
  });
});

const img = ref(null);
const header = ref(null);

const {
  activateMouseFollow: imgMouseFollow,
  resetMouseFollow: imgResetMouseFollow,
} = useMouseFollow(img, 10);
</script>

<style scoped>
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  margin-top: 60px;
  border: 4px solid var(--primary);
  width: 20rem;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.01s ease-in-out;
}

svg {
  width: 80vw;
  height: 30vh;
  margin: 0;
}
.header {
  font-size: 10rem;
  font-weight: 900;
  text-align: center;
  margin: 0;

  fill: transparent;
  stroke: white;
  stroke-width: 1;
  stroke-dashoffset: 25%;
  stroke-dasharray: 0rem 20%;
}

p {
  opacity: 0;
  font-weight: 300;
  font-size: 2rem;
}

#typewriter {
  color: var(--primary);
}

@media screen and (max-width: 600px) {
  svg {
    width: 100%;
    height: 10rem;
  }

  .header {
    font-size: 10rem;
  }

  p {
    font-size: 1.5rem;
  }
}
</style>
