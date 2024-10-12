<template>
  <div class="project">
    <span class="img">
      <img :src="imgSrc" alt="project demo" />
    </span>
    <span class="info">
      <a :href="repo" target="_blank">
        <h3>{{ title }}</h3>
      </a>
      <p>{{ desc }}</p>
    </span>

    <div class="tech-stack">
      <img
        :src="src"
        :key="key"
        :alt="src"
        class="tech"
        v-for="(src, key) in stack"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  desc: String,
  imgSrc: String,
  stack: {
    type: Array,
    required: true,
    validator: value => value.every(item => typeof item === 'string'), // ensure every element is a string
  },
  repo: String,
});
</script>

<style scoped>
.project {
  position: relative;
  height: 20rem;
  width: 48%;
  border: 2px solid color-mix(in srgb, white 40%, black);

  border-radius: 15px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 50% 1fr 1fr 2fr;
  grid-template-columns: 1fr;
}

.img {
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  z-index: -1;
  opacity: 0.9;
}

.img > img {
  max-width: 100%;
  height: 20rem;
  object-fit: cover;
}

.img::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  background: linear-gradient(
    0deg,
    color-mix(in srgb, var(--bg) 90%, transparent) 0%,
    transparent 100%
  );
  z-index: 0;
}

.info {
  padding-inline: 1rem;
  padding-bottom: 0.5rem;
  text-shadow: 0 0 4px black;
}

h3 {
  color: var(--text);
  font-size: 2.4rem;
  margin: 0;
  margin-bottom: 0.2rem;
  font-weight: 300;
}

p {
  margin-top: 0;
  color: color-mix(in srgb, var(--text) 90%, black);
  margin-bottom: 0;
}

a {
  text-decoration: none;
}

.tech-stack {
  height: 4rem;

  border-top: 1px solid color-mix(in srgb, white 40%, transparent);
  border-radius: 20px 20px 0 0;
  padding: 0.1rem;
  padding-inline: 0.6rem;
  display: flex;
  justify-content: left;
  gap: 20px;
  align-items: center;
  overflow: hidden;

  grid-column: 1 / -1;
  grid-row: 6/6;
}

.tech {
  height: 4rem;
}

@media screen and (max-width: 600px) {
  .project {
    width: 100%;
    grid-template-rows: 10% 1fr 1fr 2fr;
  }

  .img::before {
    background: linear-gradient(
      0deg,
      color-mix(in srgb, black 60%, transparent) 50%,
      transparent 100%
    );
  }
  h3 {
    font-weight: 600;
  }
  p {
    font-weight: 500;
  }
}
</style>
