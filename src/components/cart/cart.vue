<template lang="">
  <div
    @click="close"
    class="fixed top-0 left-0 backdrop-blur-sm h-screen w-screen z-40"
  ></div>
  <div
    ref="cart"

    class="w-1/2 z-50 p-20 h-screen fixed top-0 right-0 bg-gray-200 shadow-lg"
  >
    <div class="flex flex-col p-1 h-full gap-2">
      <TopHeader />
      <cartItem
        v-for="(product, id) in cart"
        :product="product"
        :id="id"
      ></cartItem>
    </div>
    <div
      @click="close"
      class="absolute p-4  left-4 scale-150 top-4 hover:-translate-x-1 transition-all cursor-pointer"
    >
      <img src="../../assets/icons/ic_arrow_back_24px.svg" alt="">
    </div>
    <div>
      total : {{ cartTotal }}
    </div>
    <button
      v-if="checkout"
      @click="resetCart"
      class="text-white rounded text-lg font-semibold transition-colors hover:bg-green-400 w-1/2  bg-green-500 p-2"
    >
      Checkout
    </button>

  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import cartItem from "./cartItem.vue";
import TopHeader from "./Header.vue";
export default {
  mounted() {
    this.$store.dispatch("getCartItems");
  },
  components: {
    cartItem,
    TopHeader
  },
  computed: {
    ...mapState({
      cart: (state) => state.cart.products,
    }),
    ...mapGetters([
      'cartTotal'
    ]),
    checkout() {
      return this.cart != {};
    },
  },
  methods: {
    resetCart() {
      this.$store.dispatch("resetCart");
    },
    close() {
      this.$root.cart = false;
    },
  },
};
</script>
<style scoped>
div::-webkit-scrollbar-thumb {
  background-color: rgb(129 140 248);
}
.cart-enter-active,
.cart-leave-active {
  transition: all 300ms ease;
}

.cart-enter-from,
.cart-leave-to {
  transform: translateX(20rem);
  opacity: 0;
}
</style>
