<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue';
import router from './router';
</script>

<template>
  <Header/>
  <RouterView />
  <Footer/>
</template>
