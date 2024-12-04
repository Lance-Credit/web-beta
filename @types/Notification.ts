interface Notification {
    body: string,
    title: string,
    created_at: string
    metadata: {
        reference: string,
        resourceType: string
    }
}