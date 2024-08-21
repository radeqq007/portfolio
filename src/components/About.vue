<template>
  <div class="about section">
    <h1>ABOUT ME</h1>
    <p>
      My journey with programming started about three years ago with python.
      Nowadays, I'm mostly comfortable with Go, particularly on backend
      development. However, I'm open to learning new languages and technologies.
      Outside of coding I also enjoy reading, weightlifting, running, baking and
      chess.
    </p>
    <img src="../assets/ghost gif.gif" alt="" />

    <Blob />
  </div>
</template>

<script setup>
import Blob from './Blob.vue';
</script>

<style scoped>
.about {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 10vh 90vh;
}

h1 {
  grid-column-start: 1;
  grid-row-start: 1;
}
p {
  grid-column-start: 1;
  grid-row-start: 2;
}

img {
  grid-column-start: 2;
  grid-row-start: 1;
  width: 100%;
}

.blob {
  right: -10rem;
  bottom: -20rem;
}
</style>
