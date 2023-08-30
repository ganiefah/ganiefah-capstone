<template>
  <div class="home">
   <div class="bg">
    <h1>SONIC VINYLS</h1>
    <h2>"Unleash the Soundtrack of Time: <br>
      Sonic Vinyls, Where Music Lives."</h2>
   </div>
   <h3 class="featured">Featured Products: </h3>
   <div class="row">
    <div class="col d-flex justify-content-center">
      <div class="card-container">
        <div class="card">
          <a href="/products">
        <div class="img-content">
          <img src="https://i.postimg.cc/RVDWbG99/mac-miller-npr-music-tiny-desk-concert.jpg" alt="">
        </div>
        <div class="content">
          <p class="heading">Best Sellers</p>
          <p class="desc">
            Welcome to our Best Sellers category, a haven for vinyl enthusiasts and collectors alike. Immerse yourself in a world where classic melodies and contemporary beats come to life in the form of timeless vinyl records.
          </p>
        </div>
      </a>
      </div>
      </div>
    </div>
    <div class="col d-flex justify-content-center">
      <div class="card-container">
        <div class="card">
          <a href="/products">
        <div class="img-content">
          <img src="https://i.postimg.cc/9FyXHq4R/barbie-the-album-exculsive.jpg" alt="">
        </div>
        <div class="content">
          <p class="heading">In Stock</p>
          <p class="desc">
            Welcome to our In Stock category, a treasure trove for vinyl enthusiasts seeking instant gratification. Here, you'll find a wide and diverse selection of vinyl records that are ready to find a new home in your collection without delay.
          </p>
        </div>
      </a>
      </div>
      </div>
    </div>
    <div class="col d-flex justify-content-center">
      <div class="card-container">
        <div class="card">
          <a href="/products">
        <div class="img-content">
          <img src="https://i.postimg.cc/3xfF12fD/Guardians-Of-The-Galaxy-Vol-3.jpg" alt="">
        </div>
        <div class="content">
          <p class="heading">Sale Item</p>
          <p class="desc">
            Welcome to our Sale Items category, where the enchanting world of vinyl meets unbeatable deals and irresistible offers. Dive into a collection that combines the allure of timeless music with the excitement of remarkable savings.
          </p>
        </div>
      </a>
      </div>
      </div>
    </div>
   </div>
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
  margin-top: 20rem;
  margin-right: 3rem;
}

.featured{
  color: black;
  text-align: center;
  padding: 1rem;
}

.card-container {
  width: 300px;
  height: 300px;
  position: relative;
  border-radius: 10px;
}

.card-container::before {
  transform: translate3d(0, 0, 0) scale(0.95);
  filter: blur(20px) ;
}

.card {
  width: 100%;
  height: 100%;
  border-radius: 11px;
  overflow: hidden;
  border: none;
}

.card .img-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: scale 0.6s, rotate 0.6s, filter 1s;
}

.card .img-content svg {
  width: 50px;
  height: 50px;
  fill: #e8e8e8;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.card .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  color: #e8e8e8;
  padding: 20px;
  line-height: 1.5;
  border-radius: 5px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.card .content .heading {
  font-size: 32px;
  font-weight: 700;
}

.card:hover .content {
  opacity: 1;
  transform: translateY(0);
}

.card:hover .img-content {
  scale: 2.5;
  rotate: 30deg;
  filter: blur(7px);
}

.card:hover .img-content svg {
  fill: transparent;
}

img{
  width: 100%;
}

.heading{
  color: white;
  text-shadow: 2px 2px black;
}

.desc{
  color: black;
}



</style>