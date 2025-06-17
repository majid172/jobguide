import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const usePrivacyStore = defineStore('privacyStore', () => {
  const privacy = ref(0);

  async function getPrivacy()
  {
    try {
      const {data} = await axios.get('privacy-policy')
      privacy.value = data;
    } catch (error) {
      console.error('Failed to fetch privacy information:', error)
    }
  }
  return { privacy, getPrivacy }
})
