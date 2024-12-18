const { apiFetch } = useApiFetch();

export const useNotificationsStore = defineStore('notifications', () => 
    {
        const notifications: Ref<Notification[] | []> = ref([]);

        async function fetchNotifications() {
            
            const result = await apiFetch('notifications');
    
            if ((result as any).success && !(result as any).error) {
                notifications.value = result.data;
            } else {
                // console.log((result as any).error);
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