<template>
  <nav
    :class="[
      'fixed py-2 top-0 left-0 w-full z-50 transition-colors duration-300',
      isScrolled ? 'bg-white' : 'bg-customOrange',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 px-4 md:px-8">
        <!-- Background -->
        <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        
        <!-- Logo -->
        <div class="flex items-center z-20">
          <router-link to="/">
            <img
              :src="isScrolled ? logoOrange : logoWhite"
              alt="Seasalt Bucket Logo"
              :class="[
                isScrolled ? 'h-12 md:h-16 w-auto' : 'h-12 md:h-16 w-auto',
              ]"
            />
          </router-link>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <template v-for="item in navigationItems" :key="item.path">
            <router-link
              :to="item.path"
              class="font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:transition-all after:duration-300"
              :class="[
                isScrolled
                  ? [
                      isActivePage(item.path)
                        ? 'text-orange-600'
                        : 'text-gray-800 hover:text-orange-600',
                      'after:bg-orange-600'
                    ]
                  : [
                      isActivePage(item.path)
                        ? 'text-white'
                        : 'text-gray-200 hover:text-white',
                      'after:bg-white'
                    ],
                {
                  'after:w-full': isActivePage(item.path),
                  'after:w-0 hover:after:w-full': !isActivePage(item.path)
                }
              ]"
            >
              {{ item.name }}
            </router-link>
          </template>
          <button
            :class="[
              'px-6 py-2 rounded-full font-medium transform transition-all duration-300',
              isScrolled
                ? 'bg-orange-500 text-white hover:bg-orange-600'
                : 'bg-gray-200 text-customOrange hover:bg-white',
            ]"
          >
            Order Now
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden lg:hidden xl:hidden z-40">
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md"
            :class="[
              isScrolled ? 'text-gray-800 hover:text-orange-600' : 'text-gray-200 hover:text-white',
            ]"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              :class="{'hidden': isOpen, 'block': !isOpen }"
              class="h-6 w-6 transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              :class="{'block': isOpen, 'hidden': !isOpen }"
              class="h-6 w-6 transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-show="isOpen"
      :class="[
        'lg:hidden fixed w-full h-screen top-[5rem] border-t shadow-lg transform transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-white border-gray-200' : 'bg-customOrange border-white/10',
      ]"
    >
      <div class="px-4 pt-2 pb-3 space-y-2">
        <template v-for="item in navigationItems" :key="item.path">
          <router-link
            :to="item.path"
            @click="toggleMenu"
            :class="[
              'block px-4 py-3 font-medium rounded-md transition-colors duration-200',
              isScrolled
                ? [
                    isActivePage(item.path)
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-gray-800 hover:text-orange-600 hover:bg-gray-100'
                  ]
                : [
                    isActivePage(item.path)
                      ? 'bg-orange-600/20 text-white'
                      : 'text-gray-200 hover:text-white hover:bg-orange-600/20'
                  ]
            ]"
          >
            {{ item.name }}
          </router-link>
        </template>
        <div class="pt-2">
          <button
            :class="[
              'w-full px-6 py-3 rounded-full font-medium transform transition-all duration-300 focus:outline-none focus:ring-2',
              isScrolled
                ? 'bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-300'
                : 'bg-gray-200 text-customOrange hover:bg-white focus:ring-white',
            ]"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import logoOrange from '../assets/logo/orange-logo.png';
import logoWhite from '../assets/logo/white-logo.png';

const route = useRoute();
const isScrolled = ref(false);
const isOpen = ref(false);

const navigationItems = ref([
  { name: 'Home', path: '/' }, 
  { name: 'Menu', path: '/menu' }, 
  { name: 'About', path: '/about' }, 
  { name: 'Locations', path: '/location' }, 
]);

const isActivePage = (path) => {
  if (path === '/' && route.path === '/') {
    return true;
  }
  return path !== '/' && route.path.startsWith(path);
};

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  document.body.style.overflow = isOpen.value ? 'hidden' : '';
};

const onScroll = () => {
  const homeSection = document.querySelector('#home');
  const homeSectionBottom = homeSection ? homeSection.offsetHeight : 0;
  isScrolled.value = window.scrollY > homeSectionBottom - 80; 
};

onMounted(() => {
  window.addEventListener('scroll', onScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>