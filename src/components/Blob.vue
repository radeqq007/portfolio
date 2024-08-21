<template>
  <div class="blob"></div>
</template>

<style scoped>
.blob {
  background-color: var(--primary-color);
  height: 35rem;
  aspect-ratio: 1;
  border-radius: 50%;
  filter: blur(250px);
  position: absolute;
  z-index: -1;
  animation: blobAnimation 20s infinite;
}

@keyframes blobAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
