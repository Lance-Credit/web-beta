<template>
    <div class="fixed z-20 top-0 left-0 w-screen h-screen bg-lance-black-70 backdrop-blur-[2px] flex items-center justify-center">
        <div class="bg-white w-[466px] rounded-3xl p-10 flex flex-col gap-6">
            <div>
                <p class="mb-1 text-lance-black text-2xl font-medium leading-[26px] tracking-[-0.24px]">Repayments</p>
                <p class="text-lance-black-60">How would you like to pay your loan?</p>
            </div>
            <form  class="flex flex-col gap-6">
                <Form-RadioInput type="radio" name="repaymentOption" value="nextRepayment">
                    <p class="text-lance-black text-sm">
                        Pay Next Instalment of <span class="font-bold">N{{ (loan?.repayments[0].amount)?.toLocaleString() }}</span>
                    </p>
                </Form-RadioInput>

                <Form-RadioInput type="radio" name="repaymentOption" value="full">
                    <p class="text-lance-black text-sm">
                         Make full repayment of <span class="font-bold">N{{ (loan?.amount)?.toLocaleString() }}</span>
                    </p>
                </Form-RadioInput>

                <Form-RadioInput type="radio" name="repaymentOption" value="specific">
                    <p class="text-lance-black text-sm">
                        Pay a specific amount
                    </p>
                </Form-RadioInput>
            </form>
            <div class="flex gap-6">
                <button @click="emit('@close-loan-repayment-modal')" class="btn btn-tertiary w-full">Back</button>
                <button class="btn btn-primary w-full" :disabled="!repaymentFormValues.repaymentOption || repaymentFormErrors.repaymentOption">Make Repayment</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    
    import * as yup from 'yup';
    import { useForm } from 'vee-validate';

    defineProps<{
        loan: null | Loan
    }>();

    const emit = defineEmits<{
        '@close-loan-repayment-modal': []
    }>();

    const { values: repaymentFormValues, errors: repaymentFormErrors } = useForm({
        validationSchema: yup.object({
            repaymentOption: yup.string().required().label('Repayment Option')
        })
    });

</script>