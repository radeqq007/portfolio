<template>
  <div class="hero section">
    <h1>
      Radosław
      <br />
      Kaczmarczyk
    </h1>
    <p>A passionate software developer from Poland.</p>

    <Blob />
    <Blob />
  </div>
</template>

<script setup>
import Blob from './Blob.vue';
</script>

<style scoped>
.hero {
  padding-left: 0;
  position: relative;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(10, 1fr);
}

h1 {
  font-size: 8rem;
  grid-column-start: 2;
}

p {
  font-size: 3rem;
  font-style: italic;
  grid-column-start: 2;
}

.blob:nth-of-type(1) {
  right: -20rem;
  bottom: -8rem;
}

.blob:nth-of-type(2) {
  right: 8rem;
  bottom: -20rem;
}
</style>
