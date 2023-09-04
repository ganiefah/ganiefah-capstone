<template>
    <div>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        @click="openEditModal(product.prodID)"
        data-bs-toggle="modal"
        :data-bs-target="'#exampleModal' + product.prodID"
      >
        Update Products
      </button>
      <!-- Modal -->
      <div
        class="modal fade"
        :id="'exampleModal' + product.prodID"
        tabindex="-1"
        :aria-labelledby="'exampleModalLabel' + product.prodID"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Update Products
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                placeholder="Product Name"
                type="text"
                v-model="editingProduct.prodName"
                required
              />
              <input
                placeholder="Quantity"
                type="number"
                v-model="editingProduct.Quantity"
                required
              />
              <input
                placeholder="Price"
                type="number"
                v-model="editingProduct.Price"
                required
              />
              <input
                placeholder="Category"
                type="text"
                v-model="editingProduct.Category"
                required
              />
              <input
                placeholder="Product Image"
                type="text"
                v-model="editingProduct.prodURL"
                required
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="updateProduct(product.prodID)"
              >
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
    props: ["product"],
    data() {
      return {
          editingProduct:{
          product: {
            prodName: "",
            Quantity: null,
            Price: null,
            Category: "",
            prodURL: "",
          },
        },
      };
    },
    computed: {
      thisProduct() {
        return this.$store.state.product;
      },
    },
    methods: {
      openEditModal(prodID) {
        this.editingProductID = prodID;
        this.editingProduct = {
          ...this.$store.state.products.find(
            (product) => product.prodID === prodID
          ),
        };
      },
      updateProduct(prodID) {
        this.$store
          .dispatch("updateProduct", {
            prodID: prodID,
            ...this.editingProduct,
          })
          .then(() => {
            console.log("product successfully updated");
            setTimeout(() => {
              location.reload();
            }, 500);
          })
          .catch((err) => {
            console.error("Error while updating: ", err);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .btn{
    border: 1px solid black;
    margin-bottom: 7px;
    background-color: transparent;
    color: black;
  }
  
  .btn:hover{
  color: green;
  }
  input{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 7px;
  }
  </style>