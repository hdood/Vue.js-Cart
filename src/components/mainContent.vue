<template lang="">
    <section class="p-4 gap-4 grid grid-cols-4">
        <productCard v-for="(product, id) in products" :product="product" :id="id" :key="id"></productCard>
    </section>
</template>
<script>
import { mapState } from 'vuex';
import productCard from './productCard.vue';

export default {

    mounted() {
        this.$store.dispatch("initCart"); 
        this.$store.dispatch("fetchProducts"); 
    },
    data(){
        return {
        }
    },
    computed : {
        ...mapState({
            products : state => state.products.all
        }), 
    }, 
    components : {
        productCard
    }
}
</script>
