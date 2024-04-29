<template>
    <div>
        <p class="mb-[30px] text-lance-black text-xl leading-[26px] font-medium tracking-[-0.2px]">Loan Offer</p>
        <div class="p-10 rounded-xl bg-white">
            <div class="flex flex-col gap-6 w-[376px] mx-auto">
                <div
                    class="p-4 rounded border border-solid"
                    :class="notification?.approved ? 'border-lance-green bg-lance-green-5' : 'border-[#5D242D] bg-[rgba(93,36,45,0.05)]'"
                >
                    <p v-if="notification?.approved" class="text-lance-green text-sm">
                        Your offer has been accepted and is valid for <span class="text-lance-black font-medium">24 hours</span>.
                    </p>
                    <p v-else class="text-[#5D242D]">Your loan offer was not approved.</p>
                </div>
                <div v-if="notification?.approved">

                </div>
                <div v-else class="rounded-lg border border-solid border-lance-black bg-white">
                    <div class="p-6 bg-lance-green-5 flex items-center justify-between">
                        <div>
                            <p class="mb-1 text-lance-black-50 text-sm leading-5">Loan Amount</p>
                            <p class="text-lance-green text-xl font-semibold leading-[30px]">
                                N{{ (notification?.loanAmount)?.toLocaleString() }}
                            </p>
                        </div>
                        <p class="text-lance-black-70 text-sm leading-[21px]">Reasons below</p>
                    </div>
                    <ul class="p-4 pt-6">
                        <li class="flex items-center gap-4 pb-4 border-b border-solid border-lance-green-5">
                            <div>
                                <p class="mb-1 text-lance-black text-sm font-semibold tracking-[-0.14px]">Low Lance Score</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.a{
    color: var(--Text-100, #041111);
font-feature-settings: 'liga' off;
font-family: Gelion;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 20px; /* 142.857% */
letter-spacing: -0.14px;
}
</style>
<script setup lang="ts">

    defineProps<{
        notification: any;
    }>();
</script>