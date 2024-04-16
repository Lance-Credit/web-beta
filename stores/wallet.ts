import { defineStore } from 'pinia';

export const useWalletStore = defineStore('wallet', () => 
    {
        const balance: Ref<number> = ref(0);

        async function fetchWalletBalance(token: string, apiUrl: string) {
            
            const { data: { value: result }, error } = await useFetch(`${apiUrl}/v1/payments/accounts`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            

            if((result as any).success && !(result as any).error){
                balance.value = (result as any).data.balance

            }else if(error){
                // console.log(error.value?.data);
            }
        }
        
        return { balance, fetchWalletBalance }
    },
    {
        persist: true,
    }
)