import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
export const useMcqStore = defineStore('mcq', () => {
  const mcqExam = ref(0);
  const questions = ref(0);
  async function getMcq(examId)
  {
    try {
      const {data} = await axios.get(`auth/start-mcq-exam/${examId}`)
      mcqExam.value = data;
    } catch (error) {
      console.error('Failed to fetch questions:', error)
    }
  }


  return {mcqExam, getMcq }
})
