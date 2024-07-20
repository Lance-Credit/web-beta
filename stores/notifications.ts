const { apiFetch } = useApiFetch();

export const useNotificationsStore = defineStore('notifications', () => 
    {
        const notifications = ref([
            {
                date: 'Today',
                read: false,
                title: 'Your Loan request was accepted',
                time: '11:39 AM',
                summary: 'Your loan request has been reviewed. View details of you offer now.',
                approved: true,
                loan: {
                    loanAmount: 500000,
                    loanDuration: 6
                }
            },
            {
                date: 'Today',
                read: false,
                title: 'Your Loan request was not approved',
                time: '11:39 AM',
                summary: 'Your loan request has been reviewed. View details of you offer now.',
                approved: false,
                loan: {
                    loanAmount: 500000,
                    loanDuration: 7
                }
            }
        ]);

        async function fetchNotifications() {
            
            const result = await apiFetch('notifications');
    
            if ((result as any).success && !(result as any).error) {
                console.log((result as any).data.notifications);
                // notifications.value = result.data.notifications;
            } else {
                console.log((result as any).error);
            }
        }

        function $reset() {
            notifications.value = []
        }
        
        return { notifications, fetchNotifications, $reset }
    },
    {
        persist: true,
    }
)