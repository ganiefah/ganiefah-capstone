<template>
    <div class="container">
        <div class="col">
            <h1>Welcome Back To Your Profile {{ user.firstName }} {{ user.surName }}</h1>
            <img :src="user.profileURL" class="card-img-top img-fluid" :alt="user.firstName">
            <div class="body">
                <br>
               <span>User First Name:</span> {{ user.firstName }}
                <br>
                <br>
                <span>User Last Name:</span> {{ user.surName }}
                <br>
                <br>
                <span>User Age:</span> {{ user.userAge }}
                <br>
                <br>
                <span>User Gender:</span> {{ user.Gender }}
                <br>
                <br>
                <span>User Gender :</span> {{ user.userRole }}
                <br>
                <br>
                <span>User Email</span> {{ user.emailAdd }}
                <br>
                <br>
            </div>
        </div>
        
          <!-- Button trigger modal -->
      <button
      type="button"
      class="btn"
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
              type="name"
              v-model="editingUser.firstName"
              required
            />
            <input
              placeholder="Surname"
              type="surname"
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
              type="gender"
              v-model="editingUser.Gender"
              required
            />
            <input
              placeholder="Email"
              type="email"
              v-model="editingUser.emailAdd"
              required
            />
            <input
              placeholder="Role"
              type="role"
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
        <button class="btn" @click.prevent="LogOut">Logout</button>
        <button class="del btn" @click="deleteUser(user.userID)">delete</button>
    </div>
</template>

<script>
import router from '@/router'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

export default {

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
        user() {
            return this.$store.state.user;
        },
    },
    methods: {
        LogOut() {
            cookies.remove("LegitUser")
            try {
                const data = JSON.parse(localStorage.getItem("user"));
                
                if (data) {
                    localStorage.removeItem("user")
                }
            } catch (error) {
                console.error("Error fetching data from local storage:", error);
            }
            router.push({ name: "login" });
        },
        openEditModal(userID) {
        this.editingUserID = userID;
        this.editingUser = {
          ...this.$store.state.user
        };
      },
      updateUser(userID) {
        this.$store
          .dispatch("updateUser", {
            id: userID,
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
      deleteUser(userID) {
    if (confirm("Are you sure you want to delete this user?"))
      this.$store.dispatch("deleteUser", userID);
    setTimeout(() => {
      location.reload();
    }, 500);
    router.push({ name: "login" });
  },
  },
    mounted() {
        this.$store.dispatch("fetchUsers");
    },
}
</script>

<style scoped>
img {
    width: 20%;
    border-radius: 9rem;
    margin-top: 1rem;
}

span{
    color: black;
    font-weight: bold;
}

.btn{
    border: 1px solid black;
    margin-bottom: 7px;
    background-color: transparent;
    color: black;
    margin-left: 1rem;
    margin-right: 1rem;
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