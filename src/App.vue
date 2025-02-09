<template>
  <main class="bg-secondary w-screen h-screen">
    <router-view />
    <NavBar />
  </main>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>
