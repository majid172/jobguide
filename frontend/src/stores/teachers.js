import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useTeacherStore = defineStore('teacherStore', () => {
  const teachers = ref(0);

  async function getTeacher()
  {
    try {
      const {data} = await axios.get('teachers')
      teachers.value = data;
    } catch (error) {
      console.error('Failed to fetch categories:', error)
    }
  }
  return { teachers, getTeacher }
})
