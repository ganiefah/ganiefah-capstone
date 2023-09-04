<template>
    <div class="container" v-if="products">
      <div class="row">
        <a href="/products" class="back" type="button"><i class="bi bi-box-arrow-in-left">Back</i></a>
        <h2 class="class-display2">{{products.prodName}}</h2>
        <br>
  
      </div>
      <div class="row">
        <div class="col">
            <div class="img">
              <img
                :src="products.prodURL"
                class="img-fluid"
                :alt="products.prodName"
              />
            </div>
            <center>
            <div class="body">
              <h2 class=" mt-5">
                {{ products.prodName }} <br>
                R {{ products.amount }}
              </h2>
              <h2 class="">{{ products.Category }}</h2> <br>
              <p>{{ products.prodDesc }}</p>
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
  .img {
    float: left;
  }
  
  .title{
      display: flex;
      justify-content: right;
      align-items: right;   
      text-align: left;
  }

  .back{
    width: 10%;
    float: left;
    color: white;
    background-color: red;
    border-radius: 5px;
    margin-top: 1rem;
  }

 
  </style>