<template>
    <div>
        <div v-show="!continueLoanRequestProcess">
            <p class="mb-[30px] text-lance-black text-xl leading-[26px] font-medium tracking-[-0.2px]">Loans</p>
            <div v-show="!loanHistory.length" class="rounded-xl bg-white border border-solid border-lance-black-10 p-[115px] pb-[162px] text-center">
                <Loans-NoActiveLoan @@show-loan-instructions="kycCompleted ? showLoanInstructions = true : showKycIncompleteModal = true" />
            </div>
    
            <div v-show="loanHistory.length" class="flex gap-[25px]">
                <div class="basis-2/4">
                    <div v-show="!activeLoan" class="rounded-xl bg-white border border-solid border-lance-black-10 py-[132.5px] px-[96.5px] text-center">
                        <Loans-NoActiveLoan @@show-loan-instructions="kycCompleted ? showLoanInstructions = true : showKycIncompleteModal = true" />
                    </div>
                    <div v-show="activeLoan" class="flex flex-col gap-4">
                        <div class="rounded-xl bg-white border border-solid border-lance-black-10 py-6 px-10">
                            <p class="text-lance-black-50 text-sm leading-5">Next Repayment</p>
                            <p class="mt-[-12px] text-lance-black text-4xl font-bold leading-[55.93px] tracking-[0.36px]">
                                {{ activeLoan ? (activeLoan.monthlyRepaymentAmount).toLocaleString() : '' }}
                            </p>
                            <p class="mb-3 flex gap-1.5 items-center">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7777 6.60303H1.89499C1.61899 6.60303 1.39499 6.37903 1.39499 6.10303C1.39499 5.82703 1.61899 5.60303 1.89499 5.60303H13.7777C14.0537 5.60303 14.2777 5.82703 14.2777 6.10303C14.2777 6.37903 14.0537 6.60303 13.7777 6.60303Z" fill="#041111" fill-opacity="0.6"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8008 9.20654C10.5248 9.20654 10.2981 8.98254 10.2981 8.70654C10.2981 8.43054 10.5188 8.20654 10.7948 8.20654H10.8008C11.0768 8.20654 11.3008 8.43054 11.3008 8.70654C11.3008 8.98254 11.0768 9.20654 10.8008 9.20654Z" fill="#041111" fill-opacity="0.6"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.84248 9.20654C7.56648 9.20654 7.33981 8.98254 7.33981 8.70654C7.33981 8.43054 7.56048 8.20654 7.83648 8.20654H7.84248C8.11848 8.20654 8.34248 8.43054 8.34248 8.70654C8.34248 8.98254 8.11848 9.20654 7.84248 9.20654Z" fill="#041111" fill-opacity="0.6"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.87794 9.20654C4.60194 9.20654 4.3746 8.98254 4.3746 8.70654C4.3746 8.43054 4.59594 8.20654 4.87194 8.20654H4.87794C5.15394 8.20654 5.37794 8.43054 5.37794 8.70654C5.37794 8.98254 5.15394 9.20654 4.87794 9.20654Z" fill="#041111" fill-opacity="0.6"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8008 11.7976C10.5248 11.7976 10.2981 11.5736 10.2981 11.2976C10.2981 11.0216 10.5188 10.7976 10.7948 10.7976H10.8008C11.0768 10.7976 11.3008 11.0216 11.3008 11.2976C11.3008 11.5736 11.0768 11.7976 10.8008 11.7976Z" fill="#041111" fill-opacity="0.6"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.84248 11.7976C7.56648 11.7976 7.33981 11.5736 7.33981 11.2976C7.33981 11.0216 7.56048 10.7976 7.83648 10.7976H7.84248C8.11848 10.7976 8.34248 11.0216 8.34248 11.2976C8.34248 11.5736 8.11848 11.7976 7.84248 11.7976Z" fill="#041111" fill-opacity="0.6"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.87794 11.7976C4.60194 11.7976 4.3746 11.5736 4.3746 11.2976C4.3746 11.0216 4.59594 10.7976 4.87194 10.7976H4.87794C5.15394 10.7976 5.37794 11.0216 5.37794 11.2976C5.37794 11.5736 5.15394 11.7976 4.87794 11.7976Z" fill="#041111" fill-opacity="0.6"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.529 3.86075C10.253 3.86075 10.029 3.63675 10.029 3.36075V1.16675C10.029 0.890748 10.253 0.666748 10.529 0.666748C10.805 0.666748 11.029 0.890748 11.029 1.16675V3.36075C11.029 3.63675 10.805 3.86075 10.529 3.86075Z" fill="#041111" fill-opacity="0.6"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.14352 3.86075C4.86752 3.86075 4.64352 3.63675 4.64352 3.36075V1.16675C4.64352 0.890748 4.86752 0.666748 5.14352 0.666748C5.41952 0.666748 5.64352 0.890748 5.64352 1.16675V3.36075C5.64352 3.63675 5.41952 3.86075 5.14352 3.86075Z" fill="#041111" fill-opacity="0.6"/>
                                    <mask id="mask0_3121_12704" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="14" height="15">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33334 1.71948H14.3333V15.0001H1.33334V1.71948Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_3121_12704)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.014 2.71965C3.28533 2.71965 2.33333 3.64165 2.33333 5.31565V11.3483C2.33333 13.059 3.28533 14.0003 5.014 14.0003H10.6527C12.3813 14.0003 13.3333 13.0763 13.3333 11.399V5.31565C13.336 4.49231 13.1147 3.85231 12.6753 3.41231C12.2233 2.95898 11.5267 2.71965 10.6587 2.71965H5.014ZM10.6527 15.0001H5.01401C2.74401 15.0001 1.33334 13.6008 1.33334 11.3481V5.31548C1.33334 3.09682 2.74401 1.71948 5.01401 1.71948H10.6587C11.798 1.71948 12.74 2.06082 13.3833 2.70548C14.008 3.33282 14.3367 4.23482 14.3333 5.31682V11.3988C14.3333 13.6201 12.9227 15.0001 10.6527 15.0001Z" fill="#041111" fill-opacity="0.6"/>
                                    </g>
                                </svg>
                                <span class="text-lance-black text-sm leading-5">
                                    Due: {{ activeLoan ? new Date(activeLoan.nextPaymentDate).toLocaleDateString('en-GB', { day:"numeric", month:"short", year:"numeric" }) : '- -'}}
                                </span>
                            </p>
                            <div class="mb-3 rounded-lg bg-lance-green-5 py-2 px-4">
                                <div class="flex items-center justify-between mb-1 text-lance-black-60 text-sm leading-5">
                                    <p>Paid: <span class="font-semibold">N {{ activeLoanTotalPaid.toLocaleString() }}</span></p>
                                    <p>
                                        Balance : <span class="font-semibold">N {{ activeLoan ? (activeLoan.totalRepaymentAmount - activeLoanTotalPaid).toLocaleString() : '' }}</span>
                                    </p>
                                </div>
                                <div class="h-2 w-full rounded-lg bg-lance-green-10" style="box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.10) inset;">
                                    <div class="h-full rounded-lg" :style="`width: ${percentageLoanPaid}%`" style="background: linear-gradient(90deg, #E8FF28 -2.03%, #09837F 101.29%);"></div>
                                </div>
                            </div>
                            <div class="border-t border-solid border-lance-black-5 pt-4 flex gap-6">
                                <button @click="viewLoanDetails(activeLoan)" class="btn btn-tertiary w-full">See Loan Details</button>
                                <button @click="showLoanRepaymentModal = true" class="btn btn-primary w-full">Make a Repayment</button>
                            </div>
                        </div>
                        <div class="rounded-xl bg-white border border-solid border-lance-black-10 p-10">
                            <p class="mb-2 text-[#1E1721] font-aventa leading-8 tracking-[-0.16px] font-bold">
                                Repayment Timeline
                            </p>
                            <div class="h-[275px] overflow-y-scroll flex gap-4">
                                <div v-if="activeLoan" class="px-[2.335px] pt-[6.33px] flex flex-col items-center">
                                    <div v-for="(repayment, key) in activeLoan.schedule" :key="key" class="flex flex-col items-center">
                                        <div class="w-0.5 h-[48.66px] bg-[#063A4F] opacity-10" v-if="key != 0"></div>
                                        <div
                                            class="w-[23.333px] h-[23.333px] rounded-full border-[1.75px] border-solid flex items-center justify-center"
                                            :class="[{ 'bg-[#ECFF4D]' : repayment.paid_at }, Date.now() > new Date(repayment.dueDate).getTime() ? 'border-lance-green' : 'border-lance-green-30']"
                                        >
                                            <svg v-if="repayment.paid_at" xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.28231 7.31015C4.05948 7.31015 3.83431 7.22498 3.66398 7.05348L0.894314 4.28498C0.552481 3.94315 0.552481 3.39015 0.894314 3.04831C1.23615 2.70648 1.78915 2.70648 2.13098 3.04831L4.28231 5.19731L9.20098 0.279813C9.54282 -0.0620209 10.0958 -0.0620209 10.4376 0.279813C10.7795 0.621646 10.7795 1.17465 10.4376 1.51648L4.90065 7.05348C4.73031 7.22498 4.50631 7.31015 4.28231 7.31015Z" fill="#0A4F4D"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <ul v-if="activeLoan" class="flex flex-col gap-8 grow">
                                    <li v-for="(repayment, key) in activeLoan.schedule" :key="key" class="flex items-center justify-between">
                                        <div class="text-lance-black">
                                            <p class="leading-[22.4px] font-semibold">{{ (repayment.amount).toLocaleString() }}</p>
                                            <p v-if="repayment.paid_at" class="text-xs leading-[16.8px]">
                                                Date Paid:
                                                <span class="font-semibold">
                                                    {{ repayment.paid_at ? new Date(repayment.paid_at).toLocaleDateString('en-GB', { day:"numeric", month:"short", year:"numeric" }) : '' }}
                                                </span>
                                            </p>
                                            <p v-else class="text-xs leading-[16.8px]">
                                                Date Due:
                                                <span class="font-semibold">
                                                    {{ new Date(repayment.dueDate).toLocaleDateString('en-GB', { day:"numeric", month:"short", year:"numeric" }) }}
                                                </span>
                                            </p>
                                        </div>
                                        <p v-if="repayment.paid_at" class="w-[81px] h-8 rounded-[31px] bg-[rgba(12,180,59,0.04)] flex items-center justify-center py-1">
                                            <span class="text-[#0CB43B] text-sm font-medium">Paid</span>
                                        </p>
                                        <div v-else>
                                            <div v-if="Date.now() < new Date(repayment.dueDate).getTime()" class="w-[81px] py-1 text-center rounded-[31px] bg-lance-black-5 text-lance-black-50 text-sm font-medium leading-6">
                                                Upcoming
                                            </div>
                                            <div v-else class="w-[81px] py-1 text-center rounded-[31px] border border-solid border-[#E70A3F] bg-[rgba(231,10,63,0.05)] text-[#E70A3F] text-sm font-medium leading-6">
                                                Due
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rounded-xl bg-white border border-solid border-lance-black-10 p-10 basis-2/4">
                    <p class="mb-6 text-[#1E1721] text-xl font-medium leading-[26px] tracking-[-0.2px]">Loan History</p>
                    <ul class="flex flex-col gap-4">
                        <li
                            @click="viewLoanDetails(loan)" v-for="(loan, key) in loanHistory" :key="key"
                            class="py-3 px-6 rounded-2xl border border-solid border-lance-black-10 flex items-center justify-between cursor-pointer">
                            <div class="basis-1/3">
                                <p class="mb-1 text-lance-black-50 text-xs leading-[14px] tracking-[0.4px]">Amount</p>
                                <p class="text-black text-sm font-medium leading-5">N {{ (loan.amount).toLocaleString() }}</p>
                            </div>
                            <div class="basis-1/3">
                                <p class="mb-1 text-lance-black-50 text-xs leading-[14px] tracking-[0.4px]">Duration</p>
                                <p class="text-black text-sm font-medium leading-5">{{ loan.tenure }} Months</p>
                            </div>
                            <div class="basis-1/3">
                                <p class="mb-1 text-lance-black-50 text-xs leading-[14px] tracking-[0.4px]">Status</p>
                                <p v-if="loan.status === 'active'" class="py-1 px-6 rounded-[31px] text-sm font-medium w-fit bg-[rgba(12,180,59,0.04)] text-[#0CB43B]">
                                    Active
                                </p>
                                <div v-if="loan.status === 'inactive'">
                                    <p v-if="loan.adminApproved" class="py-1 px-6 rounded-[31px] text-sm font-medium w-fit bg-[rgba(211,229,227,0.20)] text-[#086120]">
                                        Approved
                                    </p>
                                    <p v-else class="py-1 px-6 rounded-[31px] text-sm font-medium w-fit bg-[rgba(255,138,0,0.06)] text-[#FF8A00]">
                                        Pending
                                    </p>
                                </div>
                                <p v-if="(loan.status === 'declined' && loan.declinedBy === 'borrower')" class="py-1 px-6 rounded-[31px] text-sm font-medium w-fit bg-[rgba(93,36,45,0.04)] text-[rgba(93,36,45,0.90)]">
                                    Rejected
                                </p>
                                <p v-if="(loan.status === 'declined' && loan.declinedBy === 'lender')" class="py-1 px-6 rounded-[31px] text-sm font-medium w-fit bg-[rgba(250,206,202,0.20)] text-[#BC251B]">
                                    Declined
                                </p>
                                <p v-if="loan.status === 'paid'" class="py-1 px-6 rounded-[31px] text-sm font-medium w-fit bg-[#EBF0F0] text-[#485252]">
                                    Completed
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    
            <Loans-DetailsModal @@close-loan-details-modal="showSelectedLoanDetails = false" v-show="showSelectedLoanDetails" :loan="selectedLoan" />
            <Loans-RepaymentModal
                v-if="activeLoan" @@close-loan-repayment-modal="showLoanRepaymentModal = false"
                @@successful-loan-repayment="loanRepaymentSuccessful"
                v-show="showLoanRepaymentModal" :loan="activeLoan" :wallet-balance="balance"
            />
            <KYC-IncompleteKycNotificationModal v-if="!kycCompleted" v-show="showKycIncompleteModal" @@proceed-to-kyc-process="navigateTo('/dashboard?start_kyc=true')" @@close-kyc-incomplete-modal="showKycIncompleteModal = false;" />
            <Loans-Instructions
                v-show="showLoanInstructions && loanSettings"
                :loan-settings="loanSettings"
                @@close-loan-instructions-modal="showLoanInstructions = false"
                @@continue-loan-request-process="showLoanRequestProcess"
            />
        </div>
        <Loans-RequestProcess v-show="continueLoanRequestProcess" @@close-loan-application-modal="continueLoanRequestProcess = false" :loan-settings="loanSettings" />
        <Loans-OfferView v-if="approvedLoan" @@close-loan-details-modal="showLoanOfferView = false" v-show="showLoanOfferView" :loan="selectedLoan" />
    </div>
</template>

<script setup lang="ts">

    import { useWalletStore } from '@/stores/wallet';

    definePageMeta({
        middleware: 'auth',
        layout: 'dashboard'
    });

    const showKycIncompleteModal: Ref<boolean> = ref(false);
        
    const { kycItems, kycCompleted } = storeToRefs(useKYCStore());

    const { balance } = storeToRefs(useWalletStore());

    const showLoanInstructions: Ref<boolean> = ref(false);

    const continueLoanRequestProcess: Ref<boolean> = ref(false);

    function showLoanRequestProcess(){
        showLoanInstructions.value = false;
        continueLoanRequestProcess.value = true;
    }

    const loanSettings: Ref<{
        "defaultRate": number,
        "minRate": number,
        "maxRate": number,
        "minDuration": number,
        "maxDuration": number,
        "processingFee": number
    } | null> = ref(null);

    const { fetchLoanSettings } = useFetchLoanSettings();

    const {
        activeLoan,
        loanHistory,
        approvedLoan,
        percentageLoanPaid,
        activeLoanTotalPaid
    } = storeToRefs(useLoanHistoryStore());

    const { fetchLoanHistory } = useLoanHistoryStore();
    
    onMounted(async()=>{
        if(kycCompleted.value){
            fetchLoanHistory();
            loanSettings.value = await fetchLoanSettings();
        }
    });

    const selectedLoan: Ref<Loan | null> = ref(null);
    
    const showSelectedLoanDetails: Ref<boolean> = ref(false);

    const showLoanOfferView: Ref<boolean> = ref(false);
    
    function viewLoanDetails(loan: Loan){
        selectedLoan.value = loan;

        if(loan.status === 'inactive' && loan.adminApproved) {
            showLoanOfferView.value = true;
        } else {
            showSelectedLoanDetails.value = true;
        }
    }

    const showLoanRepaymentModal: Ref<boolean> = ref(false);
    
    async function loanRepaymentSuccessful(){
        showLoanRepaymentModal.value = false;
        fetchLoanHistory();
    }

</script>