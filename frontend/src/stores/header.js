import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
export const useHeaderStore = defineStore('header', () => {
  const categories = ref(0);
  const course = ref(0)

  async function getCategory()
  {
    try {
      const {data} = await axios.get('categories')
      categories.value = data;
    } catch (error) {
      console.error('Failed to fetch categories:', error)
    }
  }

  async function getCourse() {
    try{
      const {data} = await axios.get('courses')
      course.value = data;
    } catch (error) {
      console.error('Failed to fetch categories:', error)
    }
  }


  return {categories,course, getCategory, getCourse }
})
