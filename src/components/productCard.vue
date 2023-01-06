<template lang="">
    <div class="p-3 border-2 border-indigo-400  hover:border-4 hover:shadow-md rounded transition-all shadow text-center bg-gray-100 ">
        <img class="mx-auto drop-shadow-lg  h-1/2 rounded-lg" src="../assets/z.png" alt="">
        <span class="font-semibold block">{{product.name}}</span>
        <span class="opacity-50 block">{{product.brand}}</span>
        <span class="block">{{ price }}</span>
        <button @click="addToCart" class="mt-4 bg-indigo-500 rounded mx-auto  p-2 text-white hover:bg-indigo-400 transition-colors">Add to Cart</button>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
    export default {
        props : ["product", "id"], 
        methods : {
            addToCart(){
                this.$store.dispatch("initCart");
                this.$store.dispatch("addToCart", {id : this.id, product : this.product});
            }
        }, 
        computed: {
            ...mapState({
                cart : state => state.cartModule.cart,
            }),
            price(){
                return new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(this.product.price)
            }
        }
    }
</script>
<style lang="">

</style>