<template>
  <div class="bg-customWhite">
    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-8 md:pt-16 pb-8 md:pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-left md:text-center max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Our <span class="text-customOrange">Gallery Bucket</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-600 leading-relaxed">
            Take a look at our culinary creations, vibrant atmosphere, and memorable moments at Seasalt Bucket. 
          </p>
        </div>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="mb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-start md:justify-center gap-2 md:gap-4">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="activeCategory = category"
            :class="[
              'px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300',
              activeCategory === category 
                ? 'bg-customOrange text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div 
            v-for="(image, index) in filteredImages" 
            :key="index"
            class="group relative aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            @click="openLightbox(index)"
          >
            <img 
              :src="image.src" 
              :alt="image.alt"
              class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
              <div class="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center p-4">
                <p class="text-base md:text-lg font-semibold mb-1 md:mb-2">{{ image.title }}</p>
                <p class="text-xs md:text-sm">{{ image.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- View More Button -->
    <section class="text-center pb-8 md:pb-16">
      <div class="text-center mt-16">
        <a
          href="https://www.facebook.com/SeasaltBucket/photos"
          target="_blank" 
          class="group relative inline-flex items-center justify-center px-8 py-4 font-semibold tracking-wide overflow-hidden rounded-xl transition-all duration-300"
        >
          <span class="absolute inset-0 bg-gradient-to-r from-customOrange to-orange-600 group-hover:bg-gradient-to-l transition-all duration-500"></span>
          <span class="absolute bottom-0 left-0 w-full h-1 bg-orange-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          <span class="absolute top-0 left-0 w-full h-1 bg-orange-700 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          <span class="relative flex items-center text-white group-hover:scale-110 transition-transform duration-300">
            View More Photos
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
        </a>
      </div>
    </section>

    <!-- Lightbox -->
    <div 
      v-if="lightboxOpen" 
      class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
      @click="closeLightbox"
    >
      <div class="relative w-full max-w-7xl mx-auto">
        <!-- Close Button -->
        <button 
          class="absolute -top-2 -right-2 md:top-2 md:right-64 z-10 p-2 text-white hover:text-customOrange transition-colors duration-300"
          @click="closeLightbox"
        >
          <svg class="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Navigation Buttons -->
        <button 
          class="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-white hover:text-customOrange transition-colors duration-300"
          @click.stop="previousImage"
        >
          <svg class="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          class="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white hover:text-customOrange transition-colors duration-300"
          @click.stop="nextImage"
        >
          <svg class="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Image -->
        <img 
          :src="currentImage.src" 
          :alt="currentImage.alt"
          class="max-h-[80vh] w-auto mx-auto"
        />

        <!-- Caption -->
        <div class="text-center text-white mt-4">
          <h3 class="text-lg md:text-xl font-semibold">{{ currentImage.title }}</h3>
          <p class="text-sm md:text-base text-gray-300 mt-2">{{ currentImage.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import defaultFood from '../assets/pictures/default-food.jpg'
  
  // Categories focused on food and dining
  const categories = ['All', 'Signature Dishes', 'Seafood Specialties', 'Dining Areas', 'Daily Specials']
  const activeCategory = ref('All')
  
  // Gallery Images focused on food and dining experience
  const images = ref([
    {
      src: defaultFood,
      alt: 'Signature Seafood Platter',
      title: 'Signature Seafood Platter',
      description: 'A bountiful selection of fresh catches, perfectly prepared and beautifully presented',
      category: 'Signature Dishes'
    },
    {
      src: defaultFood,
      alt: 'Grilled Lobster',
      title: 'Fresh Grilled Lobster',
      description: 'Succulent lobster grilled to perfection with herb butter',
      category: 'Seafood Specialties'
    },
    {
      src: defaultFood,
      alt: 'Main Dining Area',
      title: 'Seaside Dining Room',
      description: 'Elegant indoor dining with a warm, inviting atmosphere',
      category: 'Dining Areas'
    },
    {
      src: defaultFood,
      alt: 'Catch of the Day',
      title: "Today's Fresh Catch",
      description: 'Local fish prepared with seasonal ingredients',
      category: 'Daily Specials'
    },
    {
      src: defaultFood,
      alt: 'Seafood Pasta',
      title: 'Signature Seafood Pasta',
      description: 'Fresh pasta tossed with an assortment of seafood in white wine sauce',
      category: 'Signature Dishes'
    },
    {
      src: defaultFood,
      alt: 'Outdoor Terrace',
      title: 'Al Fresco Dining',
      description: 'Beautiful outdoor seating for the perfect dining experience',
      category: 'Dining Areas'
    },
    {
      src: defaultFood,
      alt: 'Crab Special',
      title: 'King Crab Feast',
      description: 'Premium king crab legs with drawn butter and seasonal sides',
      category: 'Seafood Specialties'
    },
    {
      src: defaultFood,
      alt: 'Chef Special',
      title: "Chef's Daily Creation",
      description: 'Innovative daily specials featuring the freshest ingredients',
      category: 'Daily Specials'
    },
  ])
  
  // Filtered Images based on category
  const filteredImages = computed(() => {
    if (activeCategory.value === 'All') return images.value
    return images.value.filter(image => image.category === activeCategory.value)
  })
  
  // Lightbox functionality
  const lightboxOpen = ref(false)
  const currentImageIndex = ref(0)
  const currentImage = computed(() => filteredImages.value[currentImageIndex.value])
  
  const openLightbox = (index) => {
    currentImageIndex.value = index
    lightboxOpen.value = true
  }
  
  const closeLightbox = () => {
    lightboxOpen.value = false
  }
  
  const nextImage = () => {
    currentImageIndex.value = (currentImageIndex.value + 1) % filteredImages.value.length
  }
  
  const previousImage = () => {
    currentImageIndex.value = currentImageIndex.value === 0 
      ? filteredImages.value.length - 1 
      : currentImageIndex.value - 1
  }
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