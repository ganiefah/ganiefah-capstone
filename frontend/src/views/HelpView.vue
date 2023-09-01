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
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
</style>