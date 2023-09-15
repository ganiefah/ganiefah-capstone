<template>
  <div>
    <h1 class="words">Your Cart <i class="bi bi-basket"></i></h1>
    <center>
      <div class="table-responsive">
        <table class="table table-bordered border-black text-center">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Product Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cart" :key="item.id">
              <td>{{ item.prodName }}</td>
              <td>
                <select name="quantity" id="">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>{{ item.Price }}</td>
              <td><img :src="item.prodURL" class="card-img-top img-fluid" :alt="prodName"></td>
              <td>
                <button @click="removeFromCart(index)">Remove</button>
              </td>
            </tr>
             <th scope="col" class="last">Amount Due:</th>
               <th scope="col" class="last">R {{ totalAmount }}</th>
               <button @click="redirectToCheckout" class="btn">Proceed To Checkout...</button>
          </tbody>

        </table>
       
      </div>
    </center>
  </div>
</template>


<script>
import router from '@/router'
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalAmount() {
      return this.cart.reduce((total, item) => {
        return total + item.Price;
      }, 0);
    },
  },
  methods: {
    removeFromCart(index) {
      this.$store.dispatch('removeFromCartAction', index);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    updateQuantity(index) {
      const item = this.cart[index];
      this.$store.dispatch('addToCartAction', { product: item, quantity: item.quantity });
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    redirectToCheckout() {
      this.$router.push({ name: 'checkout' });
    }
  },
};
</script>

<style scoped>
img{
  width: 20%;
}

.btn{
  float: right;
}
</style>