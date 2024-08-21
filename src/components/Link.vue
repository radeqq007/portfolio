<template>
  <a :href="href" target="_blank">
    <div class="link">
      <img :src="img" alt="icon" />
      <p>{{ name }}</p>
    </div>
  </a>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  img: String,
  name: String,
  href: String,
});
</script>

<style scoped>
.link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

img {
  height: 4rem;
  aspect-ratio: 1;
  filter: brightness(100);
  margin-right: 2rem;
  margin-left: 1rem;
}

a {
  text-decoration: none;
}

p {
  position: relative;
}

p::before {
  content: '';
  height: 4px;
  width: 0;
  position: absolute;
  bottom: 0;
  background-color: var(--secondary-color);

  transition: width 0.1s ease-in-out;
}
a:hover {
  cursor: pointer;
}

a:hover p::before {
  width: 100%;
}
</style>
