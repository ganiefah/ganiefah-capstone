<template>
  <div class="home">
   <div class="bg">
    <h1>SONIC VINYLS</h1>
    <h2>"Unleash the Soundtrack of Time: <br>
      Sonic Vinyls, Where Music Lives."</h2>
   </div>
   <h3 class="featured">Featured Products: </h3>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.home{
  height: 150vh;
}

.bg{
  background-image: url(https://i.postimg.cc/x1NW6fRw/miriana-doroban-u-i-Rj-OMSp-Za-EE-unsplash.jpg);
  width: 100%;
  height: 70vh;
  background-repeat: no-repeat;
  background-size: cover;
}

h1{
  color: white;
  float: left;
  margin-top: 5rem;
  margin-left: 3rem ;
}

h2{
  color: white;
  float: right;
  margin-top: 25rem;
  margin-right: 3rem;
}

.featured{
  color: black;
  text-align: center;
  padding: 1rem;
}

</style>