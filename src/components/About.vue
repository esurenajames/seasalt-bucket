<template>
  <section class="bg-gray-50 py-8 md:py-16 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
        <!-- Image Column -->
        <div class="relative group">
          <div class="aspect-w-16 aspect-h-12 rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
            <img 
              :src="title.src"
              alt="Seasalt Bucket Restaurant" 
              class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <!-- Floating Achievement Card -->
          <div class="absolute -bottom-8 -right-8 mr-6 bg-white p-6 md:p-8 rounded-2xl shadow-xl hidden md:block transform transition-transform duration-500 hover:scale-105">
            <div class="flex items-center gap-4 md:gap-6">
              <div class="w-12 md:w-16 h-12 md:h-16 bg-customOrange/10 rounded-full flex items-center justify-center transform transition-transform duration-500 hover:rotate-12">
                <svg class="w-6 md:w-8 h-6 md:h-8 text-customOrange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-gray-900 text-base md:text-lg">Years of Excellence</p>
                <p class="text-customOrange text-2xl md:text-3xl font-bold">4+</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Content Column -->
        <div class="lg:sticky lg:top-8">
          <div class="text-left">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {{ title.main }} 
              <span class="text-customOrange">{{ title.highlight }}</span>
            </h2>
            <div class="w-32 h-1.5 bg-customOrange mb-8 transform origin-left transition-transform duration-500 hover:scale-x-110"></div>
            
            <div class="space-y-4 md:space-y-6 text-gray-600">
              <p v-for="(paragraph, index) in paragraphs" 
                 :key="index" 
                 :class="['leading-relaxed', index === 0 ? 'text-lg md:text-xl' : 'text-lg md:text-xl']">
                {{ paragraph }}
              </p>
            </div>

            <!-- Stats Grid -->
            <div class="grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10 mb-8 md:mb-12">
              <div v-for="stat in stats" 
                   :key="stat.label" 
                   class="text-center p-4 md:p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <p class="text-2xl md:text-3xl font-bold text-customOrange mb-2">{{ stat.value }}</p>
                <p class="text-xs md:text-sm font-medium text-gray-600">{{ stat.label }}</p>
              </div>
            </div>

            <!-- Enhanced Button -->
            <section class="text-center">
              <div class="text-center mt-16">
                <router-link
                  to="/about"
                  class="group relative inline-flex items-center justify-center px-8 py-4 font-semibold tracking-wide overflow-hidden rounded-xl transition-all duration-300"
                >
                  <span class="absolute inset-0 bg-gradient-to-r from-customOrange to-orange-600 group-hover:bg-gradient-to-l transition-all duration-500"></span>
                  <span class="absolute bottom-0 left-0 w-full h-1 bg-orange-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                  <span class="absolute top-0 left-0 w-full h-1 bg-orange-700 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                  <span class="relative flex items-center text-white group-hover:scale-110 transition-transform duration-300">
                    More About Us
                    <svg 
                      class="w-5 h-5 ml-2 transform transition-all duration-300 group-hover:translate-x-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </router-link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import calleBistro from '../assets/pictures/calle-bistro.jpg'

const title = {
  main: 'Our Story at',
  highlight: 'Seasalt Bucket',
  src: calleBistro
}

const paragraphs = [
  'Since 2020, Seasalt Bucket has been more than just a restaurant – its been a journey of passion, dedication, and love for exceptional seafood dining.',
  'What started as a small family-owned seafood shack has grown into one of the most beloved dining destinations in the area, serving thousands of satisfied customers and creating countless memorable moments...'
]

const stats = [
  { value: '15k+', label: 'Happy Customers' },
  { value: '50+', label: 'Unique Dishes' },
  { value: '12', label: 'Expert Chefs' }
]

</script>

<style scoped>
.aspect-w-16 {
  position: relative;
  padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);
  --tw-aspect-w: 16;
}

.aspect-h-12 {
  --tw-aspect-h: 12;
}

.aspect-w-16 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>