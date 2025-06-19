import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useSubCategoryStore = defineStore('subCategoryStore', () => {
  const subCategory = ref([]);
  const category = ref(0);
  async function getSubCategory(cat_id)
  {
    try {
      const {data} = await axios.get(`auth/subcategories/${cat_id}`);
      subCategory.value = data.subcategory;
      category.value = data.category;
    } catch (error) {
      console.error('Failed to fetch about information:', error)
    }
  }
  return { subCategory,category, getSubCategory }
})
