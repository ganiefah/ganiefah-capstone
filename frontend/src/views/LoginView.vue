<template>
    <div>
        <form @submit.prevent="login">
            <div class="container">
              <p class="title">Login to your Account.</p>
              <span class="subtitle">Get started with our website, just create an account and enjoy the experience.</span>
            </div>
            <br>
            <div class="input">
              <label class="input_label" for="email_field"><i class="bi bi-envelope-at-fill"></i>Email</label>
              
              <input placeholder="name@gmail.com" title="email" name="name" type="email" class="input_field" id="email_field">
            </div>
            <div class="input">
              <label class="input_label" for="password_field"><i class="bi bi-lock-fill"></i>Password</label>
              <input placeholder="Password" title="password" name="name" type="password" class="input_field" id="password_field">
            </div>
            <button title="Sign In" type="submit" class="sign-in_btn">
              <span>Sign In</span>
            </button>
            <p class="note">Terms of use & Conditions</p>
          </form>

    </div>
</template>

<script>
      import Swal from 'sweetalert2'
    export default {
        
        data(){
            return{
                emailAdd: '',
                userPass: ''
            }
        },
        methods:{
            async login(){
                console.log("reached")
                try{
                    const payload = {
                        emailAdd: this.emailAdd,
                        userPass: this.userPass
                    }
                    const res = await this.$store.dispatch("login", payload)
                    if (res){
                        await Swal.fire({
                            icon: 'success',
                            title: "Login successful",
                            text: "You have logged in successfully"
                        })
                        this.$router.push("/")
                    } else{
                        await Swal.fire({
                            icon: "error",
                            title: "Login failed",
                            text:"Login failed, please check and try again"
                        })
                    }
                } catch(e){
                    console.log(e)
                }
            }
        }

    }
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
  

  .input_label {
    font-weight: bold;
    color: black;
  }
  
  .input_field {
    width: auto;
    height: 40px;
    padding: 0 0 0 40px;
    border-radius: 7px;
    outline: none;
    border: 1px solid #e5e5e5;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
  }
  
  .input_field:focus {
    border: 1px solid black;
    box-shadow: 0px 0px 0px 2px gold;
    background-color: transparent;
  }
  
  .sign-in_btn {
    width: 11rem;
    height: 3rem;
    border: 0;
    background: gold;
    border-radius: 7px;
    color: black;
    cursor: pointer;
  }
  
  
  .note {
    font-weight: bold;
    font-size: 1rem;
    color: #5c5c5c;
    text-decoration: underline;
  }

  ::placeholder{
    color: black;
  }
  
</style>