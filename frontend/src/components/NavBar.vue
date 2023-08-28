<template>
    <div>
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <router-link to="/"><img src="https://i.postimg.cc/7Ypccvbj/Screenshot-2023-08-27-155311-removebg-preview.png" alt="logo" loading="lazy" class="logo"></router-link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                   <router-link to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/about">About</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/products">Products</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/help">Help</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/admin">Admin</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/contact">Contact</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/login">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/register">Register</router-link>
                    </li>                
                    <router-link to="/profile"><img src="https://i.postimg.cc/q7RpBVXQ/icons8-user-24.png" alt="user" loading="lazy" class="user"></router-link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>                 
              <router-link to="/cart"><img src="https://i.postimg.cc/SQVV8BWc/icons8-cart-24.png" alt="cart" loading="lazy" class="cart"></router-link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button> 
                </ul>
              </div>
            </div>
          </nav>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.logo{
  width: 11rem;
}

</style>