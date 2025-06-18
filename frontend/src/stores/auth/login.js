import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

export const useLoginStore = defineStore('loginStore', () => {
    const inputField = ref({
        email: '',
        password: ''
    })

    // ✅ Set default shape for credentials
    const credentials = ref({
        user: null,
        token: null
    })

    // ✅ Initialization flag
    const isInitialized = ref(false)

    async function login() {
        try {
            const { data } = await axios.post('auth/login', inputField.value)
            credentials.value.user = data.user
            credentials.value.token = data.access_token

            localStorage.setItem('token', data.access_token)
            localStorage.setItem('user', JSON.stringify(data.user))

            axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`

            router.push('/dashboard')
        } catch (error) {
            console.error('Login failed:', error)
        }
    }

    function loadUserFromStorage() {
        const user = localStorage.getItem('user')
        const token = localStorage.getItem('token')

        if (user && token) {
            credentials.value.user = JSON.parse(user)
            credentials.value.token = token
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }

        isInitialized.value = true // ✅ Mark done
    }

    function logout() {
        credentials.value.user = null
        credentials.value.token = null
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        router.push('/')
    }

    return {
        inputField,
        credentials,
        isInitialized,
        login,
        logout,
        loadUserFromStorage
    }
})
