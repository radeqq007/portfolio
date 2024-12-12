<template>
  <div class="section contact" id="contact">
    <h2>Contact</h2>
    <div class="links">
      <a href="mailto:radoslaw.kaczmarczyk@proton.me">
        <img src="/svgs/email.svg" alt="email" />
      </a>

      <a href="https://www.instagram.com/radeqq__/" target="_blank">
        <img src="/svgs/instagram.svg" alt="instagram" />
      </a>

      <a href="https://github.com/radeqq007" target="_blank">
        <img src="/svgs/github.svg" alt="github" />
      </a>

      <a href="https://x.com/wcale_nie_radek" target="_blank">
        <img src="/svgs/x.svg" alt="x" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.links {
  margin-block: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
}

a {
  display: grid;
  place-items: center;
}

img {
  max-height: 4rem;
  filter: brightness(100);
}

@media screen and (max-width: 600px) {
  .links {
    justify-content: center;
  }
}
</style>
