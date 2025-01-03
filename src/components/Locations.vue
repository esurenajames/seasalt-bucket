<template>
  <div class="bg-gray-50 py-16">
    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-16 pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span class="text-customOrange">Locations</span>
          </h1>
          <div class="w-32 h-1 bg-customOrange mx-auto mb-8 transform origin-center transition-transform duration-500 hover:scale-x-110"></div>
          <p class="text-xl text-gray-600 leading-relaxed">
            Find your nearest SeaSalt Bucket restaurant and come experience our delicious seafood dishes.
          </p>
        </div>
      </div>
    </section>

    <!-- Location Selector -->
    <section class="pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            v-for="(location, index) in locations" 
            :key="index"
            @click="activeLocationIndex = index"
            :class="[
              'px-6 py-3 rounded-full font-medium transition-all duration-300',
              activeLocationIndex === index 
                ? 'bg-customOrange text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
            ]"
          >
            {{ location.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Map and Details Section -->
    <section class="pb-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Map Container -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden h-[500px]">
            <iframe
              :src="activeLocation.mapUrl"
              class="w-full h-full"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <!-- Location Details -->
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-12">{{ activeLocation.name }}</h2>

            <!-- Address -->
            <div class="flex items-start mb-8">
              <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg class="w-5 h-5 text-customOrange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                <p class="text-gray-600">{{ activeLocation.address }}</p>
              </div>
            </div>

            <!-- Operating Hours -->
            <div class="flex items-start mb-8">
              <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg class="w-5 h-5 text-customOrange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Operating Hours</h3>
                <div class="space-y-2">
                  <div v-for="(hours, day) in activeLocation.hours" :key="day" 
                       class="flex justify-stretch text-gray-600">
                    <span class="font-medium mr-2">{{ day }}</span>
                    <span class="">{{ hours }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Landmarks -->
            <div class="flex items-start">
              <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg class="w-5 h-5 text-customOrange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Nearby Landmarks</h3>
                <ul class="space-y-2">
                  <li v-for="(landmark, index) in activeLocation.landmarks" :key="index" 
                      class="flex items-center text-gray-600">
                    <span class="w-2 h-2 bg-customOrange rounded-full mr-2"></span>
                    {{ landmark }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
  selectedLocation: {
    type: Number,
    default: 0
  }
})

const router = useRouter()
const route = useRoute()

const activeLocationIndex = ref(props.selectedLocation)

const locations = ref([
  {
    name: 'Seasalt Bucket - Le Village',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.6595457212684!2d121.00501067510655!3d14.618460185869989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b1e189d95a11%3A0x615e3f7aaa496e00!2sSeasalt%20Bucket-%20Le%20Village%20Lifestyle%20Park!5e0!3m2!1sen!2sph!4v1735890586419!5m2!1sen!2sph',
    address: 'Le Village Lifestyle Park Cordillera, cor E Rodriguez Sr. Ave, Quezon City',
    hours: {
      'Monday - Saturday': '11:00 AM - 10:00 PM',
      'Sunday': '11:00 AM - 11:00 PM'
    },
    landmarks: [
      'In front of Robinson Easymart',
      'Inside the Le Village Foodpark',
      'Besides E Rodriguez Sr. Avenue'
    ]
  },
  {
    name: 'Seasalt Bucket - Marilaque',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.1805755015635!2d121.35291679999999!3d14.588784099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397956a91887881%3A0x86549830941b9f07!2sSeasalt%20Bucket-%20Marilaque%20Tanay!5e0!3m2!1sen!2sph!4v1735890863118!5m2!1sen!2sph',
    address: 'Barangay, KM 55 Cuyambay Crossing Marikina-Infanta Hwy, Tanay Rizal',
    hours: {
      'Monday - Saturday': '11:00 AM - 10:00 PM',
      'Sunday': '11:00 AM - 11:00 PM'
    },
    landmarks: [
      'In front of Pico De Pinio Restaurant',
      '1 floor below Kamala Café',
      'Near Midoriyama Ramen Bistro'
    ]
  },
  {
    name: 'Seasalt Bucket - Calle Bistro',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.6187227676573!2d121.0828324251076!3d14.677566185817938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b92082c87813%3A0xf9a7adb0414b0818!2sMesa%20-%20Calle%20Bistro!5e0!3m2!1sen!2sph!4v1735891777103!5m2!1sen!2sph',
    address: 'Unit 11, Ground Floor, Ever Commonwealth Center, Don Antonio Dr, Quezon City',
    hours: {
      'Monday - Saturday': '11:00 AM - 10:00 PM',
      'Sunday': '11:00 AM - 9:00 PM'
    },
    landmarks: [
      'Beside Samgyup Salamat',
      '5 mins walk from The Residence Commomweatlh',
      'in front of Starbucks Don Antonio'
    ]
  }
])

const activeLocation = computed(() => locations.value[activeLocationIndex.value])

// Update URL when activeLocationIndex changes
watch(activeLocationIndex, (newIndex) => {
  router.replace({
    query: { 
      ...route.query,
      selected: newIndex 
    }
  })
})

// Set active location from URL on mount
onMounted(() => {
  const selectedLocation = route.query.selected
  if (selectedLocation !== undefined) {
    activeLocationIndex.value = parseInt(selectedLocation)
  }
})
</script>