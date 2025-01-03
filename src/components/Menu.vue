<template>
  <section class="bg-white py-24 md:py-32 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header with Location Selector -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <div class="mb-6 md:mb-0">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <div class="w-32 h-1 bg-customOrange mb-8"></div>
        </div>
        
        <!-- Location Selector -->
        <div class="relative w-full md:w-72">
          <select
            v-model="selectedLocation"
            class="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 
                    appearance-none cursor-pointer hover:border-customOrange 
                    transition-colors duration-300 focus:outline-none focus:border-customOrange"
          >
            <option v-for="location in locations" :key="location.id" :value="location.id">
              {{ location.name }}
            </option>
          </select>
          <!-- Custom dropdown arrow -->
          <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Menu Categories -->
      <div class="space-y-2">
        <div v-for="category in currentMenu" :key="category.name" class="bg-gray-50 rounded-3xl p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">{{ category.name }}</h3>
          
          <!-- Menu Items Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="item in category.items" 
              :key="item.name"
              class="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <!-- Item Image -->
              <div 
                class="aspect-w-16 aspect-h-12 mb-4 rounded-xl overflow-hidden cursor-pointer"
                @click="openLightbox(item)"
              >
                <img 
                  :src="item.src" 
                  :alt="item.name"
                  class="w-16 h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <!-- Item Details -->
              <div class="space-y-2">
                <div class="flex justify-between items-start">
                  <h4 class="text-lg font-semibold text-gray-900">{{ item.name }}</h4>
                  <span class="text-customOrange font-bold">₱{{ item.price }}</span>
                </div>
                <p class="text-gray-600 text-sm">{{ item.description }}</p>
                
                <!-- Tags -->
                <div class="flex flex-wrap gap-2 pt-2">
                  <span 
                    v-for="tag in item.tags" 
                    :key="tag"
                    class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
          :src="currentImage?.src"
          :alt="currentImage?.name"
          class="max-h-[80vh] w-auto mx-auto"
        />
        <!-- Caption -->
        <div class="text-center text-white mt-4">
          <h3 class="text-lg md:text-xl font-semibold">{{ currentImage?.name }}</h3>
          <p class="text-sm md:text-base text-gray-300 mt-2">{{ currentImage?.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import defaultFood from '../assets/pictures/default-food.jpg';

// Sample location data
const locations = [
  { id: 1, name: 'Seasalt Bucket - Le Village' },
  { id: 2, name: 'Seasalt Bucket - Marilaque' },
  { id: 3, name: 'Seasalt Bucket - Calle Bistro' },
];

// Sample menu data with 4 categories and multiple items per category
const menuData = {
  1: [ // Le Village Menu
    {
      name: 'Signature Seafood',
      items: [
        {
          name: 'Cajun Crab',
          price: '899',
          description: 'Fresh crab cooked in special Cajun sauce.',
          tags: ['Bestseller', 'Spicy'],
          src: defaultFood,
        },
        {
          name: 'Garlic Butter Shrimp',
          price: '599',
          description: 'Shrimp sautéed in garlic butter sauce.',
          tags: ['Popular'],
          src: defaultFood,
        },
      ]
    },
    {
      name: 'Grilled Specials',
      items: [
        {
          name: 'Grilled Tuna Steak',
          price: '699',
          description: 'Freshly grilled tuna steak with herbs.',
          tags: ['Healthy'],
          src: defaultFood,
        },
        {
          name: 'Charcoal-Grilled Prawns',
          price: '799',
          description: 'Juicy prawns with smoky flavor.',
          tags: ['Grilled', 'Bestseller'],
          src: defaultFood,
        },
      ]
    },
    {
      name: 'Seafood Soups',
      items: [
        {
          name: 'Seafood Chowder',
          price: '399',
          description: 'Rich, creamy soup with shrimp and clams.',
          tags: ['Comfort Food'],
          src: defaultFood,
        },
        {
          name: 'Spicy Seafood Stew',
          price: '499',
          description: 'Hearty stew with mussels and squid.',
          tags: ['Spicy'],
          src: defaultFood,
        },
      ]
    },
    {
      name: 'Seafood Platters',
      items: [
        {
          name: 'Family Feast',
          price: '1499',
          description: 'A platter of crab, shrimp, and mussels.',
          tags: ['Sharing'],
          src: defaultFood,
        },
        {
          name: 'Seafood Extravaganza',
          price: '1699',
          description: 'A mix of all signature seafood dishes.',
          tags: ['Premium'],
          src: defaultFood,
        },
      ]
    },
  ],
  2: [ // Marilaque Menu
    {
      name: 'Signature Seafood',
      items: [
        {
          name: 'Marilaque Butter Crab',
          price: '899',
          description: 'Crab in rich butter sauce with herbs.',
          tags: ['Bestseller'],
          src: defaultFood,
        },
        {
          name: 'Spicy Garlic Shrimp',
          price: '599',
          description: 'Shrimp in spicy garlic sauce.',
          tags: ['Spicy'],
          src: defaultFood,
        },
      ]
    },
    {
      name: 'Grilled Specials',
      items: [
        {
          name: 'Charcoal-Grilled Squid',
          price: '699',
          description: 'Squid grilled over charcoal.',
          tags: ['Grilled', 'Bestseller'],
          src: defaultFood,
        },
        {
          name: 'Grilled Mahi-Mahi',
          price: '749',
          description: 'Delicately grilled Mahi-Mahi with lemon butter.',
          tags: ['Healthy'],
          src: defaultFood,
        },
      ]
    },
    {
      name: 'Seafood Soups',
      items: [
        {
          name: 'Marilaque Seafood Soup',
          price: '399',
          description: 'Light broth with shrimp and squid.',
          tags: ['Comfort Food'],
          src: defaultFood,
        },
        {
          name: 'Coconut Crab Soup',
          price: '499',
          description: 'Crab in creamy coconut broth.',
          tags: ['Popular'],
          src: defaultFood,
        },
      ]
    },
    {
      name: 'Seafood Platters',
      items: [
        {
          name: 'Mountain Feast Platter',
          price: '1499',
          description: 'Seafood platter with a mountain view experience.',
          tags: ['Sharing'],
          src: defaultFood,
        },
        {
          name: 'Grilled Seafood Platter',
          price: '1599',
          description: 'Assorted grilled seafood for sharing.',
          tags: ['Grilled', 'Bestseller'],
          src: defaultFood,
        },
      ]
    },
  ],
  3: [ // Calle Bistro Menu
    {
      name: 'Signature Seafood',
      items: [
        {
          name: 'Calle Bistro Giant Crab',
          price: '999',
          description: 'Extra-large crab in signature sauce.',
          tags: ['Premium', 'Bestseller'],
          src: defaultFood,
        },
        {
          name: 'Butter Garlic Shrimp',
          price: '549',
          description: 'Classic shrimp in butter garlic sauce.',
          tags: ['Classic'],
          src: defaultFood,
        },
      ]
    },
    {
      name: 'Grilled Specials',
      items: [
        {
          name: 'Grilled Salmon',
          price: '899',
          description: 'Salmon fillet grilled to perfection.',
          tags: ['Healthy', 'Bestseller'],
          src: defaultFood,
        },
        {
          name: 'Grilled Oysters',
          price: '599',
          description: 'Oysters grilled with cheese and garlic.',
          tags: ['Premium'],
          src: defaultFood,
        },
      ]
    },
    {
      name: 'Seafood Soups',
      items: [
        {
          name: 'Calle Bistro Chowder',
          price: '399',
          description: 'Creamy seafood chowder with shrimp and scallops.',
          tags: ['Comfort Food'],
          src: defaultFood,
        },
        {
          name: 'Spicy Prawn Soup',
          price: '499',
          description: 'A hot and sour soup with prawns.',
          tags: ['Spicy'],
          src: defaultFood,
        },
      ]
    },
    {
      name: 'Seafood Platters',
      items: [
        {
          name: 'Calle Bistro Feast',
          price: '1599',
          description: 'A seafood platter perfect for sharing.',
          tags: ['Sharing', 'Popular'],
          src: defaultFood,
        },
        {
          name: 'Mixed Seafood Grill',
          price: '1699',
          description: 'A mix of grilled seafood specialties.',
          tags: ['Grilled'],
          src: defaultFood,
        },
      ]
    },
  ],
};
const selectedLocation = ref(1);
const lightboxOpen = ref(false);
const currentImage = ref(null);
const allMenuItems = computed(() => {
  const items = [];
  currentMenu.value.forEach(category => {
    items.push(...category.items);
  });
  return items;
});

// Computed property to get current location's menu
const currentMenu = computed(() => menuData[selectedLocation.value]);

// Lightbox methods
const openLightbox = (item) => {
  currentImage.value = item;
  lightboxOpen.value = true;
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  currentImage.value = null;
};

const nextImage = (e) => {
  e.stopPropagation();
  const items = allMenuItems.value;
  const currentIndex = items.findIndex(item => item.name === currentImage.value.name);
  const nextIndex = (currentIndex + 1) % items.length;
  currentImage.value = items[nextIndex];
};

const previousImage = (e) => {
  e.stopPropagation();
  const items = allMenuItems.value;
  const currentIndex = items.findIndex(item => item.name === currentImage.value.name);
  const previousIndex = (currentIndex - 1 + items.length) % items.length;
  currentImage.value = items[previousIndex];
};
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