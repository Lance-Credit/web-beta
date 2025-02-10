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
    repayments: LoanRepayment[],
    totalInterestAmount: number,
    totalRepaymentAmount: number,
    monthlyRepaymentAmount: number
}

interface LoanRepayment {
    amount: number,
    paid_at: string
}