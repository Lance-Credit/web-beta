import { defineStore } from 'pinia';

export const useKYCStore = defineStore('kyc', () => 
    {
        const kycItems = ref({
            email: {
                completed: false
            },
            personalDetails: {
                completed: false
            },
            bvn: {
                completed: false
            },
            nin: {
                completed: false
            },
            id: {
                completed: false
            },
            bankAccount: {
                completed: false
            }
        });

        const bvnNinKycCompleted = computed(() => {
            return kycItems.value.bvn.completed && kycItems.value.nin.completed;
        })
        
        return { kycItems, bvnNinKycCompleted }
    },
    {
        persist: true,
    }
)