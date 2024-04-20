import { defineStore } from 'pinia';

export const useNextOfKinStore = defineStore('nextOfKin', () => 
    {
        const nextOfKinDetails: Ref<NextOfKinDetails | null> = ref(null);
        
        return { nextOfKinDetails }
    },
    {
        persist: true,
    }
)

interface NextOfKinDetails {
    email: string,
    lastName: string,
    firstName: string,
    phoneNumber: string,
    relationship: string
}