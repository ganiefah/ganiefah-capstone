<template>
  <center>
  <div class="loader">
    <span></span>
</div>
</center>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.loader {
  position: relative;
  overflow: hidden;
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  background: linear-gradient(rgba(31, 31, 31, 0.732), black, black);
  animation: loader_41 0.6s linear infinite;
  margin-bottom: 1rem;
}

.loader:before {
  position: absolute;
  content: '';
  z-index: 10;
  opacity: 1; 
  top: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
  bottom: 1.5rem;
  background-color: gold;
  border-radius: 50%;  
}

.loader span {
  position: absolute;
  height: 100%;
  width: 100%;
  filter: blur(0.5rem);
  border-radius: 50%;
  background: linear-gradient(black, black, black);
  animation: loader_41 0.6s linear infinite;
}

@keyframes loader_41 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>