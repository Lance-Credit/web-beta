interface Loan {
    rate: number,
    amount: number,
    status: string,
    tenure: number,
    dueDate: string,
    feeAmount: number,
    reference: string,
    declinedBy: string,
    feeCharged: number,
    adminApproved: boolean,
    nextPaymentDate: string,
    schedule: LoanSchedule[],
    totalInterestAmount: number,
    totalRepaymentAmount: number,
    monthlyRepaymentAmount: number
}

interface LoanSchedule {
    amount: number,
    status: string,
    dueDate: string,
    paid_at: string
}