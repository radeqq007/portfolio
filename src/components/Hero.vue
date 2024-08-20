<template>
  <div class="hero section">
    <h1>
      Radosław
      <br />
      Kaczmarczyk
    </h1>
    <p>A passionate software developer from Poland.</p>

    <div class="bg-blob"></div>
    <div class="bg-blob"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.hero {
  position: relative;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(10, 1fr);
}

h1 {
  margin-top: 4rem;
  font-size: 8rem;
  grid-column-start: 2;
}

p {
  font-family: 'Karla';
  font-size: 3rem;
  font-style: italic;
  color: var(--secondary-color);
  grid-column-start: 2;
}

.bg-blob:nth-of-type(1) {
  right: -20rem;
  bottom: -8rem;
}

.bg-blob:nth-of-type(2) {
  right: 8rem;
  bottom: -20rem;
}
</style>
