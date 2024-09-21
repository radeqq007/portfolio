<template>
  <div class="skills" id="skills">
    <h2>Skills</h2>
    <div class="skill-grid">
      <skillCard
        img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        text="Javascript"
      />
      <skillCard
        img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        text="Typescript"
      />
      <skillCard
        img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        text="HTML"
      />
      <skillCard
        img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        text="CSS"
      />
      <skillCard
        img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        text="Tailwind"
      />
      <skillCard
        img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
        text="vue.js"
      />
      <skillCard
        img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
        text="Go"
      />
      <skillCard
        img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        text="Python"
      />
      <skillCard
        img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
        text="php"
      />
      <skillCard
        img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
        text="git"
      />
      <skillCard
        img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
        text="MySQL"
      />
      <skillCard
        img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
        text="VS Code"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import skillCard from './SkillCard.vue';
</script>

<style>
.skills {
  margin: auto;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.skill-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

@media screen and (max-width: 600px) {
  .skill-grid {
    grid-template-columns: 1fr;
  }
}
</style>
