<template lang="">
    <div class="top-0 container mx-auto">
        <navbar></navbar>
        <div class="h-screen gap-5 container mt-4 grid grid-cols-5">
            <div>
                <sideNavbar></sideNavbar>
            </div>
            <div class="h-screen col-start-2 col-end-6 ">
                <mainContent></mainContent>
            </div>

        </div>
    </div>
    <transition name="cart">
        <cart v-if="cart"></cart>
    </transition>
</template>
<script>
import navbar from './components/navbar.vue';
import sideNavbar from './components/sideNavbar.vue';
import mainContent from './components/mainContent.vue';
import cart from "./components/cart/cart.vue";


export default {
    data(){
        return {
            cart : false,
        }
    }, 
    components : {
        navbar, 
        sideNavbar, 
        mainContent, 
        cart
    }

}

</script>
<style>
</style>