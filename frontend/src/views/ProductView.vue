<template>
  <div class="everything">
    <div class="container">
        <div class="row">
          <form class="d-flex" role="search">
            <input class="form-control mx-auto search" type="search" placeholder="Search" aria-label="Search">
          </form>
          <select class="form-select me-auto" aria-label="Default select example">
            <option selected>Sort</option>
            <option value="1">Name</option>
            <option value="2">Price</option>
          </select>
          <select class="form-select ms-auto" aria-label="Default select example">
            <option selected>Filter</option>
            <option value="1">Name</option>
            <option value="2">Price</option>
          </select>
            <h2 class="class-display2 text-white">Products</h2>
        </div>
        <div class="row justify-content-center gap-3" v-if="products">
            <div class="col" v-for="product of products" :key="product">
                <div class="card" style="width: 18rem;">
                    <img :src="product.prodURL" class="card-img-top img-fluid" :alt="prodName">
                    <div class="card-body">
                      <h5 class="card-title">{{ product.prodName }} <br> R {{ product.Price }}</h5>
                      <p class="card-text"><span>Category: {{ product.Category }}</span></p>
                      <button class="view" @click="viewProduct(product.prodID)">
                        <span>View More</span><i class="bi bi-caret-right"></i>
                    </button>
                    </div>
                  </div>
            </div>
        </div>
        <div v-else class="row">
            <Spinner />
          </div>
        </div>
    </div>
</template>
<script>
 import Spinner from "../components/Spinner.vue";
export default {
  components: {
    Spinner,
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  }, 
  methods: {
    viewProduct(prodID) {
        const chosenProd = this.products.find((product)=>product.prodID === prodID)
        this.$store.commit("setSingleProduct", chosenProd)
      this.$router.push({ name: "ViewMore", params: { prodID: prodID } });
    },
  },

  mounted() {
    this.$store.dispatch("fetchProducts");
  },

};
</script>
<style scoped>
.card-img-top{
    width: auto;
    aspect-ratio: 5/4;
    object-fit: contain;
    display: block;
  margin: 0 auto;
}
.card{
    margin-bottom:1rem ;
    background-color: rgb(220, 218, 218);
}


button{
  border-radius: 5px;
  width: 7rem;
  color: black;
  background-color: rgb(203, 203, 203);
  box-shadow: 2px 2px grey;
}

button:hover{
  color: black;
  background-color: rgb(240, 239, 239);
}

.search{
  width: 50%;
  margin-top: 1rem;
}

select{
  width: 10%;
}

</style>