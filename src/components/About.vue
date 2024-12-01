<template>
  <div class="about section" id="about">
    <div class="title">
      <h2>About me</h2>
    </div>
    <div class="content">
      <p>Born in Poland, 17 years old software developer and student.</p>
      <p>
        My journey with programming started about three years ago with python,
        but javascript was my first ever language I mastered. Nowadays, I'm
        mostly comfortable working on frontend development, particularly with
        Vue.js. However, I'm open to learning new languages and technologies.
      </p>
      <p>
        Outside of coding, I also enjoy reading, weightlifting, running and
        chess. Recently, I've also picked up playing the guitar.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.title {
  display: flex;
  gap: 2rem;
  justify-content: left;
  align-items: center;
}

.content,
.title {
  width: 75%;
}
p {
  font-size: 2rem;
  line-height: 1.2;
}

@media screen and (max-width: 600px) {
  .title {
    flex-direction: column;
  }

  h2 {
    width: 100%;
  }

  p {
    font-size: 1.6rem;
  }
}
</style>
