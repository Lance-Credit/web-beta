<template>
    <div>
        <p class="mb-[30px] text-lance-black text-xl leading-[26px] font-medium tracking-[-0.2px]">Wallet</p>
        <div class="rounded-xl bg-white border border-solid border-lance-black-10 p-10">
            <div
                class="flex justify-between items-center py-12 px-6 rounded-xl border border-solid border-lance-blue-10
                bg-lance-green mb-10 bg-[url('/assets/img/wallet-gradient-bg.svg')] bg-no-repeat bg-right"
            >
                <div>
                    <p class="mb-2 text-[rgba(255,255,255,0.80)] font-medium tracking-[-0.16px]">Wallet Balance</p>
                    <p class="text-white text-[32px] font-medium leading-[32px] tracking-[-0.32px]">N {{ balance.toLocaleString() }}</p>
                </div>
                <div class="flex gap-4">
                    <button @click="!kycCompleted ? showKycIncompleteModal = true : showWalletFundingModal = true" class="btn border border-solid border-white text-white">
                        Fund Wallet
                    </button>
                    <button @click="!kycCompleted ? showKycIncompleteModal = true : showWalletWithdrawalModal = true" class="btn bg-white gap-4 text-lance-green">
                        <span>Withdraw</span>
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.0804443 6.10547C0.0804443 5.78906 0.315573 5.52756 0.620636 5.48617L0.705444 5.48047L13.2054 5.48047C13.5506 5.48047 13.8304 5.76029 13.8304 6.10547C13.8304 6.42188 13.5953 6.68338 13.2903 6.72476L13.2054 6.73047L0.705444 6.73047C0.360266 6.73047 0.0804443 6.45065 0.0804443 6.10547Z" fill="#0A4F4D"/>
                            <path d="M7.72295 1.52804C7.47835 1.28448 7.4775 0.888756 7.72105 0.644154C7.94246 0.421787 8.28963 0.400868 8.5347 0.581886L8.60493 0.64225L13.6466 5.66225C13.8696 5.88432 13.8899 6.23275 13.7075 6.47781L13.6466 6.548L8.60497 11.5688C8.36038 11.8124 7.96466 11.8116 7.72108 11.567C7.49966 11.3447 7.4802 10.9974 7.66225 10.7531L7.72291 10.6831L12.3196 6.10489L7.72295 1.52804Z" fill="#0A4F4D"/>
                        </svg>
                    </button>
                </div>
            </div>
            <p class="mb-6 text-[#0E0B10] font-medium leading-[22px] tracking-[-0.16px]">Wallet Transactions</p>
            <div class="p-4 rounded-xl bg-white border border-solid border-lance-blue-10">
                <ul class="flex py-2 px-4 text-lance-black-60 text-sm leading-[24px]">
                    <li class="w-[228px]">Transaction Type</li>
                    <li class="w-[138px]">Amount</li>
                    <li class="w-[250px] grow">Description</li>
                    <li class="w-[108px] grow">Reference</li>
                    <li class="w-[158px] text-right">Transaction Date</li>
                </ul>
                <ul
                    @click="viewTransactionDetails(transaction)"
                    v-for="(transaction) in transactions" :key="transaction.id"
                    class="mb-2 flex items-center pt-[23px] pb-[15px] px-4 border-t
                    border-solid border-[rgba(3,87,238,0.05)] text-lance-black leading-[26px] cursor-pointer"
                >
                    <li class="flex items-center gap-4 w-[228px]">
                        <div class="flex items-center justify-center w-9 h-9 rounded-full bg-[rgba(10,79,77,0.05)]">
                            <svg v-if="transaction.txnType == 'credit'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8333 4.16634C10.8333 3.7061 10.4602 3.33301 9.99998 3.33301C9.53974 3.33301 9.16665 3.7061 9.16665 4.16634V9.16634H4.16665C3.70641 9.16634 3.33331 9.53944 3.33331 9.99967C3.33331 10.4599 3.70641 10.833 4.16665 10.833H9.16665V15.833C9.16665 16.2932 9.53974 16.6663 9.99998 16.6663C10.4602 16.6663 10.8333 16.2932 10.8333 15.833V10.833H15.8333C16.2936 10.833 16.6666 10.4599 16.6666 9.99967C16.6666 9.53944 16.2936 9.16634 15.8333 9.16634H10.8333V4.16634Z" fill="#0A4F4D"/>
                            </svg>
                            <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.16665 9.16699H4.16665C3.70641 9.16699 3.33331 9.54009 3.33331 10.0003C3.33331 10.4606 3.70641 10.8337 4.16665 10.8337H9.16665L10.8333 10.8337H15.8333C16.2936 10.8337 16.6666 10.4606 16.6666 10.0003C16.6666 9.54009 16.2936 9.16699 15.8333 9.16699H10.8333H9.16665Z" fill="#E70A3F"/>
                            </svg>
                        </div>
                        <p>
                            {{ transaction.txnTypeForUi }}
                        </p>
                    </li>
                    <li class="font-medium w-[138px]">N {{ (transaction.amount/100).toLocaleString() }}</li>
                    <li class="w-[250px] grow">{{ transaction.metadata.description }}</li>
                    <li class="w-[108px] grow">
                        {{ transaction.reference }}
                    </li>
                    <li class="w-[158px] text-right">
                        {{ new Date(transaction.createdAt).toLocaleDateString('en-GB', { day:"numeric", month:"short", year:"numeric" }) }}
                    </li>
                </ul>
            </div>
        </div>

        <Wallet-TransactionDetailsModal @@closeTransactionDetailsModal="showSelectedTransaction = false" v-show="showSelectedTransaction" :transaction="selectedTransaction" />
        <!-- <Wallet-DetailsModal @@closeWalletDetailsModal="showWalletDetailsModal = false" v-show="showWalletDetailsModal" :wallet="walletDetails" /> -->
        <Wallet-WithdrawModal @@closeWalletWithdrawalModal="showWalletWithdrawalModal = false" v-if="linkedAccount && showWalletWithdrawalModal" :wallet-balance="balance" :linked-account="linkedAccount" />
        <Wallet-FundingModal @@closeWalletFundingModal="showWalletFundingModal = false" v-if="showWalletFundingModal" />
        <KYC-IncompleteKycNotificationModal v-if="!kycCompleted" v-show="showKycIncompleteModal" @@close-kyc-incomplete-modal="navigateTo('/dashboard')" />
    </div>
</template>

<script setup lang="ts">

    import { useWalletStore } from '@/stores/wallet';

    definePageMeta({
        middleware: 'auth',
        layout: 'dashboard'
    });

    const { kycCompleted } = storeToRefs(useKYCStore());

    const showKycIncompleteModal: Ref<boolean> = ref(false);

    const { fetchAccountBalance } = useWalletStore();
    const { balance, transactions, linkedAccount } = storeToRefs(useWalletStore());


    onMounted(()=>{
        setTimeout(() => {
            if(kycCompleted.value){
                fetchAccountBalance();
            }
        }, 2000);
    })

    const selectedTransaction: Ref<null | Transaction> = ref(null);

    const showSelectedTransaction: Ref<boolean> = ref(false);

    function viewTransactionDetails(transaction: Transaction){
        selectedTransaction.value = transaction;
        showSelectedTransaction.value = true;
    }

    const showWalletDetailsModal: Ref<boolean> = ref(false);

    const showWalletFundingModal: Ref<boolean> = ref(false);

    const showWalletWithdrawalModal: Ref<boolean> = ref(false);

</script>