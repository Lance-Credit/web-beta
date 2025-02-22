<template>
    <div>
        <div>
            <div class="mb-[30px] flex items-center justify-between">
                <p class="text-lance-black text-xl leading-[26px] font-medium tracking-[-0.2px]">Notifications</p>
                <p class="text-[#1E1721] text-sm cursor-pointer">Mark all as read</p>
            </div>
            <ul class="flex flex-col gap-6">
                <li
                    v-for="(notification, key) in notifications" :key="key"
                    class="p-6 pr-10 rounded-xl bg-white border border-solid border-[rgba(3,87,238,0.10)]"
                >
                    <p class="mb-6 text-[#656167] font-medium">{{ new Date(notification.created_at).toLocaleDateString('en-GB', { day:"numeric", month:"short", year:"numeric" }) }}</p>
                    <div class="flex items-center gap-4">
                        <div v-if="!notification.read" class="w-2.5 h-2.5 rounded-full bg-[#E70A3F]"></div>
                        <div @click="showNotification(notification)" class="flex items-center justify-between cursor-pointer grow">
                            <div>
                                <p class="mb-1 text-lance-black font-medium">{{ notification.title }}
                                    <span class="font-normal text-lance-black-60">| {{ new Date(notification.created_at).toLocaleTimeString('en-US') }}</span>
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
        <Loans-DetailsModal @@close-loan-details-modal="showSelectedLoanDetails = false" v-show="showSelectedLoanDetails" :loan="fetchedLoan" />
        <Loans-OfferView v-if="approvedLoan" @@close-loan-details-modal="showLoanOfferView = false" v-show="showLoanOfferView" :loan="fetchedLoan" />
    </div>
</template>

<script setup lang="ts">

    import { useNotificationsStore } from '@/stores/notifications';

    definePageMeta({
        middleware: 'auth',
        layout: 'dashboard'
    });
    
    const { fetchNotifications } = useNotificationsStore();
    const { notifications } = storeToRefs(useNotificationsStore());

    const { approvedLoan } = storeToRefs(useLoanHistoryStore());

    onMounted(() => {
        fetchNotifications();
    });

    const { apiFetch } = useApiFetch();

    const fetchedLoan: Ref<Loan | null> = ref(null);

    const showLoanOfferView: Ref<boolean> = ref(false);
    
    const showSelectedLoanDetails: Ref<boolean> = ref(false);

    const selectedNotification = ref(null);

    async function showNotification(notification: Notification){
        if(notification.metadata.resourceType === 'loan') {
            showLoanOfferOrDetails(notification);
        }
    }

    async function showLoanOfferOrDetails(notification: Notification){
        if(notification.metadata.resourceType === 'loan') {
            const result = await apiFetch(`loans/${notification.metadata.reference}`);

            if((result as any).success && !(result as any).error){

                (result as any).data.amount = (result as any).data.amount / 100;
                (result as any).data.totalRepaymentAmount = (result as any).data.totalRepaymentAmount / 100;
                (result as any).data.monthlyRepaymentAmount = (result as any).data.monthlyRepaymentAmount / 100;

                const schedules = (result as any).data.schedule.map((schedule: any) => {
                    schedule.amount = schedule.amount / 100;
                    return schedule;
                });
                
                (result as any).data.schedule = schedules;

                fetchedLoan.value = (result as any).data;

                if((result as any).data.status === 'inactive' && (result as any).data.adminApproved) {
                    showLoanOfferView.value = true;
                } else {
                    showSelectedLoanDetails.value = true;
                }
            } else {
                // console.log((result as any).error);
            }
        }
    }

</script>