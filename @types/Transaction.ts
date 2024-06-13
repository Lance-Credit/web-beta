interface Transaction {
    "id": number,
    "amount": number,
    "txnType": string,
    "createdAt": string,
    "reference": string,
    "metadata": {
        "description": string,
        "processor": string,
        "processorReference": string
    }
}