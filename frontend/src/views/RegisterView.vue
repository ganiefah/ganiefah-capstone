<template>
    <div>
        <form class="form" @submit.prevent = "register">
            <div class="container">
              <p class="title">Register to open an Account.</p>
              <span class="subtitle">Get started with our website, just create an account and enjoy the experience.</span>
            </div>
            <br>
            <div class="input">
                <label class="input_label" for="firstName_field"><i class="bi bi-person-circle"></i> First Name</label>
                
                <input v-model="payload.firstName" placeholder="First Name" title="First Name" name="name" type="name" class="input_field" id="firstName_field" required  oninvalid="this.setCustomValidity('Please Enter Your First Name')"
                oninput="this.setCustomValidity('')">
              </div>
              <div class="input">
                <label class="input_label" for="Surname_field"><i class="bi bi-person-circle"></i> Last Name</label>
                
                <input v-model="payload.surName" placeholder="Last Name" title="Surname" name="surname" type="surname" class="input_field" id="Surname_field" required  oninvalid="this.setCustomValidity('Please Enter Your Last Name')"
                oninput="this.setCustomValidity('')">
              </div>
              <div class="input">
                <label class="input_label" for="Age_field"><i class="bi bi-person-circle"></i>Age</label>
                
                <input v-model="payload.userAge" placeholder="Age" title="Age" name="age" type="age" class="input_field" id="Age_field" required  oninvalid="this.setCustomValidity('Please Enter Your Last Name')"
                oninput="this.setCustomValidity('')">
              </div>
              <div class="input">
                <label class="input_label" for="Gender_field"><i class="bi bi-gender-female"></i><i class="bi bi-gender-male"></i> Gender</label>
                
                <input v-model="payload.Gender" placeholder="Gender" title="Gender" name="gender" type="gender" class="input_field" id="Gender_field" required  oninvalid="this.setCustomValidity('Please Enter Your Gender')"
                oninput="this.setCustomValidity('')">
              </div>
              <div class="input">
                <label class="input_label" for="Image_field"><i class="bi bi-camera-video"></i> Image</label>
                
                <input v-model="payload.profileURL" placeholder="URL" name="image" type="image" class="input_field" id="Image_field">
              </div>
            <div class="input">
              <label class="input_label" for="Email_field"><i class="bi bi-envelope-at-fill"></i> Email</label>
              
              <input v-model="payload.emailAdd" placeholder="name@gmail.com" title="email" name="email" type="email" class="input_field" id="Email_field" required  oninvalid="this.setCustomValidity('Please Enter Your Email')"
              oninput="this.setCustomValidity('')">
            </div>
            <div class="input">
              <label class="input_label" for="Password_field"><i class="bi bi-lock-fill"></i> Password</label>
              <input v-model="payload.userPass" placeholder="Password" title="password" name="password" type="password" minlength="4" maxlength="10" class="input_field" id="Password_field" required  oninvalid="this.setCustomValidity('Please Enter Your Password')"
              oninput="this.setCustomValidity('')">
            </div>
            <button type="submit" class="sign-up_btn">
              <span>Sign Up</span>
            </button>
          </form>

    </div>
</template>

<script>
    export default {
  data() {
    return {
      payload: {
    firstName: "",
    surName: "",
    userAge: null ,
    Gender: "",
    emailAdd: "",
    userPass: "",
    profileURL: "https://i.postimg.cc/3rZ0H0D8/profile-Image.png"
          }
        }
  },
  methods: {
    register() {
      this.$store.dispatch('addUser', this.payload)
    }
  }
    }
        
</script>

<style scoped>
.form {
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
  
  .sign-up_btn {
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