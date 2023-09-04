<template>
  <div>
    <h1>Users Table</h1>
    <center>
      <div class="table-responsive">
        <table class="table table-bordered border-black text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Email Address</th>
              <th>Profile Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-for="user in users" :key="user.id">
            <tr v-if="user">
              <td>{{ user.firstName }}</td>
              <td>{{ user.surName }}</td>
              <td>{{ user.userAge }}</td>
              <td>{{ user.Gender }}</td>
              <td>{{ user.userRole }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>
                <img :src="user.profileURL" :alt="user.firstName" loading="lazy" class="img-fluid image" />
              </td>
              
              <button class="del" @click="deleteUser(user.userID)">
                delete
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    </center>
    <br>

    <h1>Products Table</h1>
    <AddProducts />
    <center>
      <div class="table-responsive">
        <table class="table table-bordered border-black text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>name</th>
              <th>quantity</th>
              <th>price</th>
              <th>category</th>
              <th>product image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-for="product in products" :key="product.prodID">
            <tr v-if="product">
              <td>{{ product.prodID }}</td>
              <td>{{ product.prodName }}</td>
              <td>{{ product.Quantity }}</td>
              <td>R {{ product.Price }}</td>
              <td>{{ product.Category }}</td>
              <td>
                <img :src="product.prodURL" :alt="product.prodName" class="img-fluid image" loading="lazy" />
              </td>
              <UpdateProduct :product="product" />
              <button class="del" @click="removeProduct(product.prodID)">
                delete
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    </center>
  </div>
</template>

<script>

import UpdateProduct from "../components/UpdateProduct.vue";
import AddProducts from "../components/AddProduct.vue";
import Spinner from "../components/Spinner.vue";
export default {
  components: {
    Spinner,
    AddProducts,
    UpdateProduct
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    products() {
      return this.$store.state.products;
    },
    product() {
      return this.$store.state.product;
    },
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
    this.$store.dispatch("fetchUsers");
  },
  methods: {
    removeProduct(prodID) {
      if (confirm("Are you sure you want to delete this product?"))
        this.$store.dispatch("removeProduct", prodID);
      setTimeout(() => {
        location.reload();
      }, 500);
    },
    deleteUser(userID) {
    if (confirm("Are you sure you want to delete this user?"))
      this.$store.dispatch("deleteUser", userID);
    setTimeout(() => {
      location.reload();
    }, 500);
  },
  },

}
</script>

<style scoped>
img {
  width: 15%;

}

.del {
  border: 1px solid black;
  margin-bottom: 7px;
  background-color: transparent;
  color: black;
  border-radius: 5px;
}

.del:hover {
  color: red;
}
</style>