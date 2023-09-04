<template>
    <div>
        <ViewMore/>
    </div>
</template>

<script>
import ViewMore from "@/components/ViewMore.vue"
    export default {
        components:{
            ViewMore
        },
        computed:{
            products(){
                return this.$store.state.products
            }
        }
    }
</script>

<style scoped>

</style>