import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useExamStore = defineStore('examStore', () => {
  const mcqexams = ref([]);
  const writtenexams = ref([]);
const subject = ref(0);
  async function getExams(subject_id)
  {
    try {
      const {data} = await axios.get(`auth/subject-to-exams/${subject_id}`);
      mcqexams.value = data.mcqexams;
      writtenexams.value = data.writtenexams;
      subject.value = data.subject;
    } catch (error) {
      console.error('Failed to fetch exams information:', error)
    }
  }
  return { mcqexams,writtenexams,subject, getExams }
})
