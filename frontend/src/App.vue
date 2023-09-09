<template>
  <div>
  <NavBar/>
  <router-view/>
  <Footer/>
</div>
</template>

<script>
 import NavBar from '@/components/NavBar.vue'
 import Footer from '@/components/Footer.vue'
   export default {
   components: {
   NavBar,
   Footer
 },
 created(){
  const data = JSON.parse(localStorage.getItem("user"));
  if (data) {
    this.$store.commit("setUser",data)
  }
 }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: 'Playfair Display', serif;
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
  color: gold;
  border-bottom: 1px solid white;
}


</style>
