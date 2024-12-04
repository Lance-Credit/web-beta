const { apiFetch } = useApiFetch();

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

        const declinedLoans = computed(() => {
            if(loanHistory.value.length){
                return loanHistory.value.filter((loan: Loan)=> loan.status == 'declined');
            }
            return null;
        });

        const completedLoans = computed(() => {
            if(loanHistory.value.length){
                return loanHistory.value.filter((loan: Loan)=> loan.status == 'paid');
            }
            return null;
        });

        const activeLoanTotalPaid = computed(() => {
            return activeLoan.value
                ? (activeLoan.value.repayments).reduce((total, repayment): number => total + repayment.amount, 0)
                : 0;
        });

        const percentageLoanPaid = computed(() => {
            const loan: Loan | null | undefined = activeLoan.value;
            if(loan){
                return (activeLoanTotalPaid.value / loan.totalRepaymentAmount) * 100;
            }
            return 100;
        });

        async function fetchLoanHistory(){
            const result = await apiFetch('loans?role=borrower');
    
            if ((result as any).success && !(result as any).error) {
                loanHistory.value = (result as any).data;
                loanHistory.value = (result as any).data.map((loan: Loan) => {
                    loan.amount = loan.amount / 100;
                    loan.totalRepaymentAmount = loan.totalRepaymentAmount / 100;
                    loan.monthlyPaymentAmount = loan.monthlyPaymentAmount / 100;

                    const repayments = loan.repayments.map((repayment) => {
                        repayment.amount = repayment.amount / 100;
                        return repayment;
                    });
                    
                    loan.repayments = repayments;
                    
                    return loan;
                });
            } else {
                // console.log((result as any).error);
            }
        }

        function $reset() {
            loanHistory.value = []
        }
        
        return {
            $reset,
            activeLoan,
            loanHistory,
            pendingLoans,
            declinedLoans,
            completedLoans,
            fetchLoanHistory,
            percentageLoanPaid,
            activeLoanTotalPaid
        }
    },
    {
        persist: true,
    }
)