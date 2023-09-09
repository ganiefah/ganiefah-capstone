<template>
    <div class="container">
        <div class="col">
            <h1>Welcome Back To Your Profile</h1>
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
        <button @click.prevent="LogOut">Logout</button>
    </div>
</template>

<script>
import router from '@/router'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

export default {
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
        }
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
</style>