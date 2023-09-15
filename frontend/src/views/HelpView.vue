<template>
    <div>
        <div class="info">
        </div>
        <center>
          <br>
          <h1> Welcome to the Sonic Vinyls Help Center</h1>
        <h4> At Sonic Vinyls, we're passionate about all things vinyl records, and we're committed to making your vinyl shopping experience as smooth as the grooves on your favorite vinyl. Our Help Center is here to assist you with any questions or concerns you may have while exploring our store and enjoying your vinyl journey.</h4>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What is Sonic Vinyls?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Sonic Vinyls is more than just a store, it's a gathering place for music lovers to share their passion, discover new sounds, and immerse themselves in the rich culture of vinyl. Whether you're a vinyl veteran or just beginning your vinyl journey, Sonic Vinyls welcomes you to explore the world of analog sound and celebrate the timeless magic of vinyl records. Come visit us today and let the music spin!
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Where is Sonic Vinyls located?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Sonic Vinyls can be located at: 47 Toner Street, Cape Town, 7500
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              What is the condition of your vinyl records?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Our vinyls are in the very best shape as we import it from the artist merchandise store and put it on the shelves.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              How do I contact Sonic Vinyls for further assistance?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              You can leave a query on our contact page or you can look in our footer for our contact information
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              What are your store hours?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              We are open everyday from 8am to 4pm.
            </div>
          </div>
        </div>
      </div>
    </center>
    <br>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
h4{
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    color: black;
}

.accordion{
    width: 75%;
    
}

.accordion-button{
  background-color: beige;
  color: black;
}

.info{
  margin-bottom: 2rem;
  background-image: url(https://i.postimg.cc/P59rSBgT/pexels-andrea-turner-707697.jpg);
  background-attachment: fixed;
  height: 75vh;
  background-size: cover;
  background-repeat: no-repeat;
}

h1{
  color: gold;
}

</style>