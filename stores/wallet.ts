const { apiFetch } = useApiFetch();

export const useWalletStore = defineStore('wallet', () => 
    {
        const balance: Ref<number> = ref(0);

        const transactions: Ref<Transaction[]> = ref([]);

        const hasDirectDebit: Ref<boolean>  = ref(false);
        
        const linkedAccount: Ref<Beneficiary | null>  = ref(null);

        async function fetchUserLinkedAccountAndBalance() {
            const result = await apiFetch('accounts');
            
            if ((result as any).success && !(result as any).error) {
                if((result as any).data.hasLinkedAccount){
                    linkedAccount.value = (result as any).data.beneficiary;
                    hasDirectDebit.value = (result as any).hasDirectDebit
                    fetchAccountBalance();
                }else{
                    linkedAccount.value = null;
                    hasDirectDebit.value = false;
                    balance.value = 0;
                    transactions.value = [];
                }
            } else {
                linkedAccount.value = null;
                hasDirectDebit.value = false;
                balance.value = 0;
                transactions.value = [];
                // console.log((result as any).error);
            }
        }

        async function fetchAccountBalance() {
            const result = await apiFetch('wallets');

            if ((result as any).success && !(result as any).error) {
                balance.value = (result as any).data.balance / 100;

                const transactionArray = (result as any).data.transactions.map((transaction: Transaction) => {
                    switch (transaction.subType) {
                        case 'wallet_funding':
                            transaction.txnTypeForUi = 'Wallet Top-Up'
                            break;
                        case 'wallet_withdrawal':
                            transaction.txnTypeForUi = 'Wallet Withdrawal'
                            break;
                        case 'fees':
                            transaction.txnTypeForUi = 'Fees'
                            break;
                        case 'loan_disbursement':
                            transaction.txnTypeForUi = 'Loan Disbursement'
                            break;
                        case 'loan_repayment':
                            transaction.txnTypeForUi = 'Loan Repayment'
                            break;
                        default:
                            transaction.txnTypeForUi = 'Transaction'
                            break;
                    }

                    return transaction;
                })
                transactions.value = transactionArray;
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
        persist: true,
    }
)
