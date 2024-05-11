import { defineStore } from 'pinia';

export const useWalletStore = defineStore('wallet', () => 
    {
        const balance: Ref<number> = ref(0);

        const linkedAccount: Ref<Beneficiary | null>  = ref(null);

        async function fetchUserLinkedAccountAndBalance(token: string, apiUrl: string) {
            
            const { data: { value: result }, error } = await useFetch(`${apiUrl}/v1/payments/accounts`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            
            if(result){
                if((result as any).success && !(result as any).error){
                    
                    balance.value = (result as any).data.balance
    
                    if((result as any).data.hasLinkedAccount){
                        linkedAccount.value = (result as any).data.beneficiary;
                    }else{
                        linkedAccount.value = null;
                    }
                }
            }else if(error){
                // console.log(error.value?.data);
            }
        }
        
        return { balance, linkedAccount, fetchUserLinkedAccountAndBalance }
    },
    {
        persist: true,
    }
)
