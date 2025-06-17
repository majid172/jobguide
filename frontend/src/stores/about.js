import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useAboutStore = defineStore('aboutStore', () => {
  const about = ref(0);

  async function getAbout()
  {
    try {
      const {data} = await axios.get('about')
      about.value = data;
    } catch (error) {
      console.error('Failed to fetch about information:', error)
    }
  }
  return { about, getAbout }
})
