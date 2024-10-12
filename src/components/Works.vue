<template>
  <div class="section works" id="work">
    <h2>Works</h2>
    <div class="projects">
      <ProjectCard
        title="Image to ascii"
        desc="Allows you to select file and convert it to ascii art. This way I learned to work with Pillow python library."
        imgSrc="images/img-to-ascii.png"
        :stack="[
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
        ]"
        repo="https://github.com/radeqq007/image-to-ascii"
      />
      <ProjectCard
        title="This portfolio!"
        desc="This portfolio is more of a playground for me. I packed everything with animations while learning GSAP and vue.js."
        imgSrc="images/portfolio.png"
        :stack="[
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
          'svgs/gsap.svg',
        ]"
        repo="https://github.com/radeqq007/portfolio"
      />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue';
</script>

<style scoped>
.section {
  padding: 5%;
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: auto;
}

.projects {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
