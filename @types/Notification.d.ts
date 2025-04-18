interface Notification {
    body: string,
    title: string,
    createdAt: string
    metadata: {
        resourceId: string,
        resourceType: string
    }
}

interface NotificationDetails {
    title: string,
    resourceId: string,
    data: Loan | Transaction | Record<string, any>
}