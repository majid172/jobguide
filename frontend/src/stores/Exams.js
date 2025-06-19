import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useExamStore = defineStore('examStore', () => {
  const exams = ref([]);
const subject = ref(0);
  async function getExams(subject_id)
  {
    try {
      const {data} = await axios.get(`auth/subcategory-to-subjects/${subject_id}`);
      exams.value = data.exams;
      subject.value = data.subject;
    } catch (error) {
      console.error('Failed to fetch exams information:', error)
    }
  }
  return { exams,subject, getExams }
})
