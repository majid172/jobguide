<script setup>
import Card from '@/components/Card.vue';
import logo from '@/assets/images/logo.png'
import { useHeaderStore } from "@/stores/header.js";
import { onMounted } from "vue";
import { useSubCategoryStore } from '@/stores/subcategory';
import { useRoute } from 'vue-router';

const headerStore = useHeaderStore();
const subCategoryStore = useSubCategoryStore();
const route = useRoute();

onMounted(() => {
  const cat_id = route.params.id;
  subCategoryStore.getSubCategory(cat_id);
});
</script>
<template>
  <Card>
    <template #heading> Sub-Category</template>

    <div class="text-center col-lg-4 col-md-6 mb-4" v-for="subcategory in subCategoryStore.subCategory" :key="subcategory.id">
      <div class="d-flex align-items-center p-4 rounded" style="background-color: #1e293b; color: #f1f5f9;">
        <img :src="logo" class="rounded-circle me-3" alt="Category Image" width="50" height="50" />
        <div class="text-start">
          <router-link :to="{ name: 'subcategories', params: { id: subcategory.id } }" class="text-decoration-none">
            <h5 class="mb-1 fw-semibold text-light">{{ subcategory.name }}</h5>
            <p class="mb-0 text-muted">
              <i class="bi bi-tags"></i> {{ subcategory.subjects.length }} Sub-Category
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </Card>
</template>
