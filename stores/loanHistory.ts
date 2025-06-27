const { apiFetch } = useApiFetch();

export const useLoanHistoryStore = defineStore('loanHistory', () => 
    {

        const loanHistory: Ref<Loan[]> = ref([]);

        const loanSettings: Ref<{
            "minRate": number,
            "maxRate": number,
            "defaultRate": number,
            "minDuration": number,
            "maxDuration": number,
            "processingFee": number
        } | null> = ref(null);

        const ongoingLoanRepayment: Ref<boolean> = ref(false);
        
        const ongoingLoanRequest: Ref<null | {amount: number, duration: number}> = ref(null);

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

        const mobileCompletedLoans = computed(() => {
            if(loanHistory.value.length){
                return loanHistory.value.filter((loan: Loan)=> loan.status != 'inactive');
            }
            return null;
        });

        const pendingLoans = computed(() => {
            if(loanHistory.value.length){
                return loanHistory.value.filter((loan: Loan)=> (loan.status == 'inactive'));
            }
            return null;
        });

        const activeLoanTotalPaid = computed(() => {
            return activeLoan.value
                ? (activeLoan.value.schedule).reduce((total, repayment): number => {
                    return total + repayment.paidAmount;
                }, 0)
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
            fetchLoanSettings();

            const result = await apiFetch('loans?role=borrower');
    
            if ((result as any).success && !(result as any).error) {
                loanHistory.value = (result as any).data.map((loan: Loan) => {
                    loan.amount = loan.amount / 100;
                    loan.totalRepaymentAmount = loan.totalRepaymentAmount / 100;
                    loan.monthlyRepaymentAmount = loan.monthlyRepaymentAmount / 100;

                    const schedules = loan.schedule.map((schedule) => {
                        schedule.amount = schedule.amount / 100;
                        schedule.paidAmount = schedule.paidAmount / 100;
                        schedule.remainingAmount = schedule.remainingAmount / 100;
                        return schedule;
                    });
                    
                    loan.schedule = schedules;
                    
                    return loan;
                });
            } else {
                // console.log((result as any).error);
            }
        }

        async function fetchLoanSettings() {
            const result = await apiFetch('loans/settings');
    
            if ((result as any).success && !(result as any).error) {
                loanSettings.value = (result as any).data;
            } else {
                // console.log(error.value?.data);
                loanSettings.value = null;
            }
        }

        function $reset() {
            loanHistory.value = [];
            ongoingLoanRequest.value = null;
            ongoingLoanRepayment.value = false;
        }
        
        return {
            $reset,
            activeLoan,
            loanHistory,
            loanSettings,
            approvedLoan,
            pendingLoans,
            declinedLoans,
            completedLoans,
            fetchLoanHistory,
            ongoingLoanRequest,
            percentageLoanPaid,
            activeLoanTotalPaid,
            ongoingLoanRepayment,
            mobileCompletedLoans
        }
    },
    {
        persist: true,
    }
)