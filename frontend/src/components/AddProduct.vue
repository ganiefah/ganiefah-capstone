<template>
    <div>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn add"
        data-bs-toggle="modal"
        data-bs-target="#exampleModall"
      >
        Add Product
      </button>
  
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModall"
        tabindex="-1"
        aria-labelledby="exampleModalLabell"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabell">New Product</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <center>
              <input
                placeholder="Product Name"
                type="text"
                v-model="model.product.prodName"
                required
              />
              <input
                placeholder="Quantity"
                type="number"
                v-model="model.product.Quantity"
                required
              />
              <input
                placeholder="Price"
                type="number"
                v-model="model.product.Price"
                required
              />
              <input
                placeholder="Category"
                type="text"
                v-model="model.product.Category"
                required
              />
              <input
                placeholder="Product Image"
                type="text"
                v-model="model.product.prodURL"
                required
              />
            </center>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn" @click="addProduct">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
    
    <script>
  export default {
    data() {
      return {
        model: {
          product: {
            prodName: "",
            Quantity: "",
            Price: "",
            Category: "",
            prodURL: "",
          },
        },
      };
    },
    methods: {
      addProduct() {
        this.$store.dispatch("addProduct", this.model.product);
        setTimeout(() => {
          location.reload();
        }, 500);
      },
    },
  };
  </script>
    
  
  <style scoped>
  .btn{
    border: 1px solid black;
    margin-bottom: 7px;
  }
  
  .btn:hover{
  color: rgb(126, 126, 126);
  }
  input{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 7px;
  }

  </style>