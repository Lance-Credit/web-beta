interface Notification {
    id: number,
    body: string,
    title: string,
    readAt: string,
    createdAt: string,
    metadata: {
        reference: string,
        operation: string,
        resourceId: string,
        resourceType: string
    }
}

interface NotificationDetails {
    title: string,
    resourceId: string,
    data: Record<string, any>
}