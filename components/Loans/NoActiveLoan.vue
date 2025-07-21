<template>
    <div class="flex flex-col items-center justify-center gap-6 sm:w-[376px] mx-auto">
        <div class="w-[192px] h-[192px] rounded-full bg-[#D6F0AD] flex items-center justify-center mx-auto">
            <img src="/assets/img/wallet.svg" alt="">
        </div>
        <div>
            <p class="mb-4 text-lance-black text-lg sm:text-xl font-medium leading-[26px] tracking-[-0.18px] sm:tracking-[-0.2px]">
                You have no {{loanType ? loanType : 'active'}} loans 
            </p>
            <p class="text-lance-black-60 text-sm sm:text-base leading-[18px] sm:leading-6">
                You currently do not have any {{loanType ? loanType : 'active'}} loans. Simply request for one.
            </p>
        </div>
        <button @click="startLoanApplication" class="btn btn-primary w-full sm:w-[282px]">Get a loan</button>
    </div>
</template>

<script setup lang="ts">

    defineProps<{
        loanType?: string,
    }>();

    const { showWarning } = useToast();
    const {
        approvedLoan
    } = storeToRefs(useLoanHistoryStore());


    function startLoanApplication(){
        if(!approvedLoan.value?.length){
            emit('@show-loan-instructions');
        } else {
            showWarning('You have a loan awaiting your final decision. Please approve or reject it before requesting a new one.');
        }
    }

    const emit = defineEmits<{
        '@show-loan-instructions': []
    }>();

</script>