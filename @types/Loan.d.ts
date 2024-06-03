interface Loan {
    rate: number,
    amount: number,
    status: string,
    tenure: number,
    dueDate: string,
    totalRepayments: number,
    repayments: LoanRepayment[],
    totalRepaymentAmount: number,
    monthlyPaymentAmount: number,
}

interface LoanRepayment {
    amount: number,
    date: string
}