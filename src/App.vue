<template>
  <div class="wrapper">
    <Nav />
    <Hero />
    <About />
    <Skills />
    <Works />
    <Contact />
    <Footer />

    <div class="bg">
      <vue-particles
        id="tsparticles"
        @particles-loaded="particlesLoaded"
        :options="{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'repulse',
              },
              onHover: {
                enable: true,
                mode: 'grab',
              },
            },
            modes: {
              repulse: {
                distance: 250,
                duration: 0.6,
              },
              grab: {
                distance: 200,
              },
            },
          },
          particles: {
            color: {
              value: '#9b9b9b',
              opacity: 0.2,
            },
            links: {
              color: '#9b9b9b',
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: 'out',
              random: true,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 120,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import SplitType from 'split-type';
import { onMounted, ref, Ref } from 'vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import Nav from './components/Nav.vue';
import Skills from './components/Skills.vue';
import Works from './components/Works.vue';
import { useMouseFollow } from './composables/useMouseFollow';

// h2 hover effect
onMounted(() => {
  const headersText = SplitType.create('h2');
  if (headersText.chars != null) {
    headersText.chars.forEach(char => {
      const charRef: Ref<HTMLElement | null> = ref(char);

      const { activateMouseFollow, resetMouseFollow } = useMouseFollow(
        charRef,
        20
      );

      char.addEventListener('mousemove', activateMouseFollow);
      char.addEventListener('mouseleave', resetMouseFollow);
    });
  }
});
</script>

<style>
.bg {
  z-index: -1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
}

h2 {
  font-weight: 400;
  margin-bottom: 0;
  font-size: 5rem;
  color: var(--primary);
  letter-spacing: 4px;
  overflow: hidden;
  cursor: default;
}

.section {
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
}

p {
  font-weight: 300;
}
@media screen and (max-width: 600px) {
  h2 {
    font-weight: 500;
    font-size: 3.4rem;
    text-align: center;
  }
}

.bg {
  z-index: -1000;
}
</style>
