<template>
  <Navbar />
  <router-view /> <!-- This renders the current page -->
  <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
</style>
