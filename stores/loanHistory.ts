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

        const approvedLoan = computed(() => {
            if(loanHistory.value.length){
                return loanHistory.value.filter((loan: Loan) => loan.adminApproved && loan.status == 'inactive');
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
                ? (activeLoan.value.schedule).reduce((total, repayment): number => total + repayment.amount, 0)
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
                loanHistory.value = (result as any).data.map((loan: Loan) => {
                    loan.amount = loan.amount / 100;
                    loan.totalRepaymentAmount = loan.totalRepaymentAmount / 100;
                    loan.monthlyRepaymentAmount = loan.monthlyRepaymentAmount / 100;

                    const schedules = loan.schedule.map((schedule) => {
                        schedule.amount = schedule.amount / 100;
                        return schedule;
                    });
                    
                    loan.schedule = schedules;
                    
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
            approvedLoan,
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