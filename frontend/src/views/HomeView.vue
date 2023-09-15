<template>
  <div class="home">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="4000">
          <img src="https://i.postimg.cc/7Y5pWfR3/miriana-doroban-u-i-Rj-OMSp-Za-EE-unsplash1.jpg" loading="lazy" class="d-block image w-100" alt="background">
          <div class="container">
            <div class="carousel-caption">
              <h1 class="words">Want To Know More About Us ?</h1>
              <h5 class="description">For more information on what we do and who we are click the button below to explore our about us page.</h5>
              <a class="btn" href="/about">Find Out More</a>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="https://i.postimg.cc/RVSTWKM9/pexels-andrea-turner-707697.jpg" loading="lazy" class="d-block  image w-100" alt="background">
          <div class="container">
            <div class="carousel-caption">
              <h1 class="words">Looking For Your Favorite Vinyls?</h1>
              <h5 class="description">Want to browse our wide selection of different vinyls, record players and accessories, click below .</h5>
              <a class="btn" href="/products">Our Catalog</a>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img src="https://i.postimg.cc/nzpRF5rY/mike-von-X4d6-DUMapp-U-unsplash.jpg" loading="lazy" class="d-block image w-100" alt="background">
          <div class="container">
            <div class="carousel-caption">
              <h1 class="words">Looking For Some Help?</h1>
              <h5 class="description">Feel free to leave us with feedback on how to improve and feel free to leave any queries you may have.</h5>
              <a class="btn" href="/contact">Contact Us</a>
            </div>
          </div>
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
          <img src="https://i.postimg.cc/RVpXDczr/the-land-is-inhospitable-and-so-are-we-removebg-preview.png" alt="" loading="lazy"  class="img">
        </div>
        <div class="content">
          <p class="heading">Best Sellers</p>
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
          <img src="https://i.postimg.cc/TPhVWP7r/portals-removebg-preview.png" alt="" loading="lazy" class="record">
        </div>
        <div class="content">
          <p class="heading">Trending</p>
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
          <img src="https://i.postimg.cc/DwYSbPbz/jackman-removebg-preview.png" alt="" loading="lazy" class="img">
        </div>
        <div class="content">
          <p class="heading">Sale Items</p>
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
  height: 90vh;
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
  font-family: 'Modist', sans-serif; 
  color: gold;   
  text-shadow: 4px 4px black;  
  float: right;                                     
}

.description{
  color: white;
  float: right;
}

.btn{

  color: white;
  float: right;
  margin-top: 1rem;
  border: 1px solid gold;
  
}

@media (max-width: 850px) {
  
  .image{
    height: auto !important;
  }

  .carousel-item{
    height: auto;
  }

}

@media (max-width:699px) {

 .words {
  font-size: 0.8rem;
  text-shadow: none;
}

.description {
  font-size: 0.5rem;
  text-shadow: none;
}

.btn {
  padding: 0.1rem;
  width: 5rem;
  font-size: 0.5rem;
  border: none;
  color: gold;
}

}


</style>