import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useBookStore = defineStore('bookStore', () => {
  const books = ref(0);

  async function getBooks()
  {
    try {
      const {data} = await axios.get('books')
      books.value = data;
    } catch (error) {
      console.error('Failed to fetch books information:', error)
    }
  }
  return { books, getBooks }
})
