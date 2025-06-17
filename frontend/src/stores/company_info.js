import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useCompanyInfoStore = defineStore('companyInfoStore', () => {
  const companyInfo = ref(0);

  async function getCompanyInfo()
  {
    try {
      const {data} = await axios.get('company-info')
      companyInfo.value = data;
    } catch (error) {
      console.error('Failed to fetch about information:', error)
    }
  }
  return { companyInfo, getCompanyInfo }
})
