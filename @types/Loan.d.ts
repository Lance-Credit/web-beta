interface Loan {
    amount: number,
    active: boolean,
    dueDate: string,
    duration: number,
    totalPaid: number,
    repayments: LoanRepayment[]
}

interface LoanRepayment {
    amount: number,
    date: string
}