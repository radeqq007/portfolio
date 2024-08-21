<template>
  <div class="social-links section" id="social-links">
    <h2>SOCIAL LINKS</h2>
    <div class="links">
      <Link
        img="/svgs/github.svg"
        name="GITHUB"
        href="https://www.github.com/radeqq007"
      />
      <Link
        img="/svgs/instagram.svg"
        name="INSTAGRAM"
        href="https://www.instagram.com/radeqq__/"
      />
      <Link
        img="/svgs/x.svg"
        name="X / TWITTER"
        href="https://x.com/wcale_nie_radek"
      />
      <Link
        img="/svgs/discord.svg"
        name="DISCORD"
        href="https://discordapp.com/users/695965239556177980"
      />
    </div>
  </div>
</template>

<script setup>
import Link from './Link.vue';
</script>

<style scoped>
.links {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}
</style>
