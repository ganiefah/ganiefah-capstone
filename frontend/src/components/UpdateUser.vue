<template>
    <div>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        @click="openEditModal(user.userID)"
        data-bs-toggle="modal"
        :data-bs-target="'#exampleModal' + user.userID"
      >
        Update User
      </button>
      <!-- Modal -->
      <div
        class="modal fade"
        :id="'exampleModal' + user.userID"
        tabindex="-1"
        :aria-labelledby="'exampleModalLabel' + user.userID"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Update User
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
                placeholder="First Name"
                type="text"
                v-model="editingUser.firstName"
                required
              />
              <input
                placeholder="Surname"
                type="text"
                v-model="editingUser.surName"
                required
              />
              <input
                placeholder="Age"
                type="number"
                v-model="editingUser.userAge"
                required
              />
              <input
                placeholder="Gender"
                type="text"
                v-model="editingUser.Gender"
                required
              />
              <input
                placeholder="Email"
                type="text"
                v-model="editingUser.emailAdd"
                required
              />
              <input
                placeholder="Role"
                type="text"
                v-model="editingUser.userRole"
                required
              />
              <input
                placeholder="Profile Image"
                type="text"
                v-model="editingUser.profileURL"
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
                @click="updateUser(user.userID)"
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
    props: ["user"],
    data() {
      return {
        editingUser:{
          user: {
            firstName: "",
            surName: "",
            userAge: "",
            Gender: "",
            emailAdd: "",
            userRole: "",
            profileURL: "",
          },
        },
      };
    },
    computed: {
      thisUser() {
        return this.$store.state.user;
      },
    },
    methods: {
      openEditModal(userID) {
        this.editingUserID = userID;
        this.editingUser = {
          ...this.$store.state.user.find(
            (user) => user.userID === userID
          ),
        };
      },
      updateUser(userID) {
        this.$store
          .dispatch("updateUser", {
            userID: userID,
            ...this.editingUser,
          })
          .then(() => {
            console.log("user successfully updated");
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