import { defineStore } from 'pinia';

export const useLoanHistoryStore = defineStore('loanHistory', () => 
    {

        const loanHistory: Ref<Loan[]> = ref([]);

        const activeLoan = computed(() => {
            if(loanHistory.value.length){
                return loanHistory.value.find((loan: Loan)=> loan.status == 'active');
            }
            return null;
        });

        const pendingLoans = computed(() => {
            if(loanHistory.value.length){
                return loanHistory.value.filter((loan: Loan)=> loan.status == 'inactive');
            }
            return null;
        });

        const completedLoans = computed(() => {
            if(loanHistory.value.length){
                return loanHistory.value.filter((loan: Loan)=> loan.status == 'paid');
            }
            return null;
        });

        const percentageLoanPaid = computed(() => {
            const loan: Loan | null = activeLoan.value;
            if(loan){
                return (loan.totalRepayments / loan.amount) * 100;
            }
            return 100;
        });

        async function fetchLoanHistory(token: string, apiURL: string){
            const { data: { value: result }, error } = await useFetch(`${apiURL}/v1/loans?role=borrower`, {
                method: 'GET',
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization" : `Bearer ${token}`
                },
        
            });
    
            if(result){
                if((result as any).success && !(result as any).error){
                    loanHistory.value = (result as any).data.loans;
                }
            }else if(error){
                // console.log(error.value?.data);
            }
        }
        
        return { loanHistory, activeLoan, pendingLoans, completedLoans, percentageLoanPaid, fetchLoanHistory }
    },
    {
        persist: true,
    }
)