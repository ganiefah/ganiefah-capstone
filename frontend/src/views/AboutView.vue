<template>
  <div class="body">
    <div class="container">
      <div class="about">
        <br>
        <h1>About Sonic Vinyls: Where Music Finds Its Groove</h1>
        <h3>Welcome to Sonic Vinyls, your ultimate destination for embracing the timeless allure of music through the rich, warm embrace of vinyl records. We are more than just a vinyl store – we are curators of auditory nostalgia, keepers of sonic stories, and champions of the analog music experience.</h3>
      </div>
      <br>
      <div class="info">
        <h1>Our Story</h1>
        <h3>At Sonic Vinyls, our journey is a harmonious blend of passion for music and a deep appreciation for the tangible art of vinyl records. It all began with a group of avid music enthusiasts who shared a common dream: to bring back the magic of vinyl and make it accessible to the modern world. This dream evolved into the vibrant reality that is Sonic Vinyls today.</h3>
      </div>
      <br>
      <div class="img">
        <img src="https://i.postimg.cc/htGSsfFT/Screenshot-2023-08-29-141741.png" alt="" class="img-fluid img" loading="lazy" >
      </div>
      <br>
      <h1>Our Sponsors</h1>
      <div class="row d-flex justify-content-center row-cols-1 row-cols-sm-2">
        <div class="col d-flex justify-content-center">
      <div class="card">
        <div class="card-details">
          <img src="https://i.postimg.cc/VNPbkDnQ/logo.png" alt="" class="spon">
        </div>
      </div>
      </div>
      <div class="col d-flex justify-content-center">
      <div class="card">
        <div class="card-details">
          <img src="https://i.postimg.cc/3NYsr5J4/victoralo.webp" alt="" class="spon">
        </div>
      </div>
      </div>
      <div class="col d-flex justify-content-center">
      <div class="card">
        <div class="card-details">
          <img src="https://i.postimg.cc/7PKsJTKQ/cropped-Croxley-01.webp" alt="" class="spon">
        </div>
      </div>
      </div>
      <div class="col d-flex justify-content-center">
      <div class="card">
        <div class="card-details">
         <img src="https://i.postimg.cc/sXsBzxSp/a08f9962c91a100b88dafde029ad6caa-w400-h400-CR0-0-400-400-SX200-removebg-preview-1-removebg-previ.png" alt="" class="spon">
        </div>
      </div>
      </div>
      </div>
    </div>
    <br>
    <div class="sponsors">
     

    </div>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
img{
  height: 50vh;
  width: 100%;  
}

.col{
  padding: 1rem;
}

.body{
height: max-content;
}

.card {
  width: 21rem;
  height: 8rem;
  border-radius: 20px;
  background: #f5f5f5;
  position: relative;
  padding: 1.8rem;
  border: 2px solid #c3c6ce;
  -webkit-transition: 0.5s ease-out;
  transition: 0.5s ease-out;
  overflow: visible;
}

.card-details {
  height: 100%;
  gap: .5em;
  display: grid;
  place-content: center;
}



.spon{
  width: 100%;
  height: fit-content;
}

.card:hover {
  border-color: gold;
  box-shadow: 10px 5px 18px 0 rgba(255, 255, 255, 0.877);
}

.card:hover .card-button {
  transform: translate(-50%, 50%);
  transform: translate(-50%, 50%);
  transform: translate(-50%, 50%);
  opacity: 1;
}

@media (max-width: 850px) {

  .img{
    height: auto;
  }
  
}
</style>