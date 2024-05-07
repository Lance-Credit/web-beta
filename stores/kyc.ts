import { defineStore } from 'pinia';

export const useKYCStore = defineStore('kyc', () => 
    {
        const kycItems = ref({
            account: {
                completed: false
            },
            personalDetails: {
                completed: false
            },
            kyc: {
                completed: false
            },
            id: {
                completed: false
            },
            linkedBankAccount: {
                completed: false
            }
        });

        const kycCompleted = computed(() => {
            return kycItems.value.account.completed && kycItems.value.personalDetails.completed &&
            kycItems.value.kyc.completed && kycItems.value.id.completed &&
            kycItems.value.linkedBankAccount.completed;
        })

        async function fetchKycStatus(token: string, apiUrl: string) {
            
            await fetchUserVerifications(token, apiUrl);
            await fetchUserLinkedAccountVerifications(token, apiUrl);
        }

        async function fetchUserVerifications(token: string, apiUrl: string) {
            
            const { data: { value: result }, error } = await useFetch(`${apiUrl}/v1/verifications`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });            

            if((result as any).success && !(result as any).error){
                if(
                    (result as any).data.phone && (result as any).data.phone.verificationStatus == 'successful' &&
                    (result as any).data.email && (result as any).data.email.verificationStatus == 'successful'
                ){
                    kycItems.value.account.completed = true;
                }else{
                    kycItems.value.account.completed = false;
                }

                if((result as any).data.kyc && (result as any).data.kyc.verificationStatus == 'successful'){
                    kycItems.value.kyc.completed = true;
                }else{
                    kycItems.value.kyc.completed = false;
                }
                
                if((result as any).data.kyc && (result as any).data.kyc.verificationStatus == 'successful'){
                    kycItems.value.id.completed = true;
                    kycItems.value.personalDetails.completed = true;
                }else{
                    kycItems.value.id.completed = false;
                    kycItems.value.personalDetails.completed = false;
                }

            }else if(error){
                // console.log(error.value?.data);
            }
        }

        async function fetchUserLinkedAccountVerifications(token: string, apiUrl: string) {
            
            const { data: { value: result }, error } = await useFetch(`${apiUrl}/v1/payments/accounts`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            

            if((result as any).success && !(result as any).error){
                if((result as any).data.hasLinkedAccount){
                    kycItems.value.linkedBankAccount.completed = true;
                }else{
                    kycItems.value.linkedBankAccount.completed = false;
                }

            }else if(error){
                // console.log(error.value?.data);
            }
        }
        
        return { kycItems, kycCompleted, fetchKycStatus }
    },
    {
        persist: true,
    }
)