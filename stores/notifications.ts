const { apiFetch } = useApiFetch();

export const useNotificationsStore = defineStore('notifications', () => 
    {
        const notifications: Ref<Notification[] | []> = ref([]);
        const notificationDetailsCache: Ref<NotificationDetails[] | []> = ref([]);

        const unreadNotificationExists = computed(() => {
            if(notifications.value) {
                return notifications.value.find((notification: Notification) => !notification.readAt);
            }
            return false;
        });

        async function fetchNotifications() {
            
            const result = await apiFetch('notifications');
    
            if ((result as any).success && !(result as any).error) {
                notifications.value = result.data.notifications;
            } else {
                // console.log((result as any).error);
            }
        }

        function $reset() {
            notifications.value = [];
            notificationDetailsCache.value = [];
        }
        
        return { notifications,unreadNotificationExists, notificationDetailsCache, fetchNotifications, $reset }
    },
    {
        persist: true,
    }
)