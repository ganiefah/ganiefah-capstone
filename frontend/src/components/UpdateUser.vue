<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn"
      @click="openEditModal(user.userID)"
      data-bs-toggle="modal"
      :data-bs-target="'#texampleModal' + user.userID"
    >
      edit
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'texampleModal' + user.userID"
      tabindex="-1"
      :aria-labelledby="'texampleModalLabel' + user.userID"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="texampleModalLabel3">
              Modal title
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <label>first name:</label>
            <input
              type="text"
              placeholder="first name"
              v-model="editingUser.firstName"
            />
            <label>last name:</label>
            <input
              type="text"
              placeholder="last name"
              v-model="editingUser.surName"
            />
            <label>Age:</label>
            <input
              type="number"
              placeholder="age"
              v-model="editingUser.userAge"
            />
            <label>gender:</label>
            <input
              type="text"
              placeholder="gender"
              v-model="editingUser.Gender"
            />
            <label>user role:</label>
            <input
              type="text"
              placeholder="role"
              v-model="editingUser.userRole"
            />
            <label>email address:</label>
            <input
              type="text"
              placeholder="email address"
              v-model="editingUser.emailAdd"
            />
            <label>user profile:</label>
            <input
              type="text"
              placeholder="profile image"
              v-model="editingUser.profileURL"
            />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              class="btn"
              @click="updateProduct(user.userID)"
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
      editingUser: {
        ...this.user,
      },
      editingUserID: null,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.user;
    },
  },
  methods: {
    openEditModal(userID) {
      console.log("reached");
      this.editingUserID = userID;
      this.editingUser = {
        ...this.$store.state.users.find((user) => user.userID === userID),
      };
    },
    updateProduct(userID) {
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
          console.error("Error updating: ", err);
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