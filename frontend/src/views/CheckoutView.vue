<template>
    <div>
        <h1>Checkout Now</h1>
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
              </tbody>
            </table>
          </div>
        </center>
      </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>