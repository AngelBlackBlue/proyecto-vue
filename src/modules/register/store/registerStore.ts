import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRegisterStore = defineStore('register', () => {
    const name = ref('')
    const email = ref('')
    const saveRegister = (nameForm: string, emailForm: string) => {
        name.value = nameForm;
        email.value = emailForm;        
    }
    return {
        name,
        email,
        saveRegister
    }
})

