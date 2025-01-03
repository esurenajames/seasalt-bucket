<template>
    <section class="bg-customOrange relative overflow-hidden opacity-100">
      <div class="container mx-auto px-4 py-24 sm:py-12 md:py-28">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <!-- Text Content -->
          <div class="w-full md:w-1/2 text-white z-10 text-center md:text-left">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Experience the Seafood Boil with us.
            </h1>
            <p class="sm:text-lg md:text-xl mb-6 sm:mb-8 mx-auto md:mx-0">
                Delight your seafood experience with us. Visit our conveniently located branches across Metro Manila or take a scenic trip to our beautiful spot in Marilaque, Tanay, and savor seafood like never before. 
            </p>
            <p class="sm:text-lg md:text-xl mb-6 sm:mb-8 mx-auto md:mx-0">
                Prefer dining at home? Order online via GrabFood
                or our website, and have your favorite seafood dishes delivered straight to your doorstep!
            </p>

            <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center md:justify-start">
              <a href="https://food.grab.com/ph/en/restaurant/seasalt-bucket-le-village-lifestyle-park-delivery/2-C3KTLBLAR74BTX?" class="w-full sm:w-auto text-nowrap bg-gray-100 text-customOrange px-6 sm:px-8 py-3 rounded-lg font-semibold hover:scale-105 hover:bg-white transition duration-300">
                Order Online
              </a>
              <router-link 
                to="/menu"  class="w-full sm:w-auto text-nowrap border-2 border-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 hover:text-customOrange transition duration-300">
                View Menu
              </router-link>
            </div>
          </div>
          <!-- Image Container -->
          <div class="w-full md:w-1/2 mt-8 md:mt-0 relative px-4 sm:px-8 md:px-0">
            <div class="relative">
              <!-- Main image -->
              <img
                src="@/assets/pictures/crab-landing.png"
                alt="Delicious Crab Dish"
                class="w-full h-auto max-w-md mx-auto md:max-w-none transform hover:scale-105 transition duration-300 relative z-10"
              />
              <!-- Yellow decorative circle -->
              <div class="absolute -top-8 -left-8 w-40 h-40 bg-yellow-400 rounded-full opacity-70 z-0"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Radial gradient overlay -->
      <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      <!-- White wave at the bottom -->
      <div class="absolute bottom-0 left-0 w-full h-20 bg-white rounded-t-full"></div>
    </section>
  </template>
  
  <script setup>
  // No additional script needed for this component
  </script>
  
  <style scoped>
  /* Add styles for custom colors */
  .bg-customOrange {
    background-color: #f97316; /* Tailwind Orange 500 */
  }
  </style>
  