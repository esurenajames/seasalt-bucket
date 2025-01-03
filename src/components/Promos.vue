<template>
    <div 
      v-if="showPromo" 
      class="bg-customOrange text-white p-4 flex justify-between items-center shadow-lg fixed top-0 left-0 w-full z-50"
    >
      <div class="flex-1 text-center">
        <h3 class="text-lg font-bold">Limited Time Offer!</h3>
        <p class="text-sm">Enjoy 20% off on all seafood platters this weekend!</p>
      </div>
      <button 
        @click="showPromo = false" 
        class="text-white bg-transparent hover:bg-orange-600 p-2 rounded-full transition"
        aria-label="Close Promo Card"
      >
        ✕
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const showPromo = ref(true);
  </script>
  
  <style scoped>
  /* Additional styles for promo banner */
  </style>
  