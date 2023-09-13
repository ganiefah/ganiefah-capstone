<template>
  <div class="home">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <img src="https://i.postimg.cc/7Y5pWfR3/miriana-doroban-u-i-Rj-OMSp-Za-EE-unsplash1.jpg" class="d-block image w-100" alt="background">
          <div class="container">
            <div class="carousel-caption">
              <h1 class="words">Want To Know More About Us ?</h1>
              <p class="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
              <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="https://i.postimg.cc/RVSTWKM9/pexels-andrea-turner-707697.jpg" class="d-block  image w-100" alt="background">
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="https://i.postimg.cc/nzpRF5rY/mike-von-X4d6-DUMapp-U-unsplash.jpg" class="d-block image w-100" alt="background">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>


   <div class="info">
   <h3 class="featured">Shop Now:</h3>
   <div class="row">
    <div class="col d-flex justify-content-center">
      <div class="card-container">
        <div class="card">
          <a href="/products">
        <div class="img-content">
          <img src="https://i.postimg.cc/jSWvm3f4/portals-removebg-preview.png" alt="">
        </div>
        <div class="content">
          <p class="heading">Vinyls</p>
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
          <img src="https://i.postimg.cc/dtsPgCJV/born-singer-j-cole-removebg-preview.png" alt="">
        </div>
        <div class="content">
          <p class="heading">Record Players</p>
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
          <img src="https://i.postimg.cc/NMkCxN97/England-s-Newest-Hit-Makers-Teal-rolling-stones-removebg-preview.png" alt="">
        </div>
        <div class="content">
          <p class="heading">Sale Items</p>
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

</div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.home{
  height: max-content;
}
.image{
  aspect-ratio: 16/9;
  
}

.carousel-item{
  width: 100%;
  height: 86vh;
  background-repeat: no-repeat;
  background-size: cover;
}

.info{
  
  height: max-content;
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
  margin-top: 5rem;
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

.row {
    --bs-gutter-x: 0rem;
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
  text-shadow: 1px 1px gold;
}

.desc{
  color: white;
}


.words{
  float: none;
}

</style>