<template>
    <div @click.self="emit('@close-loan-details-modal')" class="fixed z-20 top-0 left-0 w-screen h-screen bg-lance-black-70 backdrop-blur-[2px] flex items-center justify-center">
        <div class="bg-white w-[466px] rounded-3xl p-10 flex flex-col gap-6">
            <p class="text-lance-black text-2xl font-medium leading-[26px] tracking-[-0.24px]">Loan Details</p>
            <div v-show="loan?.status == 'paid'" class="flex items-center justify-between">
                <div>
                    <p class="text-lance-black-50 text-sm leading-5">Total Amount Repaid</p>
                    <p class="mt-[-12px] text-lance-black text-4xl font-bold leading-[55.93px] tracking-[0.36px]">
                        {{ (loan?.totalRepayments)?.toLocaleString() }}
                    </p>
                </div>
                <p class="py-1 px-6 rounded-[31px] text-sm font-medium w-fit bg-lance-black-5 text-lance-black-50">
                    Completed
                </p>
            </div>
            <div>
                <ul class="p-6 rounded-lg border border-solid border-lance-black bg-[rgba(236,255,77,0.05)]">
                    <li class="flex items-center justify-between pb-4 border-b border-solid border-b-lance-green-5">
                        <p class="text-lance-black-70 text-sm leading-[21px]">Loan Amount</p>
                        <p class="text-lance-black">N{{ (loan?.amount)?.toLocaleString() }}</p>
                    </li>
                    <li class="flex items-center justify-between pb-4 border-b border-solid border-b-lance-green-5">
                        <p class="text-lance-black-70 text-sm leading-[21px]">Reference</p>
                        <p class="text-lance-black text-sm">{{ loan?.reference }}</p>
                    </li>
                    <li class="flex items-center justify-between py-4 border-b border-solid border-b-lance-green-5">
                        <p class="text-lance-black-70 text-sm leading-[21px]">Interest Rate</p>
                        <p class="text-lance-black">{{ loan?.rate }}% pa</p>
                    </li>
                    <li class="flex items-center justify-between py-4 border-b border-solid border-b-lance-green-5">
                        <p class="text-lance-black-70 text-sm leading-[21px]">Duration</p>
                        <p class="text-lance-black">{{ loan?.tenure }} months</p>
                    </li>
                    <li class="flex items-center justify-between py-4 border-b border-solid border-b-lance-green-5">
                        <p class="text-lance-black-70 text-sm leading-[21px]">Monthly Repayment</p>
                        <p class="text-lance-black">N{{ (loan?.monthlyPaymentAmount)?.toLocaleString() }} every month</p>
                    </li>
                </ul>
                <div v-show="loan?.status != 'paid'" class="mt-4 p-6 rounded-lg border border-solid border-lance-black bg-[rgba(236,255,77,0.05)]">
                    <div class="flex items-center justify-between">
                        <p class="text-lance-black-70 text-sm leading-[21px]">Total Repayment</p>
                        <p class="text-lance-green text-2xl font-bold leading-[30px]">
                            N{{ (loan?.totalRepaymentAmount)?.toLocaleString() }}
                        </p>
                    </div>
                </div>
            </div>
            <button class="btn btn-primary" @click="emit('@close-loan-details-modal')">Close</button>
        </div>
    </div>
</template>

<script setup lang="ts">

    defineProps<{
        loan: null | Loan
    }>();

    const emit = defineEmits<{
        '@close-loan-details-modal': []
    }>();
</script>