<template>
    <div>
        <form @submit.prevent="login">
            <div class="container">
              <p class="title">Login to your Account.</p>
              <span class="subtitle">Get started with our website, just create an account and enjoy the experience.</span>
            </div>
            <br>
            <div class="input">
              <label><i class="bi bi-envelope-at-fill"></i>Email</label>
              <input v-model="payload.emailAdd" placeholder="name@gmail.com" title="email" name="name" type="email" class="info" >
            </div>
            <div class="input">
              <label><i class="bi bi-lock-fill"></i>Password</label>
              <input v-model="payload.userPass" placeholder="Password" title="password" name="name" type="password" class="info" >
            </div>
            <button type="submit" class="btn">
              <span>Sign In</span>
            </button>
          </form>

    </div>
</template>

<script>
import {useCookies} from 'vue3-cookies'
const {cookies} = useCookies()
export default {
  data() {
    return {
      payload: {
        emailAdd: "",
        userPass: "",
      },
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.payload);
    },
    
  },
  beforeCreate() {
    this.$store.dispatch("fetchUsers");
  },
  mounted() {
    console.log(cookies.get("LegitUser"));
  },
};
</script>

<style scoped>

form {
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 50px 40px 20px 40px;
    background-color: white;
  }
  
  
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
  }
  
  .title {
    font-weight: bold;
    color: black;
  }
  
  .subtitle {
    max-width: 80%;
    text-align: center;
    color: rgb(70, 70, 70)
  }
  
  .input{
    width: 80%;
    height: fit-content;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  

  label {
    font-weight: bold;
    color: black;
  }
  
  .info{
    width: auto;
    height: 40px;
    padding: 0 0 0 40px;
    border-radius: 7px;
    outline: none;
    border: 1px solid #e5e5e5;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
  }
  
  .info:focus {
    border: 1px solid black;
    box-shadow: 0px 0px 0px 2px gold;
    background-color: transparent;
  }
  
  .btn {
    width: 11rem;
    height: 3rem;
    border: 0;
    background: gold;
    border-radius: 7px;
    color: black;
    cursor: pointer;
  }

  ::placeholder{
    color: black;
  }
  
</style>