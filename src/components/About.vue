<template>
  <div class="about" id="about">
    <div class="title">
      <img src="/images/me.webp" alt="" />
      <h2>About me</h2>
    </div>
    <div class="content">
      <p>Born in Poland, 17 years old software developer and student.</p>
      <p>
        My journey with programming started about three years ago with python,
        but javascript was my first ever language I mastered. Nowadays, I'm
        mostly comfortable with Go, particularly on backend development.
        However, I'm open to learning new languages and technologies.
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
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  display: flex;
  gap: 2rem;
  justify-content: left;
  align-items: center;
}

img {
  height: 6.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
}

.content,
.title {
  width: 75%;
}
p {
  font-size: 2rem;
  font-weight: 100;
  line-height: 1.2;
  letter-spacing: 2px;
}
</style>
