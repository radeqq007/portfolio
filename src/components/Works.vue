<template>
  <div class="section works" id="work">
    <h2>Works</h2>
    <div class="projects">
      <ProjectCard
        title="Image to ascii"
        desc="Allows you to select file and convert it to ascii art. This way I learned to work with Pillow python library."
        imgSrc="images/img-to-ascii.webp"
        :stack="[
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
        ]"
        repo="https://github.com/radeqq007/image-to-ascii"
      />
      <ProjectCard
        title="This portfolio!"
        desc="This portfolio is more of a playground for me. I packed everything with animations while learning GSAP and vue.js."
        imgSrc="images/portfolio.webp"
        :stack="[
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
          'svgs/gsap.svg',
        ]"
        repo="https://github.com/radeqq007/portfolio"
      />
      <ProjectCard
        title="Github stats"
        desc="Get your github stats: most used languages, followers, most starred repos etc."
        imgSrc="images/github-stats.webp"
        :stack="[
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
          'svgs/chartjs.svg',
        ]"
        repo="https://github.com/radeqq007/github-stats"
      />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue';
</script>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}
</style>
