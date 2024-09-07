<template>
  <nav>
    <a href="#about">About Me</a>
    <a href="#skills">Skills</a>
    <a href="#work">Work</a>
    <a href="#contact">Contact</a>
  </nav>
</template>

<script setup></script>

<style scoped>
nav {
  position: fixed;
  width: 100%;
  top: 6px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

a {
  text-decoration: none;
  font-size: 2rem;
  color: var(--text);
  font-weight: 100;
  text-shadow: 0 0 10px var(--bg);

  transition: color 0.1s ease-in-out;
  overflow: hidden;
}

a:hover {
  color: var(--primary);
}
</style>
