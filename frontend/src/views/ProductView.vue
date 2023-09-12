<template>
  <div class="everything">
    <div class="container">
        <div class="row">
          <div>
          <form class="d-flex" role="search">
            <input
            class="form-control mx-auto search"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="searchQuery"
          >        
          <select class="form-select me-auto" aria-label="Default select example" v-model="sortType">
            <option value="default">Sort/Default</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>            
          </form>
         
        </div>
            <h2 class="class-display2 text-white">Products</h2>
        </div>
        <div class="row justify-content-center gap-3" v-if="products">
          <div class="col" v-for="product of filteredProducts" :key="product.prodID">
                <div class="card" style="width: 18rem;">
                    <img :src="product.prodURL" class="card-img-top img-fluid" :alt="prodName">
                    <div class="card-body">
                      <h5 class="card-title">{{ product.prodName }} <br> R {{ product.Price }}</h5>
                      <p class="card-text"><span>Category: {{ product.Category }}</span></p>
                      <button class="view" @click="viewProduct(product.prodID)">
                        <span>View More</span><i class="bi bi-arrow-right-short"></i>
                    </button>
                    <button @click="addToCart(product)">Add to Cart</button>
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
  data() {
  return {
    searchQuery: '',
    sortType: 'default', 
  };
},
  components: {
    Spinner,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  filteredProducts() {
    return this.$store.state.products.filter((product) =>
      product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      product.Category.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  },
  filteredProducts() {
    let filtered = this.$store.state.products.filter((product) =>
      product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      product.Category.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    if (this.sortType === 'name') {
      filtered.sort((a, b) => a.prodName.localeCompare(b.prodName));
    } else if (this.sortType === 'price') {
      filtered.sort((a, b) => a.Price - b.Price);
    }

    return filtered;
  },
  }, 
  methods: {
    viewProduct(prodID) {
        const chosenProd = this.products.find((product)=>product.prodID === prodID)
        this.$store.commit("setSingleProduct", chosenProd)
      this.$router.push({ name: "ViewMore", params: { prodID: prodID } });
    },
    addToCart(product) {
      this.$store.dispatch('addToCartAction', product);
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
    background-color: rgb(251, 251, 251);
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
  width: 20%;
  height: 2.5rem;
  margin-top: 1rem;
}

.card{
height: max-content;
}

</style>