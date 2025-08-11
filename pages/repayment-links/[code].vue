<template>
    <div>
        <div class="p-6 md:p-20 bg-[#FAFAFA] min-h-screen flex items-center justify-center">
            <div v-if="activeLoan" class="flex md:gap-[25px] w-full">
                <div class="w-full md:basis-2/4">
                    <div class="flex flex-col gap-4">
                        <div class="rounded-xl bg-white border border-solid border-lance-black-10 py-6 px-4 md:px-10">
                            <p class="text-lance-black-50 text-sm leading-5">Next Repayment</p>
                            <p class="mt-[-12px] text-lance-black text-[28px] md:text-4xl font-bold leading-[52px] md:leading-[55.93px] tracking-[0.28px] md:tracking-[0.36px]">
                                {{ activeLoan ? (activeLoan.schedule).find((schedule) => schedule.status != 'paid')?.remainingAmount.toLocaleString() : '' }}
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
                                    Due: {{ nextRepaymentDate }}
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
                            <div class="border-t border-solid border-lance-black-5 pt-4 flex gap-[7px] md:gap-6">
                                <button @click="showLoanRepaymentModal = true" class="btn btn-primary w-full">Make a Repayment</button>
                            </div>
                        </div>
                        <div class="rounded-xl bg-white border border-solid border-lance-black-10 py-[30px] px-3 md:p-10">
                            <p class="mb-2 text-[#1E1721] font-aventa text-sm md:text-base leading-[18px] md:leading-8 tracking-[-0.14px] md:tracking-[-0.16px] font-bold">
                                Repayment Timeline
                            </p>
                            <div class="md:h-[275px] overflow-y-scroll md:overflow-y-hidden flex gap-4">
                                <div v-if="activeLoan" class="px-[2.335px] pt-[6.33px] flex flex-col items-center">
                                    <div v-for="(repayment, key) in activeLoan.schedule" :key="key" class="flex flex-col items-center">
                                        <div class="w-0.5 h-[48.66px] bg-[#063A4F] opacity-10" v-if="key != 0"></div>
                                        <div
                                            class="w-[23.333px] h-[23.333px] rounded-full border-[1.75px] border-solid flex items-center justify-center"
                                            :class="[{ 'bg-[#ECFF4D]' : repayment.status === 'paid' }, repayment.status === 'paid' || Date.now() > new Date(repayment.dueDate).getTime() ? 'border-lance-green' : 'border-lance-green-30']"
                                        >
                                            <svg v-if="repayment.status === 'paid'" xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.28231 7.31015C4.05948 7.31015 3.83431 7.22498 3.66398 7.05348L0.894314 4.28498C0.552481 3.94315 0.552481 3.39015 0.894314 3.04831C1.23615 2.70648 1.78915 2.70648 2.13098 3.04831L4.28231 5.19731L9.20098 0.279813C9.54282 -0.0620209 10.0958 -0.0620209 10.4376 0.279813C10.7795 0.621646 10.7795 1.17465 10.4376 1.51648L4.90065 7.05348C4.73031 7.22498 4.50631 7.31015 4.28231 7.31015Z" fill="#0A4F4D"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <ul v-if="activeLoan" class="flex flex-col gap-8 grow">
                                    <li v-for="(repayment, key) in activeLoan.schedule" :key="key" class="flex items-center justify-between">
                                        <div class="text-lance-black">
                                            <p class="leading-[22.4px] font-semibold">
                                                {{ repayment.status == 'paid' ? (repayment.paidAmount).toLocaleString() : (repayment.remainingAmount).toLocaleString() }}
                                            </p>
                                            <p v-if="repayment.status === 'paid'" class="text-xs leading-[16.8px]">
                                                Date Paid:
                                                <span class="font-semibold">
                                                    {{ repayment.status === 'paid' ? new Date(repayment.paidAt).toLocaleDateString('en-GB', { day:"numeric", month:"short", year:"numeric" }) : '' }}
                                                </span>
                                            </p>
                                            <p v-else class="text-xs leading-[16.8px]">
                                                Date Due:
                                                <span class="font-semibold">
                                                    {{ new Date(repayment.dueDate).toLocaleDateString('en-GB', { day:"numeric", month:"short", year:"numeric" }) }}
                                                </span>
                                            </p>
                                        </div>
                                        <p v-if="repayment.status === 'paid'" class="w-[81px] h-8 rounded-[31px] bg-[rgba(12,180,59,0.04)] flex items-center justify-center py-1">
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
                <div
                    class="rounded-xl bg-white border border-solid border-lance-black-10 py-[35px] px-4 md:p-10 w-full md:basis-2/4 hidden md:block"
                >
                    <div class="flex items-center justify-center">
                        <div class="bg-white w-full sm:w-[466px] h-full sm:h-auto sm:rounded-3xl px-6 py-10 sm:p-10 flex flex-col gap-6">
                            <p class="text-lance-black text-base sm:text-2xl font-bold sm:font-medium sm:leading-[26px] tracking-[-0.24px] flex items-center">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="sm:hidden">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3332 17.5C13.1199 17.5 12.9065 17.4183 12.744 17.2558L6.07738 10.5892C5.75155 10.2633 5.75155 9.73666 6.07738 9.41083L12.744 2.74416C13.0699 2.41833 13.5965 2.41833 13.9224 2.74416C14.2482 3.06999 14.2482 3.59666 13.9224 3.92249L7.84488 9.99999L13.9224 16.0775C14.2482 16.4033 14.2482 16.93 13.9224 17.2558C13.7599 17.4183 13.5465 17.5 13.3332 17.5" fill="#0A4F4D"/>
                                </svg>
                                <span class="mx-auto sm:mx-0">Loan Details</span>
                            </p>
                            <div>
                                <p v-show="loanReferenceCopied" class="mb-2 py-2 px-4 text-center text-[#272E2E] text-sm leading-6 rounded-[4px] border border-solid border-[#DAE0E0] bg-[#FAFCFC]">
                                    Copied to clipboard
                                </p>
                                <ul class="p-6 rounded-lg border border-solid border-lance-black bg-[rgba(236,255,77,0.05)]">
                                    <li class="flex items-center justify-between pb-4 border-b border-solid border-b-lance-green-5">
                                        <p class="text-lance-black-70 text-xs sm:text-sm leading-[18px] sm:leading-[21px]">Loan Amount</p>
                                        <p class="text-lance-black text-[13px] sm:text-base leading-6">N{{ (activeLoan?.amount)?.toLocaleString() }}</p>
                                    </li>
                                    <li class="flex items-center justify-between py-4 border-b border-solid border-b-lance-green-5">
                                        <p class="text-lance-black-70 text-xs sm:text-sm leading-[18px] sm:leading-[21px]">Reference</p>
                                        <p class="text-lance-black text-[13px] sm:text-base leading-6 flex items-center gap-2">
                                            <span class="">{{ activeLoan?.reference }}</span>
                                            <svg @click="copyReferenceCode" class="cursor-pointer" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_3427_18542" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="1" width="15" height="18">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.74731 1.67627H16.9579V18.2209H2.74731V1.67627Z" fill="white"/>
                                                </mask>
                                                <g mask="url(#mask0_3427_18542)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29545 4.36198C5.104 4.36198 4.1146 5.35489 4.08655 6.57939V14.4924C4.05995 15.7598 5.03065 16.8037 6.25015 16.8319H12.0485C13.2486 16.7808 14.1991 15.7546 14.1905 14.4968V7.9341L10.8578 4.36198H6.30407H6.29545ZM6.3042 17.9415H6.22582C4.4124 17.8993 2.96857 16.347 3.00812 14.4803V6.56586C3.04982 4.73023 4.52314 3.25195 6.29413 3.25195H6.30636H11.088C11.2347 3.25195 11.3749 3.31336 11.477 3.42212L15.1189 7.32645C15.2153 7.4293 15.2692 7.56765 15.2692 7.71045V14.4922C15.2821 16.3485 13.8771 17.8653 12.0702 17.9407L6.3042 17.9415Z" fill="#AEB2B2"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.55823 2.9165C5.1774 2.9165 4.03073 4.03484 3.99823 5.414V14.3265C3.9674 15.754 5.0924 16.9298 6.50573 16.9615H13.2257C14.6166 16.904 15.7182 15.7482 15.7082 14.3315V6.93984L11.8457 2.9165H6.56823H6.55823ZM6.56823 18.2115H6.4774C4.37573 18.164 2.7024 16.4157 2.74823 14.3132V5.399C2.79657 3.3315 4.50407 1.6665 6.55657 1.6665H6.57073H12.1124C12.2824 1.6665 12.4449 1.73567 12.5632 1.85817L16.7841 6.25567C16.8957 6.3715 16.9582 6.52734 16.9582 6.68817V14.3265C16.9732 16.4173 15.3449 18.1257 13.2507 18.2107L6.56823 18.2115Z" fill="#AEB2B2"/>
                                                </g>
                                            </svg>
                                        </p>
                                    </li>
                                    <li class="flex items-center justify-between py-4 border-b border-solid border-b-lance-green-5">
                                        <p class="text-lance-black-70 text-xs sm:text-sm leading-[18px] sm:leading-[21px]">Interest Rate</p>
                                        <p class="text-lance-black text-[13px] sm:text-base leading-6">{{ activeLoan?.rate }}% per month</p>
                                    </li>
                                    <li class="flex items-center justify-between py-4 border-b border-solid border-b-lance-green-5">
                                        <p class="text-lance-black-70 text-xs sm:text-sm leading-[18px] sm:leading-[21px]">Duration</p>
                                        <p class="text-lance-black text-[13px] sm:text-base leading-6">{{ activeLoan?.tenure }} months</p>
                                    </li>
                                    <li class="flex items-center justify-between py-4 border-b border-solid border-b-lance-green-5">
                                        <p class="text-lance-black-70 text-xs sm:text-sm leading-[18px] sm:leading-[21px]">Monthly Repayment</p>
                                        <p class="text-lance-black text-[13px] sm:text-base leading-6">N{{ (activeLoan?.monthlyRepaymentAmount)?.toLocaleString() }} every month</p>
                                    </li>
                                </ul>
                                <div class="mt-4 p-6 rounded-lg border border-solid border-lance-black bg-[rgba(236,255,77,0.05)]">
                                    <div class="flex items-center justify-between">
                                        <p class="text-lance-black-70 text-xs sm:text-sm leading-[18px] sm:leading-[21px]">Total Repayment</p>
                                        <p class="text-lance-green text-2xl font-bold leading-[30px]">
                                            N{{ (activeLoan?.totalRepaymentAmount)?.toLocaleString() }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="h-full flex flex-col items-center text-center justify-center gap-6 sm:w-[376px] mx-auto">
                <div class="w-[192px] h-[192px] rounded-full bg-[#D6F0AD] flex items-center justify-center mx-auto">
                    <img src="/assets/img/wallet.svg" alt="">
                </div>
                <div v-if="!fetchingLinkInfo">
                    <p class="mb-4 text-lance-black text-lg sm:text-xl font-medium leading-[26px] tracking-[-0.18px] sm:tracking-[-0.2px]">
                        Invalid or Inactive Link
                    </p>
                    <p class="text-lance-black-60 text-sm sm:text-base leading-[18px] sm:leading-6">
                        This link is either invalid or inactive.
                    </p>
                </div>
                <div v-else>
                    <p class="text-lance-black-60 text-sm sm:text-base leading-[18px] sm:leading-6">
                        Fetching Link Details...
                    </p>
                </div>
                <a href="/" class="btn btn-primary w-full sm:w-[282px]">Go back home</a>
            </div>
    
            <Loans-LinkRepaymentModal
                @@close-loan-repayment-modal="showLoanRepaymentModal = false"
                @@successful-loan-repayment="loanRepaymentSuccessful"
                v-show="showLoanRepaymentModal" :loan="activeLoan" :token="token" :activeLoanTotalPaid="activeLoanTotalPaid"
            />
        </div>
    </div>
</template>

<script setup lang="ts">

    const { apiFetch } = useApiFetch();

    const activeLoan: Ref<Loan | null> = ref(null);
    const nextRepaymentDate = computed(() => {
        if(activeLoan.value){
            const nextRepayment = activeLoan.value.schedule.find((schedule) => schedule.status != 'paid');
            if(nextRepayment){
                return new Date(nextRepayment.dueDate).toLocaleDateString('en-GB', { day:"numeric", month:"short", year:"numeric" });
            }
        }
        return '- -';
    });

    const activeLoanTotalPaid = computed(() => {
            return activeLoan.value
                ? (activeLoan.value.schedule).reduce((total, repayment): number => {
                    return total + repayment.paidAmount;
                }, 0)
                : 0;
        });
    const percentageLoanPaid = computed(() => {
        const loan: Loan | null | undefined = activeLoan.value;
        if(loan){
            return (activeLoanTotalPaid.value / loan.totalRepaymentAmount) * 100;
        }
        return 100;
    });
        

    const fetchingLinkInfo: Ref<boolean> = ref(true);

    const token: Ref<string> = ref('');

    onMounted(async()=>{

        const route = useRoute();
        const code = route.params.code as string;

        retrieveLinkInfo(code);

    });

    const showLoanRepaymentModal: Ref<boolean> = ref(false);
    
    async function loanRepaymentSuccessful(){
        showLoanRepaymentModal.value = false;
    }

    async function retrieveLinkInfo(code: string) {
        fetchingLinkInfo.value = true;

        const result = await apiFetch(`repayment-links/${code}`);

        fetchingLinkInfo.value = false;
        
        if ((result as any).success && !(result as any).error) {
            if((result as any).data.status.toLowerCase() == 'active'){
                (result as any).data.loan.amount = (result as any).data.loan.amount / 100;
                (result as any).data.loan.monthlyRepaymentAmount = (result as any).data.loan.monthlyRepaymentAmount / 100;
                (result as any).data.loan.totalInterestAmount = (result as any).data.loan.totalInterestAmount / 100;
                (result as any).data.loan.totalRepaymentAmount = (result as any).data.loan.totalRepaymentAmount / 100;

                const schedules = (result as any).data.loan.schedule.map((schedule: LoanSchedule) => {
                    schedule.amount = schedule.amount / 100;
                    schedule.paidAmount = schedule.paidAmount / 100;
                    schedule.remainingAmount = schedule.remainingAmount / 100;
                    return schedule;
                });
                (result as any).data.loan.schedule = schedules;
                
                activeLoan.value = (result as any).data.loan
                token.value = (result as any).data.session.token
            }
        }
    }

    function copyReferenceCode(){
        showLoanReferenceCopied();
        navigator.clipboard.writeText(activeLoan.value?.reference as string);
    }

    const loanReferenceCopied:Ref <boolean> = ref(false);

    function showLoanReferenceCopied() {
        loanReferenceCopied.value = true;
        setTimeout(()=> loanReferenceCopied.value = false, 5000);
    }

</script>