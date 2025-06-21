import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMcqStore = defineStore('mcqStore', () => {
  const mcqExam = ref({
    examInfo: {},
    questions: [],
    access: null,
    status: false,
  })

  const loading = ref(false)

  async function getMcq(examId) {
    loading.value = true
    try {
      const { data } = await axios.get(`auth/start-mcq-exam/${examId}`)
      mcqExam.value = data
    } catch (error) {
      console.error('Failed to fetch questions:', error)
    } finally {
      loading.value = false
    }
  }

  return {
    mcqExam,
    loading,
    getMcq,
  }
})
