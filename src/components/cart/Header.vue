<template lang="">
  <div
    class="h-14 grid grid-cols-6 justify-around shadow bg-indigo-500 text-white rounded-lg p-1"
    v-if="show"
  >
    <div class="relative grid place-items-center">
      Image
    </div>
    <div class="text-center grid place-items-center">
      <span>Name</span>
    </div>
    <div class="text-center grid place-items-center">
      <span> Price </span>
    </div>
    <div class="grid place-items-center">
      quantity
    </div>
    <div class="grid place-items-center">
      Total
    </div>
    <div class="grid place-items-center">
      Remove
    </div>
  </div>
  <div v-else class="bg-indigo-500 text-white text-center text-lg rounded-md ">
    Cart is Empty ! 
  </div>
</template>
<script>
export default {

  computed : {
    show(){
      return Object.keys(this.$store.state.cart.products).length;
    }
  }
};
</script>
<style lang=""></style>
