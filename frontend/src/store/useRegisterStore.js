import { defineStore } from "pinia";
import {ref} from 'vue'

export const useRegisterStore = defineStore('register-store', () => {
    const currentIndex = ref(0)

    return {
        currentIndex
    }
})