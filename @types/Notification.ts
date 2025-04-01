interface Notification {
    body: string,
    title: string,
    createdAt: string
    metadata: {
        reference: string,
        resourceType: string
    }
}