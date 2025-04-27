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
    declinedReason: string,
    nextPaymentDate: string,
    schedule: LoanSchedule[],
    totalInterestAmount: number,
    totalRepaymentAmount: number,
    monthlyRepaymentAmount: number
}

interface LoanSchedule {
    amount: number,
    status: string,
    paidAt: string,
    dueDate: string,
}