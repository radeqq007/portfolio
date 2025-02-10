<template>
  <main class="bg-secondary w-screen h-screen">
    <Header />
    <transition
      name="fade"
      enter-active-class="transition duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <router-view />
    </transition>
    <NavBar />
  </main>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import NavBar from './components/NavBar.vue';
</script>
