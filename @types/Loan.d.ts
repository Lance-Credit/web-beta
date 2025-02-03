interface Loan {
    rate: number,
    amount: number,
    status: string,
    tenure: number,
    dueDate: string,
    feeAmount: number,
    reference: string,
    feeCharged: number,
    adminApproved: boolean,
    nextPaymentDate: string,
    totalRepayments: number,
    repayments: LoanRepayment[],
    totalInterestAmount: number,
    totalRepaymentAmount: number,
    monthlyPaymentAmount: number,
}

interface LoanRepayment {
    amount: number,
    paid_at: string
}