interface Transaction {
    id: number,
    amount: number,
    txnType: string,
    subType: string,
    createdAt: string,
    reference: string,
    txnTypeForUi: string,
    metadata: {
        description: string,
        processor: string,
        processorReference: string
    }
}