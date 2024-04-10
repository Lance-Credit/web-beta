<template>
    <div class="fixed top-0 left-0 w-screen h-screen bg-lance-black-70 backdrop-blur-[2px] flex justify-center items-center">
        <div class="bg-white w-[466px] p-10 rounded-3xl flex flex-col gap-6">
            <div>
                <p class="mb-1 text-lance-black font-medium text-2xl leading-[26px] tracking-[-0.24px]">Fund Wallet</p>
                <p class="text-lance-black-60">How would you like to fund your wallet?</p>
            </div>
            <div>
                <div class="mb-8 flex justify-between items-center py-1.5 px-6 rounded-lg bg-[#F2F6F6]">
                    <div>
                        <p class="text-lance-green text-[13px] leading-[20.8px]">{{ wallet?.bank_name.toUpperCase() }}</p>
                        <p class="text-lance-black text-lg leading-[27px] font-medium">{{ wallet?.account_no }}</p>
                    </div>
                    <button @click="copyAccountNumber" class="py-1 px-6 rounded-[31px] bg-lance-green-5 text-lance-green text-sm leading-[24px]">
                        Copy
                    </button>
                </div>
                <p class="text-lance-black-60">
                    Transfer to the account above and your Lance wallet will be <span class="text-lance-black font-medium">credited instantly.</span>
                </p>
            </div>
            <button @click="emit('@close-wallet-details-modal')" class="btn btn-primary">Close</button>
        </div>
    </div>
</template>

<script setup lang="ts">

    const props = defineProps<{
        wallet: null | Wallet
    }>();

    function copyAccountNumber(){
        const text = props.wallet?.account_no || '';
        navigator.clipboard.writeText(text);
    }

    const emit = defineEmits(['@close-wallet-details-modal']);
</script>