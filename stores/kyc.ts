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
            linkedBankAccount: {
                completed: false
            }
        });

        const bvnNinKycCompleted = computed(() => {
            return kycItems.value.bvn.completed && kycItems.value.nin.completed;
        })

        async function fetchKycStatus(token: string, apiUrl: string) {
            
            const { data: { value: result }, error } = await useFetch(`${apiUrl}/v1/verifications`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            

            if((result as any).success && !(result as any).error){
                // kycItems.value = (result as any).data.balance

            }else if(error){
                console.log(error.value?.data);
            }
        }
        
        return { kycItems, bvnNinKycCompleted, fetchKycStatus }
    },
    {
        persist: true,
    }
)