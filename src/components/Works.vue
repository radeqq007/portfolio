<template>
  <span v-if="title" id="works"></span>
  <div class="works section">
    <h2 v-if="title">WORKS</h2>
    <div class="content" :class="layout">
      <a :href="link" target="_blank">
        <img :src="img" alt="project" />
      </a>

      <div class="info">
        <h3>{{ name }}</h3>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: Boolean,
  layout: String,
  img: String,
  name: String,
  description: String,
  link: String,
});
</script>

<style scoped>
.content {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 90vh;
  gap: 5rem;
}

.left {
  flex-direction: row;
}

.right {
  flex-direction: row-reverse;
}

img {
  min-width: 65%;
  height: 60vh;
  border-radius: 0.4rem;
  object-fit: cover;
  border: 4px solid var(--primary-color);
  transition: scale 0.1s ease-in-out, padding 0.1s ease-in-out;
}

img:hover {
  scale: 1.02;
}

@media only screen and (max-width: 650px) {
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
  }

  img {
    width: 90vw;
    height: 20vh;
    margin-left: 1.3rem; /* I have to do this because of the line */
  }
  h3,
  p {
    width: 80vw;
  }
}
</style>
