<template>
    <div @click.self="resetFundingForm" class="fixed z-20 top-0 left-0 w-screen h-screen bg-lance-black-70 backdrop-blur-[2px] flex justify-center items-center">
        <div class="bg-white w-full sm:w-[466px] h-full sm:h-auto p-6 sm:p-10 sm:rounded-3xl relative">
            <div class="h-[calc(100%-78px)] sm:h-auto">
                <div @click="resetFundingForm" class="py-1 mb-6 sm:hidden">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3333 17.5002C13.12 17.5002 12.9067 17.4185 12.7442 17.256L6.0775 10.5894C5.75167 10.2635 5.75167 9.73687 6.0775 9.41104L12.7442 2.74437C13.07 2.41854 13.5967 2.41854 13.9225 2.74437C14.2483 3.07021 14.2483 3.59687 13.9225 3.92271L7.845 10.0002L13.9225 16.0777C14.2483 16.4035 14.2483 16.9302 13.9225 17.256C13.76 17.4185 13.5467 17.5002 13.3333 17.5002" fill="#0A4F4D"/>
                    </svg>
                </div>
                <div class="h-full sm:h-auto flex flex-col gap-6 justify-between sm:justify-normal pb-12 sm:pb-0">
                    <div class="flex flex-col gap-6">
                        <div>
                            <p class="mb-1 text-lance-black font-medium text-2xl leading-[26px] tracking-[-0.24px]">Funding Amount</p>
                            <p class="text-lance-black-60">Provide the amount you would like to fund your account with.</p>
                        </div>
                        <div>
                            <Form-MoneyInput placeholder="Amount" label="Amount" v-model="fundingForm.fundingAmount[0].value" v-bind="fundingForm.fundingAmount[1].value" :error="fundingFormErrors.fundingAmount" class="mb-4" />
                        </div>
                    </div>
                    <Form-ErrorNotification v-if="fundingError" :message="fundingError" class="mb-6" />
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