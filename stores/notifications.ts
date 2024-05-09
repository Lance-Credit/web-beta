import { defineStore } from 'pinia';

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

        async function fetchNotifications(token: string, apiUrl: string) {
            
            const { data: { value: result }, error } = await useFetch(`${apiUrl}/v1/notifications`, {
                method: 'GET',
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization" : `Bearer ${token}`
                }
            });
    
            if(result){
                if((result as any).success && !(result as any).error){
                    console.log((result as any).data.notifications);
                    // notifications.value = result.data.notifications;
                }
            }else if(error){
                console.log(error.value?.data);
            }
        }
        
        return { notifications, fetchNotifications }
    },
    {
        persist: true,
    }
)