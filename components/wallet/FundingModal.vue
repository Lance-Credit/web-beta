<template>
    <div class="fixed z-20 top-0 left-0 w-screen h-screen bg-lance-black-70 backdrop-blur-[2px] flex justify-center items-center">
        <div class="bg-white w-[466px] p-10 rounded-3xl relative">
            <div class="flex flex-col gap-6">
                <div>
                    <p class="mb-1 text-lance-black font-medium text-2xl leading-[26px] tracking-[-0.24px]">Funding Amount</p>
                    <p class="text-lance-black-60">Provide the amount you would like to fund your account with.</p>
                </div>
                <div>
                    <Form-MoneyInput placeholder="Amount" label="Amount" v-model="fundingForm.fundingAmount[0].value" v-bind="fundingForm.fundingAmount[1].value" :error="fundingFormErrors.fundingAmount" class="mb-4" />
                </div>
                <Form-ErrorNotification v-if="fundingError" :message="fundingError" />
                <div class="flex gap-6">
                    <button @click="resetFundingForm" class="btn btn-tertiary w-full">Back</button>
                    <button
                        @click="fundWallet"
                        class="btn btn-primary w-full"
                        :class="{'loading' : fundingWallet}"
                        :disabled="!(fundingFormValues.fundingAmount && !fundingFormErrors.fundingAmount) || fundingWallet">
                            <span v-show="!fundingWallet">Continue</span>
                            <Loader-Basic v-show="fundingWallet" bg="#FFF" fg="#C3E48E" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    import * as yup from 'yup';

    const { values: fundingFormValues, errors: fundingFormErrors, defineField} = useForm({
        validationSchema: yup.object({
            fundingAmount: yup.number().required().typeError('Funding amount is required').label('Funding Amount'),
        })
    });
    
    const fundingForm = {
        fundingAmount: defineField('fundingAmount')
    };

    function resetFundingForm(){
        emit('@close-wallet-funding-modal');
    }

    const fundingError: Ref<string> = ref('');

    const { apiFetch } = useApiFetch();

    const fundingWallet: Ref<boolean> = ref(false);

    async function fundWallet(){
        fundingWallet.value = true;

        const result = await apiFetch(
            'wallets',
            'POST',
            {
                "amount": parseInt(fundingFormValues.fundingAmount) * 100
            }
        );
        
        if((result as any).success && !(result as any).error){
            fundingWallet.value = false;
            navigateTo((result as any).data.link, {external: true});
        } else {
            // console.log((result as any).error);
            fundingWallet.value = false;
            fundingError.value = (result as any).error;
        }
    }

    const emit = defineEmits<{
        '@close-wallet-funding-modal': []
    }>();

</script>