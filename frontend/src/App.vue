<template>
  <div>
  <NavBar/>
  <router-view/>
</div>
</template>

<script>
 import NavBar from '@/components/NavBar.vue'
   export default {
   components: {
   NavBar
 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: black !important;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin-right: 1rem;
}



nav a.router-link-exact-active {
  color: rgb(212, 212, 211);
  border-bottom: 1px solid white;
}


</style>
