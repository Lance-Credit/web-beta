<template>
    <div>
        <div>
            <div class="mb-[30px] flex items-center justify-between">
                <p class="text-lance-black text-xl leading-[26px] font-medium tracking-[-0.2px]">Notifications</p>
                <p v-if="unreadNotificationExists" @click="markNotificationsAsRead(notifications)" class="text-[#1E1721] text-sm cursor-pointer">Mark all as read</p>
            </div>
            <ul class="flex flex-col gap-2 sm:gap-6">
                <li
                    v-for="(notification, key) in notifications" :key="key"
                    class="p-4 sm:p-6 pr-2 sm:pr-10 rounded-xl bg-white border border-solid border-[rgba(3,87,238,0.10)]"
                >
                    <p class="mb-6 text-[#656167] font-medium">{{ new Date(notification.createdAt).toLocaleDateString('en-GB', { day:"numeric", month:"short", year:"numeric" }) }}</p>
                    <div class="flex items-center gap-2 sm:gap-4">
                        <div v-if="!notification.readAt || notification.readAt == '0000-01-01T00:00:00.000Z'" class="w-2.5 h-2.5 shrink-0 rounded-full bg-[#E70A3F]"></div>
                        <div @click="showNotification(notification)" class="flex items-center justify-between cursor-pointer grow">
                            <div>
                                <p class="mb-1 text-lance-black font-medium">{{ notification.title }}
                                    <span class="font-normal text-lance-black-60">| {{ new Date(notification.createdAt).toLocaleTimeString('en-US') }}</span>
                                </p>
                                <p class="text-lance-black-60">{{ notification.body }}</p>
                            </div>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.96967 20.2803C7.7034 20.0141 7.6792 19.5974 7.89705 19.3038L7.96967 19.2197L14.439 12.75L7.96967 6.28033C7.7034 6.01406 7.6792 5.5974 7.89705 5.30379L7.96967 5.21967C8.23594 4.9534 8.6526 4.9292 8.94621 5.14705L9.03033 5.21967L16.0303 12.2197C16.2966 12.4859 16.3208 12.9026 16.1029 13.1962L16.0303 13.2803L9.03033 20.2803C8.73744 20.5732 8.26256 20.5732 7.96967 20.2803Z" fill="black"/>
                            </svg>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <Notifications-LoanDetailsModal @@close-modal="showSelectedLoanDetails = false; markFetchedNotificationDetailsAsRead(fetchedNotificationDetails?.id)" v-show="showSelectedLoanDetails" :notificationData="fetchedNotificationDetails" />
        <Notifications-LoanOfferView v-if="approvedLoan" @@close-modal="showLoanOfferView = false; markFetchedNotificationDetailsAsRead(fetchedNotificationDetails?.id)" v-show="showLoanOfferView" :notificationData="fetchedNotificationDetails" />

        <Notifications-LoanRepaymentDetailsModal @@close-modal="showSelectedRepaymentDetails = false; markFetchedNotificationDetailsAsRead(fetchedRepaymentNotificationDetails?.id)" v-show="showSelectedRepaymentDetails" :notificationData="fetchedRepaymentNotificationDetails" />
        <Notifications-TransactionDetailsModal @@close-modal="showSelectedTransactionDetails = false; markFetchedNotificationDetailsAsRead(fetchedTransactionNotificationDetails?.id)" v-show="showSelectedTransactionDetails" :notificationData="fetchedTransactionNotificationDetails" />
        <Notifications-LoanDisbursementDetailsModal @@close-modal="showSelectedLoanDisbursementDetails = false; markFetchedNotificationDetailsAsRead(fetchedDisbursementNotificationDetails?.id)" v-show="showSelectedLoanDisbursementDetails" :notificationData="fetchedDisbursementNotificationDetails" />
    </div>
</template>

<script setup lang="ts">

    import { useNotificationsStore } from '@/stores/notifications';

    definePageMeta({
        middleware: 'auth',
        layout: 'dashboard'
    });
    
    const { fetchNotifications } = useNotificationsStore();
    const { notifications, notificationDetailsCache, unreadNotificationExists } = storeToRefs(useNotificationsStore());

    const { approvedLoan } = storeToRefs(useLoanHistoryStore());

    onMounted(() => {
        fetchNotifications();
    });

    const { apiFetch } = useApiFetch();

    const fetchedNotificationDetails: Ref<NotificationDetails | null> = ref(null);
    // const fetchedNotificationDetails: Ref<NotificationDetails | null> = ref(null);
    const fetchedRepaymentNotificationDetails: Ref<NotificationDetails | null> = ref(null);
    const fetchedTransactionNotificationDetails: Ref<NotificationDetails | null> = ref(null);
    const fetchedDisbursementNotificationDetails: Ref<NotificationDetails | null> = ref(null);

    const showLoanOfferView: Ref<boolean> = ref(false);
    
    const showSelectedLoanDetails: Ref<boolean> = ref(false);
    const showSelectedRepaymentDetails: Ref<boolean> = ref(false);
    const showSelectedTransactionDetails: Ref<boolean> = ref(false);
    const showSelectedLoanDisbursementDetails: Ref<boolean> = ref(false);


    async function showNotification(notification: Notification){
        if(notification.metadata && (notification.metadata.resourceType === 'loan' || notification.metadata.resourceType === 'loans')) {
            if(notification.metadata.operation == 'repayment') {
                showLoanRepaymentDetails(notification);
            } else if (notification.metadata.operation == 'disbursement') {
                showLoanDisbursementDetails(notification);
            } else {
                showLoanOfferOrDetails(notification);
            }
        } else if(notification.metadata && notification.metadata.resourceType == 'transactions') {
            showTransactionNotificationDetails(notification);
        } else {
            if(!notification.readAt || notification.readAt == '0000-01-01T00:00:00.000Z') {
                markNotificationsAsRead([notification]);
            }
        }
    }

    async function showLoanOfferOrDetails(notification: Notification){
        const notificationId = notification.id;
        const notificationResourceId = notification.metadata.resourceId || notification.metadata.reference;

        const cachedNotification = notificationDetailsCache.value.find((notificationDetails) => notificationDetails.id == notificationId);

        if(cachedNotification) {
            fetchedNotificationDetails.value = cachedNotification;
            if(cachedNotification.data.status === 'inactive' && cachedNotification.data.adminApproved) {
                showLoanOfferView.value = true;
                markFetchedNotificationDetailsAsRead(cachedNotification.id);
            } else {
                showSelectedLoanDetails.value = true;
            }
        } else {
            const result = await apiFetch(`loans/${notificationResourceId}`);
    
            if((result as any).success && !(result as any).error){
    
                (result as any).data.amount = (result as any).data.amount / 100;
                (result as any).data.totalRepaymentAmount = (result as any).data.totalRepaymentAmount / 100;
                (result as any).data.monthlyRepaymentAmount = (result as any).data.monthlyRepaymentAmount / 100;
    
                const schedules = (result as any).data.schedule.map((schedule: any) => {
                    schedule.amount = schedule.amount / 100;
                    return schedule;
                });
                
                (result as any).data.schedule = schedules;
    
                const notificationDataResult = {id: notification.id, resourceId: notificationResourceId, title: notification.title, data: (result as any).data}

                fetchedNotificationDetails.value = notificationDataResult;
    
                if((result as any).data.status === 'inactive' && (result as any).data.adminApproved) {
                    showLoanOfferView.value = true;
                    markFetchedNotificationDetailsAsRead(notificationId)
                } else {
                    showSelectedLoanDetails.value = true;
                }

                const notificationCache: NotificationDetails[] = notificationDetailsCache.value;
                notificationCache.push(notificationDataResult);
    
                notificationDetailsCache.value = notificationCache;
            } else {
                // console.log((result as any).error);
            }
        }
    }

    async function showLoanRepaymentDetails(notification: Notification){
        const notificationId = notification.id;
        const notificationResourceId = notification.metadata.resourceId || notification.metadata.reference;

        const cachedNotification = notificationDetailsCache.value.find((notificationDetails) => notificationDetails.id == notificationId);

        if(cachedNotification) {
            fetchedRepaymentNotificationDetails.value = cachedNotification;

            showSelectedRepaymentDetails.value = true;
        } else {
            const result = await apiFetch(`repayments/${notificationResourceId}`);
    
            if((result as any).success && !(result as any).error){
    
                (result as any).data.amount = (result as any).data.amount / 100;
    
                const notificationDataResult = {id: notificationId, resourceId: notificationResourceId, title: notification.title, data: (result as any).data}

                fetchedRepaymentNotificationDetails.value = notificationDataResult;
    
                showSelectedRepaymentDetails.value = true;

                const notificationCache: NotificationDetails[] = notificationDetailsCache.value;
                notificationCache.push(notificationDataResult);
    
                notificationDetailsCache.value = notificationCache;
            } else {
                // console.log((result as any).error);
            }
        }
    }

    async function showLoanDisbursementDetails(notification: Notification){
        const notificationId = notification.id;
        const notificationResourceId = notification.metadata.resourceId || notification.metadata.reference;
        
        const cachedNotification = notificationDetailsCache.value.find((notificationDetails) => notificationDetails.id == notificationId);
        
        if(cachedNotification) {
            fetchedDisbursementNotificationDetails.value = cachedNotification;
            
            showSelectedLoanDisbursementDetails.value = true;
        } else {
            const result = await apiFetch(`loans/${notificationResourceId}`);
    
            if((result as any).success && !(result as any).error){
                (result as any).data.amount = (result as any).data.amount / 100;
                (result as any).data.feeAmount = (result as any).data.feeAmount / 100;
                (result as any).data.totalInterestAmount = (result as any).data.totalInterestAmount / 100;
                (result as any).data.totalRepaymentAmount = (result as any).data.totalRepaymentAmount / 100;
                (result as any).data.monthlyRepaymentAmount = (result as any).data.monthlyRepaymentAmount / 100;
                
                const schedules = (result as any).data.schedule.map((schedule: any) => {
                    schedule.amount = schedule.amount / 100;
                    return schedule;
                });
                
                (result as any).data.schedule = schedules;
                
                const notificationDataResult = {id: notificationId, resourceId: notificationResourceId, title: notification.title, data: (result as any).data}
                
                fetchedDisbursementNotificationDetails.value = notificationDataResult;
    
                showSelectedLoanDisbursementDetails.value = true;

                const notificationCache: NotificationDetails[] = notificationDetailsCache.value;
                notificationCache.push(notificationDataResult);
    
                notificationDetailsCache.value = notificationCache;
            } else {
                // console.log((result as any).error);
            }
        }
    }

    async function showTransactionNotificationDetails(notification: Notification){
        const notificationId = notification.id;
        const notificationResourceId = notification.metadata.resourceId;

        const cachedNotification = notificationDetailsCache.value.find((notificationDetails) => notificationDetails.id == notificationId);

        if(cachedNotification) {
            fetchedTransactionNotificationDetails.value = cachedNotification;
            
            showSelectedTransactionDetails.value = true;

        } else {
            const result = await apiFetch(`transactions/${notificationResourceId}`);
    
            if((result as any).success && !(result as any).error){
    
                (result as any).data.amount = (result as any).data.amount / 100;
                (result as any).data.balanceAfter = (result as any).data.balanceAfter / 100;
                (result as any).data.balanceBefore = (result as any).data.balanceBefore / 100;
    
    
                const notificationDataResult = {id: notificationId, resourceId: notificationResourceId, title: notification.title, data: (result as any).data}

                fetchedTransactionNotificationDetails.value = notificationDataResult;
    
                showSelectedTransactionDetails.value = true;


                const notificationCache: NotificationDetails[] = notificationDetailsCache.value;
                notificationCache.push(notificationDataResult);
    
                notificationDetailsCache.value = notificationCache;
            } else {
                // console.log((result as any).error);
            }
        }
    }

    function markFetchedNotificationDetailsAsRead(notificationId: any) {
        const allNotifications = notifications.value;
        if(notificationId) {
            let notification;
            notification = allNotifications.find((notification: Notification) => {
                return notification.id == notificationId
            })

            if(notification && (!notification.readAt || notification.readAt == '0000-01-01T00:00:00.000Z')) {
                markNotificationsAsRead([notification]);
            }
        }
    }

    async function markNotificationsAsRead(notifications: Notification[]) {
        const notificationIds = notifications.map((notification) => notification.id);

        const result = await apiFetch('notifications/read', 'POST', { ids: notificationIds });
    
        if((result as any).success && !(result as any).error){
            fetchNotifications();
        }
    }

</script>