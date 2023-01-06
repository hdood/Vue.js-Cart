<template>
        <nav class="flex basis-36 mt-4 py-2 h-20 grid-cols-3 justify-between items-baseline    bg-gray-50 rounded-lg shadow" >
            <div  class="self-center grid grid-cols-2 gap place-items-center ">
                <img src="../assets/vue.png" class="h-10 w-10" alt="" srcset="">
                <a href="/home" class="font-bold ">Online Shop</a>
            </div>
            <div class="bg-white border-2 border-indigo-400  z-10 shadow-md mt-3 px-2 w-1/5 rounded-md ">
                <div class="flex items-center ">
                    <svg class="inline opacity-50" xmlns="http://www.w3.org/2000/svg" width="17.49" height="17.49" viewBox="0 0 17.49 17.49">
                        <path id="ic_search_24px" d="M15.5,14h-.79l-.28-.27a6.51,6.51,0,1,0-.7.7l.27.28v.79l5,4.99L20.49,19Zm-6,0A4.5,4.5,0,1,1,14,9.5,4.494,4.494,0,0,1,9.5,14Z" transform="translate(-3 -3)"/></svg>
                    <input ref="searchInput" class="rounded-lg w-full text-lg block border-solid  outline-none p-2" type="text" name="search"  placeholder="Search for product">
                </div>
                <a class="mt-2 p-1 w- flex items-center gap-4 hover:bg-indigo-200 rounded-md  font-semibold" href="" v-for="product in sProducts"><img src="" class="w-10 h-10 drop-shadow-md rounded-lg" alt=""/><span>{{ product.bold }}<span class=" opacity-40" href="">{{ product.thin }}</span></span></a>
            </div>
            <div  class="flex p-2 gap-3 self-center justify-end">
                <a  @click="displayCart" href="#" :data-items="itemsCount" class="p-2 rounded-md  bg-indigo-500 hover:bg-indigo-400 text-white transition-colors font-semibold after:text-sm  after:content-[attr(data-items)] relative after:absolute after:-right-2 after:bg-red-400 after:rounded-full after:-top-1 after:w-5 after:h-5 after:text-center  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M7,18a2,2,0,1,0,2,2A2,2,0,0,0,7,18ZM1,2V4H3l3.6,7.59L5.25,14.04A1.933,1.933,0,0,0,5,15a2.006,2.006,0,0,0,2,2H19V15H7.42a.248.248,0,0,1-.25-.25l.03-.12L8.1,13h7.45a1.991,1.991,0,0,0,1.75-1.03l3.58-6.49A.977.977,0,0,0,21,5a1,1,0,0,0-1-1H5.21L4.27,2H1ZM17,18a2,2,0,1,0,2,2A2,2,0,0,0,17,18Z" fill="white" transform="translate(-1 -2)"/></svg>
                </a>
                <a v-if="!logged" @click="logged = true" href="#" class="p-2 rounded-md  bg-indigo-500 hover:bg-indigo-400 text-white transition-colors font-semibold ">Login</a>
                <a v-if="logged" @click="logged = false" href="#" class="p-2 rounded-md  bg-indigo-500 hover:bg-indigo-400 text-white transition-colors font-semibold">Logout</a>
                <a v-if="!logged" href="#" class="p-2 rounded-md hover:bg-black underline hover:no-underline hover:text-white transition-colors font-semibold">Register</a>
            </div>
        </nav>
</template>
<script>
import { mapState } from 'vuex';

export default {
    computed : {
        ...mapState({
            sProducts : state => state.products.searchedProducts
        }), 
        itemsCount(){
            return Object.keys(this.$store.state.cart.products).length
        }
    },  
    data(){
        return {
            logged : false, 
        }
    }, 
    methods : {

        displayCart(){
            this.$root.cart = !this.$root.cart;
        }, 
        search(){
                let query = this.$refs.searchInput.value.trim(); 
                console.log("search")
                if(query == ""){
                    this.$store.dispatch("clearSearch");
                    return;
                }
                this.$store.dispatch("search", { query }); 
        }, 
    }, 
    mounted(){
        let searchInput = this.$refs.searchInput; 
        let that = this; 
        searchInput.addEventListener("input", e => {
            that.search();
        })
    }

}

</script >
<style>

</style>