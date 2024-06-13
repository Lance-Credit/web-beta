import { defineStore } from 'pinia';

export const useWalletStore = defineStore('wallet', () => 
    {
        const balance: Ref<number> = ref(0);

        const transactions: Ref<Transaction[]> = ref([]);

        const linkedAccount: Ref<Beneficiary | null>  = ref(null);

        async function fetchUserLinkedAccountAndBalance(token: string, apiUrl: string) {
            
            const { data: { value: result }, error } = await useFetch(`${apiUrl}/v1/accounts`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            
            if(result){
                if((result as any).success && !(result as any).error){
    
                    if((result as any).data.hasLinkedAccount){
                        linkedAccount.value = (result as any).data.beneficiary;
                        fetchAccountBalance(token, apiUrl);
                    }else{
                        linkedAccount.value = null;
                    }
                }
            }else if(error){
                linkedAccount.value = null;
                // console.log(error.value?.data);
            }
        }

        async function fetchAccountBalance(token: string, apiUrl: string) {
            
            const { data: { value: result }, error } = await useFetch(`${apiUrl}/v1/wallets`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            
            if(result){
                if((result as any).success && !(result as any).error){
                    balance.value = (result as any).data.balance / 100;
                    transactions.value = (result as any).data.transactions;
                }
            }else if(error){
                balance.value = 0;
                transactions.value = [];
                // console.log(error.value?.data);
            }
        }
        
        return { balance, transactions, fetchAccountBalance, linkedAccount, fetchUserLinkedAccountAndBalance }
    },
    {
        persist: true,
    }
)
