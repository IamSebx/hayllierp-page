<script setup lang="ts">
import Navbar from './components/layout/navbar.vue'
import Footer from './components/layout/footer.vue'
</script>

<template>
  <Navbar />
  
  <router-view /> 
  
  <Footer />
</template>