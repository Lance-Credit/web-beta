<template>
    <div @click.self="emit('@close-loan-repayment-modal')" class="fixed z-20 top-0 left-0 w-screen h-screen bg-lance-black-70 backdrop-blur-[2px] flex items-center justify-center">
        <div v-show="successfulRepayment" class="bg-white h-full sm:h-auto w-full sm:w-[466px] sm:rounded-3xl p-10">
            <div v-show="continueRepayment">
                <div class="flex flex-col gap-8">
                    <div class="w-[192px] h-[192px] rounded-full flex items-center justify-center bg-[#D6F0AD] mx-auto">
                        <img src="/assets/img/icons/thumbs-up.png" alt="">
                    </div>
                    <div class="text-lance-black text-center">
                        <p class="text-lance-black-60">
                            {{ repaymentResponseMessage ? repaymentResponseMessage : 'We see you and we appreciate it' }}
                        </p>
                    </div>
                    <button @click="resetSuccessfulRepaymentModal" class="btn btn-primary">Close</button>
                </div>
            </div>
        </div>
        <div v-show="!successfulRepayment" class="bg-white h-full sm:h-auto w-full sm:w-[466px] sm:rounded-3xl px-6 pt-[34px] sm:p-10">
            <div @click="resetRepaymentChoice" class="sm:hidden mb-6">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3342 17.5C13.1209 17.5 12.9075 17.4184 12.745 17.2559L6.07836 10.5892C5.75253 10.2634 5.75253 9.73669 6.07836 9.41086L12.745 2.74419C13.0709 2.41836 13.5975 2.41836 13.9234 2.74419C14.2492 3.07003 14.2492 3.59669 13.9234 3.92253L7.84586 10L13.9234 16.0775C14.2492 16.4034 14.2492 16.93 13.9234 17.2559C13.7609 17.4184 13.5475 17.5 13.3342 17.5" fill="#0A4F4D"/>
                </svg>
            </div>
            <div v-show="!continueRepayment" class="h-[calc(100%-78px)] sm:h-auto">
                <div v-show="repaymentFormValues.repaymentOption != 'specific'" class="h-[calc(100%-78px)] sm:h-auto flex flex-col gap-6 justify-between sm:justify-normal">
                    <div class="flex flex-col gap-6">
                        <div>
                            <p class="mb-1 text-lance-black text-2xl font-medium leading-[26px] tracking-[-0.24px]">Repayments</p>
                            <p class="text-lance-black-60">How would you like to pay your loan?</p>
                        </div>
                        <form  class="flex flex-col gap-6">
                            <Form-RadioInput type="radio" name="repaymentOption" value="nextRepayment">
                                <p class="text-lance-black text-sm">
                                    Pay Next Instalment of <span class="font-bold">N{{ loan ? (loan.schedule).find((schedule) => schedule.status != 'paid')?.remainingAmount.toLocaleString() : '' }}</span>
                                </p>
                            </Form-RadioInput>
            
                            <Form-RadioInput type="radio" name="repaymentOption" value="full">
                                <p class="text-lance-black text-sm">
                                     Make full repayment of
                                     <span class="font-bold">
                                        N{{ remainingPayment.toLocaleString() }}
                                    </span>
                                </p>
                            </Form-RadioInput>
            
                            <Form-RadioInput type="radio" name="repaymentOption" value="specific">
                                <p class="text-lance-black text-sm">
                                    Pay a specific amount
                                </p>
                            </Form-RadioInput>
                        </form>
                    </div>
                    <div class="flex gap-6">
                        <button @click="resetRepaymentChoice" class="btn btn-tertiary w-full">Back</button>
                        <!-- <button @click="continueRepayment = true" class="btn btn-primary w-full" :disabled="!(repaymentFormValues.repaymentOption && !repaymentFormErrors.repaymentOption)">Make Repayment</button> -->
                        <button @click="makeRepayment" class="btn btn-primary w-full" :disabled="!(repaymentFormValues.repaymentOption && !repaymentFormErrors.repaymentOption)  || makingRepayment">Make Repayment</button>
                    </div>
                </div>
    
                <div v-show="repaymentFormValues.repaymentOption == 'specific'" class="h-[calc(100%-78px)] sm:h-auto flex flex-col gap-6 justify-between sm:justify-normal">
                    <div class="flex flex-col gap-6">
                        <div>
                            <p class="mb-1 text-lance-black text-2xl font-medium leading-[26px] tracking-[-0.24px]">Enter Specific Amount</p>
                            <p class="text-lance-black-60">Provide the amount you would like to repay</p>
                        </div>
                        <div>
                            <Form-MoneyInput placeholder="Amount" label="Amount" v-model="repaymentForm.repaymentAmount[0].value" v-bind="repaymentForm.repaymentAmount[1].value" :error="repaymentFormErrors.repaymentAmount" class="mb-4" />
                        </div>
                    </div>
                    <div class="flex gap-6">
                        <button @click="resetRepaymentChoice" class="btn btn-tertiary w-full">Back</button>
                        <!-- <button @click="continueRepayment = true" class="btn btn-primary w-full" :disabled="!(repaymentFormValues.repaymentAmount && !repaymentFormErrors.repaymentAmount)">Continue</button> -->
                        <button @click="makeRepayment" class="btn btn-primary w-full" :disabled="!(repaymentFormValues.repaymentAmount && !repaymentFormErrors.repaymentAmount) || makingRepayment">Continue</button>
                    </div>
                </div>
            </div>
            <div v-show="continueRepayment" class="h-[calc(100%-156px)] sm:h-auto flex flex-col gap-6 justify-between sm:justify-normal">
                <div class="flex flex-col gap-6">
                    <div>
                        <p class="mb-1 text-lance-black text-2xl font-medium leading-[26px] tracking-[-0.24px]">Repayments</p>
                        <p class="text-lance-black-60">Choose a Payment Method</p>
                    </div>

                    <form  class="flex flex-col gap-2">
                        <Form-RepaymentMethodRadioInput type="radio" name="repaymentMethod" value="link">
                            <div class="w-8 h-8 rounded-full flex items-center justify-center" :class="repaymentFormValues.repaymentMethod != 'link' ? 'bg-lance-green-5' : ''">
                                <svg v-show="repaymentFormValues.repaymentMethod != 'online'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <g clip-path="url(#clip0_6539_27189)">
                                        <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#052926" stroke-miterlimit="10"/>
                                        <path d="M2.3418 6H13.6584" stroke="#052926" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M2.3418 10H13.6582" stroke="#052926" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8 13.839C9.38071 13.839 10.5 11.2248 10.5 8.00007C10.5 4.77531 9.38071 2.16113 8 2.16113C6.61929 2.16113 5.5 4.77531 5.5 8.00007C5.5 11.2248 6.61929 13.839 8 13.839Z" stroke="#052926" stroke-miterlimit="10"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6539_27189">
                                            <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg v-show="repaymentFormValues.repaymentMethod == 'online'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <g clip-path="url(#clip0_6524_25472)">
                                      <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#C8E993" stroke-miterlimit="10"/>
                                      <path d="M2.3418 6H13.6584" stroke="#C8E993" stroke-linecap="round" stroke-linejoin="round"/>
                                      <path d="M2.3418 10H13.6582" stroke="#C8E993" stroke-linecap="round" stroke-linejoin="round"/>
                                      <path d="M8 13.839C9.38071 13.839 10.5 11.2248 10.5 8.00007C10.5 4.77531 9.38071 2.16113 8 2.16113C6.61929 2.16113 5.5 4.77531 5.5 8.00007C5.5 11.2248 6.61929 13.839 8 13.839Z" stroke="#C8E993" stroke-miterlimit="10"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6524_25472">
                                            <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <span class="text-sm">Pay Online</span>
                        </Form-RepaymentMethodRadioInput>
                    </form>
                </div>
                <div class="flex gap-6">
                    <button @click="continueRepayment = false;" class="btn btn-tertiary w-full">Back</button>
                    <button @click="makeRepayment" class="btn btn-primary w-full"
                        :disabled="!(repaymentFormValues.repaymentMethod && !repaymentFormErrors.repaymentMethod) || makingRepayment">
                        <span>Make Repayment</span>
                    </button>
                </div>
            </div>
        </div>
        <Toast/>
    </div>
</template>

<script setup lang="ts">
    
    import * as yup from 'yup';

    const props = defineProps<{
        loan: null | Loan,
        token: string,
        activeLoanTotalPaid: number
    }>();

    const { showError } = useToast();

    const remainingPayment = computed(() => {
        return props.loan ? props.loan.totalRepaymentAmount - props.activeLoanTotalPaid : 0;
    })

    const { values: repaymentFormValues, errors: repaymentFormErrors, setFieldValue, defineField, resetField } = useForm({
        validationSchema: yup.object({
            repaymentMethod: yup.string().required().label('Repayment Method'),
            repaymentOption: yup.string().required().label('Repayment Option'),
            repaymentAmount: yup.number().required().
            typeError('Repayment amount is required').label('Repayment Amount'),
        })
    });

    const repaymentForm = {
        repaymentAmount: defineField('repaymentAmount')
    };

    const chosenAmount = computed(() => {
        if(repaymentFormValues.repaymentAmount){
            return repaymentFormValues.repaymentAmount;
        }

        if(repaymentFormValues.repaymentOption == 'full'){
            return remainingPayment.value;
        }

        if(repaymentFormValues.repaymentOption == 'nextRepayment'){
            return props.loan?.monthlyRepaymentAmount;
        }
        return 0;
    });

    const continueRepayment: Ref<boolean> = ref(false);

    const makingRepayment: Ref<boolean> = ref(false);

    const successfulRepayment: Ref<boolean> = ref(false);
    
    const repaymentResponseMessage: Ref<string> = ref('We see you and we appreciate it');
    
    const { apiFetch } = useApiFetch();

    async function makeRepayment(){
        makingRepayment.value = true;

        const medium = 'link';
        const installment = repaymentFormValues.repaymentOption == 'full' ? 'full' :
            repaymentFormValues.repaymentOption == 'nextRepayment' ? 'next' : 'partial';

        const rePaymentSessionId = await initiateRepayment(installment);

        if(rePaymentSessionId && medium == 'link') {
            const result = await apiFetch(
                `repayment-links/session/${rePaymentSessionId}`,
                'POST',
                {'x-session-token': `Bearer ${props.token}`},
                {}
            );
            
            if ((result as any).success && !(result as any).error) {

                repaymentResponseMessage.value = (result as any).message;

                navigateTo(
                    (result as any).data.link,
                    {
                        external: true
                    }
                );
            } else {
                // console.log((result as any).error);
                showError((result as any).error);
                makingRepayment.value = false;
                successfulRepayment.value = false;
            }
        }

        // makingRepayment.value = false;
    }


    async function initiateRepayment(installment: string) {

        const result = await apiFetch(
            `repayment-links/session?installments=${installment}&amount=${chosenAmount.value * 100}`,
            'GET',
            {'x-session-token': `Bearer ${props.token}`}
        );

        if ((result as any).success && !(result as any).error) {
            return (result as any).data.sessionId;
        } else {
            showError((result as any).error);
            return false;
        }
    }


    function resetRepaymentChoice(){
        console.log('got here')
        emit('@close-loan-repayment-modal')
        
        resetField('repaymentOption');
        resetField('repaymentAmount', {
            value: 0
        });
    }    

    function resetSuccessfulRepaymentModal(){
        continueRepayment.value = false;
        successfulRepayment.value = false;
        emit('@successful-loan-repayment');
        setFieldValue('repaymentOption', undefined);
    }


    const emit = defineEmits<{
        '@close-loan-repayment-modal': [],
        '@successful-loan-repayment': []
    }>();
    
</script>