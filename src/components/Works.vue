<template>
  <div class="section works" id="work">
    <h2>Works</h2>
    <div class="projects">
      <ProjectCard
        title="Sunbird programmng language"
        desc="Sunbird is a simple, interpreted language."
        imgSrc="images/sunbird.png"
        :stack="['Go']"
        repo="https://github.com/radeqq007/sunbird"
      />
      <ProjectCard
        title="oBerry"
        desc="oBerry is a lightweight and modern jQuery alternative designed to simplyfy the manipulation of HTML elements, handling user interactions and biding reactive data to HTML content."
        imgSrc="images/oberry.webp"
        :stack="['Typescript']"
        repo="https://github.com/radeqq007/oBerry"
      />
      <ProjectCard
        title="Image to ascii"
        desc="Allows you to select file and convert it to ascii art. This way I learned to work with Pillow python library."
        imgSrc="images/img-to-ascii.webp"
        :stack="['Python']"
        repo="https://github.com/radeqq007/image-to-ascii"
      />
      <ProjectCard
        title="This portfolio!"
        desc="This portfolio is more of a playground for me. I packed everything with animations while learning GSAP and vue.js."
        imgSrc="images/portfolio.webp"
        :stack="['Vue.js', 'Typescript', 'gsap']"
        repo="https://github.com/radeqq007/portfolio"
      />
      <ProjectCard
        title="Github stats"
        desc="Get your github stats: most used languages, followers, most starred repos etc."
        imgSrc="images/github-stats.webp"
        :stack="['Vue.js', 'Tailwindcss', 'chart.js']"
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
