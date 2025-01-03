<template>
  <section class="bg-white py-8 md:py-16 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          What We Serve Here at 
          <span class="text-customOrange">Seasalt Bucket</span>
        </h2>
        <div class="w-32 h-1 bg-customOrange mx-auto mb-8 transform origin-center transition-transform duration-500 hover:scale-x-110"></div>
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our diverse menu featuring the freshest seafood, perfectly prepared to satisfy your cravings.
        </p>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="category in categories" :key="category.title" class="group relative overflow-hidden rounded-3xl">
          <div class="aspect-w-4 aspect-h-3">
            <img 
              :src="category.src" 
              :alt="category.title" 
              class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-300"></div>
            <div class="absolute inset-0 flex flex-col justify-end p-8">
              <h3 class="text-2xl font-bold text-white mb-3">{{ category.title }}</h3>
              <p class="text-white/90 mb-4">{{ category.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in category.tags" :key="tag" class="px-3 py-1 bg-white/20 rounded-full text-white text-sm">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View Full Menu Button -->
      <div class="text-center mt-16">
        <router-link 
          to="/menu" 
          class="group relative inline-flex items-center justify-center px-8 py-4 font-semibold tracking-wide overflow-hidden rounded-xl transition-all duration-300"
        >
          <span class="absolute inset-0 bg-gradient-to-r from-customOrange to-orange-600 group-hover:bg-gradient-to-l transition-all duration-500"></span>
          <span class="absolute bottom-0 left-0 w-full h-1 bg-orange-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          <span class="absolute top-0 left-0 w-full h-1 bg-orange-700 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          <span class="relative flex items-center text-white group-hover:scale-110 transition-transform duration-300">
            View Full Menu
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
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import defaultFood from '../assets/pictures/default-food.jpg'

const categories = [
  {
    title: 'Fresh Seafood',
    description: 'Crabs, Shrimps and more',
    tags: ['Crabs', 'Lobster', 'Mussel', 'Clamps', 'Shirmp'],
    src: defaultFood,
  },
  {
    title: 'Signature Dishes',
    description: 'Our special house recipes',
    tags: ['Cajun Crab', 'Baked Scallops', 'Crispy Pata'],
    src: defaultFood,
  },
  {
    title: 'Local Favorites',
    description: 'Popular local delicacies',
    tags: ['Grilled Fish', 'Seafood Soup', 'Rice Meals'],
    src: defaultFood,
  },
  {
    title: 'Seafood Platters',
    description: 'Perfect for sharing',
    tags: ['Family Feast', 'Party Tray', 'Group Meals'],
    src: defaultFood,
  },
  {
    title: 'Side Dishes',
    description: 'Perfect companions',
    tags: ['Corn', 'Rice', 'Vegetables'],
    src: defaultFood,
  },
  {
    title: 'Desserts',
    description: 'Sweet endings',
    tags: ['Ice Cream', 'Cakes', 'Filipino Desserts'],
    src: defaultFood,
  }
]
</script>

