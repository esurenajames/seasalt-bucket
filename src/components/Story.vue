<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <!-- Hero Section -->
    <section class="relative pt-20 pb-32 overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
          <div class="text-center max-w-3xl mx-auto">
            <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span class="text-customOrange">Seasalt Bucket</span>
            </h1>
            <div class="w-32 h-1 bg-customOrange mx-auto mb-8 transform origin-center transition-transform duration-500 hover:scale-x-110"></div>
            <p class="text-lg text-gray-600 py-2 leading-relaxed">
            Since 2020, SeaSalt Bucket has grown from a humble family seafood shack into a beloved dining destination known for its passion and excellence.
            </p>
            <p class="text-lg text-gray-600 py-2 leading-relaxed">
            Every dish we serve tells a story, bringing together fresh ingredients, bold flavors, and a love for creating unforgettable moments.
            </p>
          </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="py-16 bg-customWhite">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <div v-for="item in missionVision" 
                 :key="item.title"
                 class="p-8 bg-orange-50 shadow-md rounded-3xl transform transition-transform hover:scale-105 duration-300">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ item.title }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ item.content }}</p>
            </div>
          </div>
          <div class="relative group">
            <div class="aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden shadow-2xl">
              <img :src="seasaltDine"
                   alt="Seasalt Bucket Team" 
                   class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="py-16 bg-customWhite">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">Be Part of the SeaSalt Bucket Family</h2>
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Are you passionate about food and hospitality? We're looking for enthusiastic individuals to join our team and help create unforgettable dining experiences.
        </p>
        <div class="text-center mt-16">
          <a href="mailto:seasaltbucket@gmail.com"
             class="group relative inline-flex items-center justify-center px-8 py-4 font-semibold tracking-wide overflow-hidden rounded-xl transition-all duration-300">
            <span class="absolute inset-0 bg-gradient-to-r from-customOrange to-orange-600 group-hover:bg-gradient-to-l transition-all duration-500"></span>
            <span class="absolute bottom-0 left-0 w-full h-1 bg-orange-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            <span class="absolute top-0 left-0 w-full h-1 bg-orange-700 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            <span class="relative flex items-center text-white group-hover:scale-110 transition-transform duration-300">
              Join Our Team
              <svg class="w-5 h-5 ml-2 transform transition-all duration-300 group-hover:translate-x-2" 
                   fill="none" 
                   stroke="currentColor" 
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import seasaltDine from '../assets/pictures/seasalt-dine.jpg'

const src = seasaltDine; 

const missionVision = ref([
  {
    title: 'Our Mission',
    content: 'To serve exceptional seafood dishes that celebrate the bounty of our oceans while maintaining sustainable practices and supporting local fishing communities.'
  },
  {
    title: 'Our Vision',
    content: 'To be the premier destination for seafood lovers, known for our innovative recipes, warm hospitality, and commitment to ocean conservation.'
  }
]);
</script>

<style scoped>
.aspect-w-4 {
  position: relative;
  padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);
  --tw-aspect-w: 4;
}

.aspect-h-3 {
  --tw-aspect-h: 3;
}

.aspect-w-4 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>