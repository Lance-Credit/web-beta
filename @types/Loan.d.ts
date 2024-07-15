interface Loan {
    rate: number,
    amount: number,
    status: string,
    tenure: number,
    dueDate: string,
    reference: string,
    nextPaymentDate: string,
    totalRepayments: number,
    repayments: LoanRepayment[],
    totalRepaymentAmount: number,
    monthlyPaymentAmount: number,
}

interface LoanRepayment {
    amount: number,
    paid_at: string
}