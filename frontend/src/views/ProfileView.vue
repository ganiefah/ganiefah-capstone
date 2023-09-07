<template>
    <div class="container">
<!-- <UpdateUser/> -->
<button @click.prevent="LogOut">Logout</button>
    </div>
</template>

<script>
// import UpdateUser from '../components/UpdateUser.vue'
import router from '@/router'
import {useCookies} from 'vue3-cookies'
const {cookies} = useCookies()

    export default {
        // components:{
        //     UpdateUser
        // },
        
        methods: {
            LogOut() {
                cookies.remove("LegitUser")
                router.push({ name: "login" });
            }
        }
        
    }
</script>

<style scoped>
</style>