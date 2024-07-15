export const useWalletStore = defineStore('wallet', () => 
    {
        const balance: Ref<number> = ref(0);

        const transactions: Ref<Transaction[]> = ref([]);

        const hasDirectDebit: Ref<boolean>  = ref(false);
        
        const linkedAccount: Ref<Beneficiary | null>  = ref(null);

        async function fetchUserLinkedAccountAndBalance(token: string, apiUrl: string) {
            const result = await $fetch(`${apiUrl}/v1/accounts`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            
            if ((result as any).success && !(result as any).error) {
                if((result as any).data.hasLinkedAccount){
                    linkedAccount.value = (result as any).data.beneficiary;
                    hasDirectDebit.value = (result as any).hasDirectDebit
                    fetchAccountBalance(token, apiUrl);
                }else{
                    linkedAccount.value = null;
                }
            } else {
                linkedAccount.value = null;
                // console.log((result as any).error);
            }
        }

        async function fetchAccountBalance(token: string, apiUrl: string) {
            const result = await $fetch(`${apiUrl}/v1/wallets`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            if ((result as any).success && !(result as any).error) {
                balance.value = (result as any).data.balance / 100;
                transactions.value = (result as any).data.transactions;
            } else {
                balance.value = 0;
                transactions.value = [];
            }
        }

        function $reset() {
            balance.value = 0;
            transactions.value = [];
            hasDirectDebit.value = false;
            linkedAccount.value = null;
        }
        
        return { balance, hasDirectDebit, transactions, fetchAccountBalance, linkedAccount, fetchUserLinkedAccountAndBalance, $reset }
    },
    {
        persist: {
            storage: persistedState.localStorage,
          },
    }
)
