<template>
    <div class="container" v-if="products">
      <div class="row">
        <a href="/products" class="back" type="button"><i class="bi bi-box-arrow-in-left">Back</i></a>
        <br>
  
      </div>
      <div class="row">
        <div class="col">
          <h1>Preview Of {{ products.prodName }}</h1>
            <center>
            <div class="body"> 
                <p class="info">{{ products.prodDescription }}</p>
              <iframe style="border-radius:1rem" :src="products.prodDesc"  width="50%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </center>
        </div>

      </div>
      <div v-if="loading" class="row">
        <Spinner />
      </div>
    </div>
    <div class="else" v-else>
      <Spinner/>
    </div>
  </template>
  
  <script>
  import Spinner from '../components/Spinner.vue'
  export default {
    components:{
      Spinner
    },
    computed: {
      products() {
        return this.$store.state.chosenProduct;
      },
    },
    mounted() {
      this.$store.dispatch("fetchProducts");
    },
  };
  </script>
  
  <style scoped>
  


  a{
    text-decoration: none !important;
  }

  .back{
    width: max-content;
    float: left;
    border: 2px solid red;
    color: black;
    background-color: white;
    border-radius: 5px;
    margin-top: 1rem;
  }

  iframe{
    float: right;
    margin-bottom: 1rem;
  }

  .info{
    float: left;
    color: black;
  }
 
  </style>