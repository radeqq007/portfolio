<template>
  <footer>
    <span>Designed and Developed by <span class="name">Radosław Kaczmarczyk</span></span>
    <span>&#169; 2025</span>
  </footer>
</template>

<style scoped>
footer {
  box-sizing: border-box;
  height: 4rem;
  width: 100%;
  padding-inline: 20vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: color-mix(in srgb, var(--bg) 20%, transparent);
  backdrop-filter: blur(4px);
}

.name {
  color: var(--primary);
}


span {
  font-size: 1.1rem;
}

@media screen and (max-width: 600px) {
  footer {
    padding: 1vw;
    flex-direction: column;
    justify-content: center;
    gap: 1.1rem;
  }
  
  span {
    text-align: center;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>
