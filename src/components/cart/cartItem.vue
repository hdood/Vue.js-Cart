<template lang="">
  <div
    class="h-24 grid grid-cols-6 justify-around border-2 border-indigo-400 hover:border-4 transition-all shadow hover:shadow-md bg-white rounded-lg p-1"
  >
    <div class="relative grid place-items-center">
      <img class="h-14 w-14" src="" alt="" />
    </div>
    <div class="text-center grid place-items-center">
      <span>{{ product.name }}</span>
    </div>
    <div class="text-center grid place-items-center">
      <span>{{ formattedPrice }}</span>
    </div>
    <div class="flex gap-5 justify-center items-center self-center">
      <button
        class="font-bold bg-indigo-300 w-6 rounded h-6 p-1 text-center active:bg-indigo-400 text-lg"
        @click="increase"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
        >
          <path
            id="ic_add_24px"
            d="M19,13H13v6H11V13H5V11h6V5h2v6h6Z"
            transform="translate(-5 -5)"
            fill="#fff"
          />
        </svg>
      </button>
      {{ product.quantity }}
      <button
        class="font-bold bg-indigo-300 w-6 rounded h-6 p-1 text-center text-lg active:bg-indigo-400"
        @click="decrease"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="2"
          viewBox="0 0 14 2"
        >
          <path
            id="ic_remove_24px"
            d="M19,13H5V11H19Z"
            transform="translate(-5 -11)"
            fill="#fff"
          />
        </svg>
      </button>
    </div>
    <div class="grid place-items-center">
      {{ total }}
    </div>
    <div class="grid place-items-center">
      <svg
        @click="deleteItem"
        class="cursor-pointer fill-red-500 hover:fill-red-400 scale-125"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="18"
        viewBox="0 0 14 18"
      >
        <path
          id="ic_delete_24px"
          d="M6,19a2.006,2.006,0,0,0,2,2h8a2.006,2.006,0,0,0,2-2V7H6ZM19,4H15.5l-1-1h-5l-1,1H5V6H19Z"
         
          transform="translate(-5 -3)"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product", "id"],
  methods: {
    increase() {
      this.$store.dispatch("incrementQuantity", { id: this.id });
    },
    decrease() {
      this.$store.dispatch("decrementQuantity", { id: this.id });
    },
    deleteItem() {
      this.$store.dispatch("deleteItem", { id: this.id });
    },
  },
  computed: {
    total() {
      return new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(this.product.price * this.product.quantity);
    },
    formattedPrice() {
      return new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(this.product.price);
    }
  },
};
</script>
<style></style>
