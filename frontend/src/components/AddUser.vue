<template>
    <div>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn add"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add User
      </button>
  
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">New Product</h1>
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
                placeholder="First Name"
                type="text"
                v-model="model.user.firstName"
                required
              />
              <input
                placeholder="Surname"
                type="text"
                v-model="model.user.surName"
                required
              />
              <input
                placeholder="Age"
                type="number"
                v-model="model.user.userAge"
                required
              />
              <input
                placeholder="Gender"
                type="text"
                v-model="model.user.Gender"
                required
              />
              <input
                placeholder="Password"
                type="text"
                v-model="model.user.userPass"
                required
              />
              <input
                placeholder="Email"
                type="text"
                v-model="model.user.emailAdd"
                required
              />
              <input
                placeholder="User Image"
                type="text"
                v-model="model.user.profileURL"
                required
              />
            </center>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn" @click="addUser">
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
          user: {
            firstName: "",
            surName: "",
            userAge: null,
            Gender: "",
            userPass: "",
            emailAdd: "",
            profileURL: "https://i.postimg.cc/3rZ0H0D8/profile-Image.png",
          },
        },
      };
    },
    methods: {
        addUser() {
            console.log("reached");
        this.$store.dispatch("addUser", this.model.user);
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