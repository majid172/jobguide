<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Header from '@/components/Header.vue'
import router from './router';
</script>

<template>
  <Header/>

  <RouterView />
</template>
