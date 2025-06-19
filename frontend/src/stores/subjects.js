import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useSubjectStore = defineStore('subjectStore', () => {
  const subjects = ref([]);
    const subcategory = ref(0);
  async function getSubject(sub_cat_id)
  {
    try {
      const {data} = await axios.get(`auth/subcategory-to-subjects/${sub_cat_id}`);
      subjects.value = data.subjects;
      subcategory.value = data.subcategory;
    } catch (error) {
      console.error('Failed to fetch about information:', error)
    }
  }
  return { subjects,subcategory, getSubject }
})
