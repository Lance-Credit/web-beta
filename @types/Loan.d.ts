interface Loan {
    amount: number,
    totalPaid: number,
    repayments: LoanRepayment[]
}

interface LoanRepayment {
    amount: number,
    date: string
}