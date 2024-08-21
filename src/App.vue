<template>
  <Nav />
  <div class="line"></div>

  <Hero />
  <About />
  <Works
    title
    layout="left"
    img="src\assets\go-todo-list.png"
    name="GO TODO LIST"
    description="A simple todo list with user authentication created in golang. I created this project while learning go and how to connect your website to a database."
    link="https://github.com/radeqq007/golang-todo-list"
  />
  <Works
    layout="right"
    img="src\assets\img-to-ascii.png"
    name="IMAGE TO ASCII"
    description="Allows you to select file and convert it to ascii art. This way I learned to work with Pillow python library."
    link="https://github.com/radeqq007/image-to-ascii"
  />
  <Works
    layout="left"
    img="src\assets\portfolio.png"
    name="THIS PORTFOLIO!"
    description="I created this portfiolio with vue.js - a framework that I was learning for past few months."
    link="https://github.com/radeqq007/image-to-ascii"
  />
</template>

<script setup>
import About from './components/About.vue';
import Hero from './components/Hero.vue';
import Nav from './components/Nav.vue';
import Works from './components/Works.vue';
</script>

<style>
.section {
  position: relative;
  height: 100vh;
  scroll-snap-align: start;
  background-color: var(--bg-color);
  overflow: hidden;
  padding: 4rem;
  z-index: 2; /* idk why this works but without this blobs aren't visible */
}

.line {
  position: absolute;
  top: 80vh;
  bottom: 10vh;
  left: 3rem;
  z-index: 99; /* I don't know what's overflowing it but withouth this it's not visible*/
  width: 0.4rem;
  border-radius: 1rem;
  background-color: var(--primary-color);
}

h1,
h2,
h3 {
  margin: 0;
  color: var(--primary-color);
  font-family: 'Kaushan Script';
  font-weight: normal;
  line-height: 1;
  font-size: 3rem;
}

p {
  color: var(--secondary-color);
  font-family: 'Karla';
  font-size: 2rem;
}
</style>
