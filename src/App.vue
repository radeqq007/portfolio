<template>
  <main class="bg-secondary w-screen h-screen">
    <Header />
    <router-view />
    <NavBar />
  </main>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import NavBar from './components/NavBar.vue';
</script>
