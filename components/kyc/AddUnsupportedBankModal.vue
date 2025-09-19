<template>
    <div @click.self="emit('@close-modal')" class="fixed z-20 top-0 left-0 w-screen h-screen bg-lance-black-70 backdrop-blur-[2px] flex justify-center items-center">
        <div v-if="!unsupportedBankSubmitted" class="bg-white h-full sm:h-auto w-full sm:w-[466px] p-10 sm:rounded-3xl">
            <div class="h-[calc(100%-78px)] sm:h-auto flex flex-col gap-6 justify-between sm:justify-normal">
                <div class="flex flex-col gap-6">
                    <div>
                        <div class="flex items-center">
                            <svg @click="emit('@close-modal')" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="sm:hidden">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3333 17.5002C13.12 17.5002 12.9067 17.4185 12.7442 17.256L6.0775 10.5894C5.75167 10.2635 5.75167 9.73687 6.0775 9.41104L12.7442 2.74437C13.07 2.41854 13.5967 2.41854 13.9225 2.74437C14.2483 3.07021 14.2483 3.59687 13.9225 3.92271L7.845 10.0002L13.9225 16.0777C14.2483 16.4035 14.2483 16.9302 13.9225 17.256C13.76 17.4185 13.5467 17.5002 13.3333 17.5002" fill="#0A4F4D"/>
                            </svg>
                            <p class="text-lance-black font-medium text-xl leading-[26px] tracking-[-0.24px] mx-auto sm:mx-0">
                                Add Your Bank
                            </p>
                        </div>
                        <p>Enter your bank's name to request support.</p>
                    </div>
                    <Form-TextInput
                        placeholder="Bank Name" label="" v-model="unsupportedBankForm.bankName[0].value"
                        v-bind="unsupportedBankForm.bankName[1].value" :error="unsupportedBankFormErrors.bankName"
                    />
                </div>
                <div class="flex items-center gap-6">
                    <button @click="emit('@close-modal')" class="btn btn-tertiary w-full">Back</button>
                    <button
                        @click="submitUnsupportedBankForm" class="btn w-full btn-primary"
                        :class="{'loading' : submittingUnsupportedBankForm}" :disabled="!unsupportedBankFormValues.bankName || submittingUnsupportedBankForm">
                        <span v-show="!submittingUnsupportedBankForm">Submit</span>
                        <Loader-Basic v-show="submittingUnsupportedBankForm" bg="#FFF" fg="#C3E48E" />
                    </button>
                </div>
            </div>
        </div>
        <div v-else class="py-[97.5px] px-6 sm:p-10 bg-white sm:rounded-3xl w-[528px] h-screen sm:h-fit">
            <div class="mb-10 flex justify-center">
                <div class="w-[192px] h-[192px] rounded-full bg-[#D6F0AD] flex justify-center items-center mx-auto">
                    <img src="/assets/img/icons/thumbs-up.png" alt="">
                </div>
            </div>
            <div class="text-center">
                <p class="mb-2 text-lance-black font-aventa font-bold text-[24px] leading-[32px] tracking-[-0.24px]">
                    Thank You!
                </p>
                <p class="mb-8 text-lance-black-60 text-sm sm:text-base leading-6">{{ addedUnsupportedBankResponse }}</p>
                <button @click="emit('@close-modal')" class="btn btn-primary w-full gap-4">
                    <span>Close</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    
    import * as yup from 'yup';
    const { apiFetch } = useApiFetch();

    const { values: unsupportedBankFormValues, errors: unsupportedBankFormErrors, defineField } = useForm({
        validationSchema: yup.object({
            bankName: yup.string().required().label('Bank Name')
        })
    });

    const unsupportedBankForm = {
        bankName : defineField('bankName')
    };

    const submittingUnsupportedBankForm: Ref<boolean> = ref(false);

    const unsupportedBankSubmitted: Ref<boolean> = ref(false);

    const addedUnsupportedBankResponse: Ref<string> = ref('');

    async function submitUnsupportedBankForm(){
        submittingUnsupportedBankForm.value = true;

        if(unsupportedBankFormValues.bankName) {

            const result = await apiFetch(
                'banks/unsupported',
                'POST',
                {},
                {
                    "bankName": unsupportedBankFormValues.bankName
                }
            );
        
            if((result as any).success && !(result as any).error){
                unsupportedBankSubmitted.value = true;
                addedUnsupportedBankResponse.value = (result as any).message;
            }
            submittingUnsupportedBankForm.value = false;
        } else {
            submittingUnsupportedBankForm.value = false;
        }
    }

    const emit = defineEmits<{
        '@close-modal': []
    }>();
</script>