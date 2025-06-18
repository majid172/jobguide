<template>
  <!--About us start  -->
  <section id="about-us">
    <div class="container">
      <div class="row py-lg-5">
        <h2 class="text-capitalize text-center m-0 py-lg-5">Popular Categories</h2>

        <!-- Card 1 -->
        <div class="text-center col-lg-4 col-md-6 mb-4" v-for="category in headerStore.categories">
          <div class="d-flex align-items-center p-4 rounded" style="background-color: #1e293b; color: #f1f5f9;">

              <img :src="`/src/assets/${category.image}`" class="rounded-circle me-3" alt="Category Image" width="50" height="50">
              <div class="text-start">
              <router-link :to="{ name: 'subcategories', params: { id: category.id } }">
                <h5 class="mb-1 fw-semibold text-light">{{ category.name }}</h5>
                <p class="mb-0 text-muted"><i class="bi bi-tags"></i> {{ category.subcategory.length }}
                  Sub-Category</p>
                  </router-link>
              </div>

          </div>
        </div>




      </div>
    </div>
  </section>


</template>
<script setup>
import logo from '@/assets/images/logo.png'
import { useHeaderStore } from "@/stores/header.js";
import { onMounted } from "vue";
const headerStore = useHeaderStore();
onMounted(() => {
  headerStore.getCategory();

});
</script>
