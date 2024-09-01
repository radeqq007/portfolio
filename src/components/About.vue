<template>
  <div class="about section" id="about">
    <h2>ABOUT ME</h2>
    <p>
      My journey with programming started about three years ago with python.
      Nowadays, I'm mostly comfortable with Go, particularly on backend
      development. However, I'm open to learning new languages and technologies.
      Outside of coding, I also enjoy reading, weightlifting, running, baking and
      chess.
    </p>
    <img src="/images/ghost-gif.gif" alt="" />

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
  transform: scaleX(-1); /* it just looks better when flipped*/
  rotate: -5deg;
}

.blob {
  right: -10rem;
  bottom: -20rem;
}

@media only screen and (max-width: 650px) {
  img {
    display: none;
  }

  .about {
    display: flex;
    flex-direction: column;
  }

  .blob {
    bottom: 2rem;
    right: -35rem;
  }
}
</style>
