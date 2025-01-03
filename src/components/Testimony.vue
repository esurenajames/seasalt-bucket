<template>
    <section class="bg-white py-16 md:py-16 relative overflow-hidden">
        <!-- Background Decorative Elements -->
        <div class="absolute top-40 left-0 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div class="absolute bottom-40 right-0 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <!-- Section Header -->
        <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Guests Say
            </h2>
            <div class="w-32 h-1 bg-customOrange mx-auto mb-8 transform origin-center transition-transform duration-500 hover:scale-x-110"></div>
            <p class="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
            Hear from our valued customers about their dining experience with us
            </p>
        </div>

        <!-- Testimonials Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Testimonial Card (repeated for each review) -->
            <div v-for="review in reviews" :key="review.name" class="bg-gray-50 rounded-2xl shadow-md p-8 relative hover:shadow-xl transition-shadow duration-300">
            <div class="absolute -top-4 left-8">
                <span class="text-8xl text-customOrange">"</span>
            </div>
            <div class="relative">
                <div class="flex items-center mb-4">
                <img :src="review.image" :alt="review.name" class="w-16 h-16 rounded-full object-cover" />
                <div class="ml-4">
                    <h3 class="font-semibold text-gray-900">{{ review.name }}</h3>
                    <div class="flex items-center mt-1">
                    <div class="flex text-yellow-400">
                        <svg v-for="star in review.rating" :key="star" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                    </div>
                    </div>
                </div>
                </div>
                <p class="text-gray-600 leading-relaxed">
                "{{ review.comment }}"
                </p>
            </div>
            </div>
        </div>
        </div>
    </section>
</template>
  
<script setup>
const reviews = [
{
    name: 'Sarah Johnson',
    comment: 'The seafood here is absolutely amazing! The crab was so fresh and perfectly seasoned. The service was impeccable, and the atmosphere made our evening truly special.',
    rating: 5,
    image: 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg' 
},
{
    name: 'Michael Chen',
    comment: 'Best seafood restaurant in town! Their lobster is to die for, and the staff really knows how to make you feel welcome. Will definitely be coming back!',
    rating: 5,
    image: 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg' 
},
{
    name: 'Emily Rodriguez',
    comment: 'The seafood platter was incredible! Perfect for sharing with friends. The ambiance is wonderful, and the cocktails are a must-try. Highly recommend!',
    rating: 5,
    image: 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg' 
}
]
</script>