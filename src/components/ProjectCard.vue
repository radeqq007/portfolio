<template>
  <div class="project">
    <img :src="imgSrc" alt="Project preview" class="preview" />
    <div class="info">
      <h3>
        <a :href="repo" target="_blank">{{ title }}</a>
      </h3>
      <p>{{ desc }}</p>
      <div class="stack">
        <h4>Tech stack:</h4>
        <span>
          <img v-for="(src, key) in stack" :src="src" :alt="src" :key="key" />
        </span>
      </div>
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
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.info {
  display: flex;
  flex-direction: column;
}

h3 {
  font-size: 3rem;
  color: var(--primary);
  font-weight: 400;
  margin: 0;
}

.preview {
  max-width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border: 2px solid var(--primary);
  border-radius: 1rem;
}

p {
  margin-block: 0.2rem 0;
  font-size: 1.4rem;
  line-height: 1.4;
}

.stack {
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 1.6rem;
    font-weight: 500;
    margin: 0;
  }

  img {
    max-height: 4rem;
  }
}

a {
  color: inherit;
  text-decoration: none;
  position: relative;
}

a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary);
  transform: scaleX(0);
  transition: transform 0.1s ease-in-out;
}

a:hover::before {
  transform: scaleX(1);
}

@media screen and (max-width: 1024px) {
  .project {
    grid-template-columns: 1fr;
  }
}
</style>
