<template>
  <section class="py-20 bg-customWhite">  
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Dine with Us
        </h2>
        <div class="w-32 h-1 bg-customOrange mx-auto mb-8 transform origin-center transition-transform duration-500 hover:scale-x-110"></div>
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Visit us at our convenient locations and experience the fresh taste of the sea
        </p>
      </div>
      <!-- Locations Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(location, index) in locations"
          :key="location.name"
          class="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="aspect-w-16 aspect-h-9">
            <img
              :src="location.src"
              :alt="location.name"
              :class="['object-cover w-full h-full group-hover:scale-105 transition-transform duration-300',
                      {'filter grayscale': !location.isOpen}]"
            />
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0"></div>
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <div class="flex items-start space-x-2">
              <div class="text-orange-500">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-white mb-2">{{ location.name }}</h3>
                <p :class="[
                  'text-sm',
                  location.isOpen ? 'text-gray-200' : 'text-yellow-300'
                ]">
                  {{ location.status }}
                </p>
              </div>
            </div>
          </div>
          <div class="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300">
            <button
              @click="navigateToLocation(index)"
              :class="[
                'px-6 py-3 rounded-full font-medium transition-colors duration-200',
                location.isOpen
                  ? 'bg-orange-500 hover:bg-orange-600 text-white'
                  : 'bg-gray-500 text-white cursor-not-allowed'
              ]"
              :disabled="!location.isOpen">
              {{ location.isOpen ? 'Get Directions' : 'Coming Soon' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import calleBistro from '../assets/pictures/calle-bistro.jpg'

const router = useRouter()

const locations = ref([
  {
    name: 'Le Village Lifestyle Park',
    src: calleBistro,
    status: 'Now Open',
    isOpen: true
  },
  {
    name: 'Marilaque Tanay',
    src: calleBistro,
    status: 'Now Open',
    isOpen: true
  },
  {
    name: 'Calle Bistro',
    src: calleBistro,
    status: 'Soon to Open',
    isOpen: false
  }
])

const navigateToLocation = (index) => {
  router.push({
    name: 'location',
    query: { selected: index }
  })
}
</script>