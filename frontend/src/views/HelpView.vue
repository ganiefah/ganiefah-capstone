<template>
    <div>
        <div class="info">
       <h1> Welcome to the Sonic Vinyls Help Center</h1>
       <h4> At Sonic Vinyls, we're passionate about all things vinyl records, and we're committed to making your vinyl shopping experience as smooth as the grooves on your favorite vinyl. Our Help Center is here to assist you with any questions or concerns you may have while exploring our store and enjoying your vinyl journey.</h4>
    </div>
    <center>
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
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </center>
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
}

.accordion{
    width: 75%;
    
}

.info{
  margin-bottom: 2rem;
}
</style>