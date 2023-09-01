<template>
    <div>
        <h1>Users Table</h1>
        <AddUser />
        <center>
          <div class="table-responsive">
        <table class="table table-bordered border-black text-center" >
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
          <tbody v-for="user in users" :key="user">
            <tr v-if="user">
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.userAge }}</td>
              <td>{{ user.Gender }}</td>
              <td>{{ user.userRole }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>
                <img
                  :src="user.userProfile"
                  :alt="user.firstName"
                  loading="lazy"
                  class="img-fluid image"
                />
              </td>
              <td>
              <UpdateUser :user="user"/>  
                <button class="del" @click="deleteUser(user.UserID)">delete</button>
              </td>
            </tr>
            <tr v-else>
              <Spinner />
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
          <tbody v-for="product in filteredProducts" :key="product.prodID">
            <tr v-if="product">
              <td>{{ product.prodID }}</td>
              <td>{{ product.prodName }}</td>
              <td>{{ product.quantity }}</td>
              <td>R {{ product.amount }}</td>
              <td>{{ product.Category }}</td>
              <td>
                <img
                  :src="product.prodUrl"
                  :alt="product.prodName"
                  class="img-fluid image"
                  loading="lazy"
                />
              </td>
              <td>
                <UpdateProducts :product="product"/>
                <button class="del" @click="remveProduct(product.prodID)">
                  delete
                </button>
              </td>
            </tr>
            <tr v-else>
              <Spinner />
            </tr>
          </tbody>
        </table>
      </div>
      </center>
    
        <h1>Orders Table</h1>
        <AddOrders/>
        <center>
          <div class="table-responsive">
          <table class="table table-bordered border-black text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>User's ID</th>
              <th>Product ID</th>
              <th>barcode</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>OrderDate</th>
              <th>Picture</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody v-for="order in orders" :key="order.orderID">
            <tr v-if="Orders">
              <td>{{ order.orderID }}</td>
              <td>{{ user.userID }}</td>
              <td>{{ product.prodID }}</td>
              <td>{{ order.barcode }}</td>
              <td>{{ order.productName }}</td>
              <td>{{ order.price }}</td>
              <td>{{ order.OrderDate }}</td>
              <td>{{ order.picture }}</td>
              <td>
                <img
                  :src="product.prodUrl"
                  :alt="product.prodName"
                  class="img-fluid image"
                  loading="lazy"
                />
              </td>
              <td>
                <UpdateProducts :product="product"/>
                <button class="del" @click="remveProduct(product.prodID)">
                  delete
                </button>
              </td>
            </tr>
            <tr v-else>
              <Spinner />
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