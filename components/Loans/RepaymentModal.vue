<template>
    <div @click.self="emit('@close-loan-repayment-modal')" class="fixed z-20 top-0 left-0 w-screen h-screen bg-lance-black-70 backdrop-blur-[2px] flex items-center justify-center">
        <div v-show="successfulRepayment" class="bg-white w-[466px] rounded-3xl p-10">
            <div v-show="continueRepayment">
                <div class="flex flex-col gap-8">
                    <div class="w-[192px] h-[192px] rounded-full flex items-center justify-center bg-[#D6F0AD] mx-auto">
                        <img src="/assets/img/icons/thumbs-up.png" alt="">
                    </div>
                    <div class="text-lance-black text-center">
                        <p class="mb-2 font-aventa text-2xl leading-8 tracking-[-0.24px] font-semibold">
                            {{ repaymentFormValues.repaymentMethod == 'wallet' ? 'Successful Repayment' : '' }}
                        </p>
                        <p class="text-lance-black-60">
                            {{ repaymentResponseMessage ? repaymentResponseMessage : 'We see you and we appreciate it' }}
                        </p>
                    </div>
                    <button @click="resetSuccessfulRepaymentModal" class="btn btn-primary">Close</button>
                </div>
            </div>
        </div>
        <div v-show="!successfulRepayment" class="bg-white w-[466px] rounded-3xl p-10">
            <div v-show="!continueRepayment">
                <div v-show="repaymentFormValues.repaymentOption != 'specific'" class="flex flex-col gap-6">
                    <div>
                        <p class="mb-1 text-lance-black text-2xl font-medium leading-[26px] tracking-[-0.24px]">Repayments</p>
                        <p class="text-lance-black-60">How would you like to pay your loan?</p>
                    </div>
                    <form  class="flex flex-col gap-6">
                        <Form-RadioInput type="radio" name="repaymentOption" value="nextRepayment">
                            <p class="text-lance-black text-sm">
                                Pay Next Instalment of <span class="font-bold">N{{ (loan?.monthlyPaymentAmount)?.toLocaleString() }}</span>
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
                    <div class="flex gap-6">
                        <button @click="emit('@close-loan-repayment-modal')" class="btn btn-tertiary w-full">Back</button>
                        <button @click="continueRepayment = true" class="btn btn-primary w-full" :disabled="!(repaymentFormValues.repaymentOption && !repaymentFormErrors.repaymentOption)">Make Repayment</button>
                    </div>
                </div>
    
                <div v-show="repaymentFormValues.repaymentOption == 'specific'" class="flex flex-col gap-6">
                    <div>
                        <p class="mb-1 text-lance-black text-2xl font-medium leading-[26px] tracking-[-0.24px]">Enter Specific Amount</p>
                        <p class="text-lance-black-60">Provide the amount you would like to repay</p>
                    </div>
                    <div>
                        <Form-MoneyInput placeholder="Amount" label="Amount" v-model="repaymentForm.repaymentAmount[0].value" v-bind="repaymentForm.repaymentAmount[1].value" :error="repaymentFormErrors.repaymentAmount" class="mb-4" />
                        <div class="flex items-center gap-2 py-2 px-4 rounded-lg bg-lance-green-5">
                            <div class="w-8 h-8 rounded-full flex items-center justify-center bg-lance-green border border-solid border-lance-green">
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8444 9.47179H11.1457C9.88107 9.47179 8.85174 8.44312 8.85107 7.17912C8.85107 5.91379 9.88041 4.88446 11.1457 4.88379H13.8444C14.1204 4.88379 14.3444 5.10779 14.3444 5.38379C14.3444 5.65979 14.1204 5.88379 13.8444 5.88379H11.1457C10.4317 5.88446 9.85107 6.46512 9.85107 7.17846C9.85107 7.89112 10.4324 8.47179 11.1457 8.47179H13.8444C14.1204 8.47179 14.3444 8.69579 14.3444 8.97179C14.3444 9.24779 14.1204 9.47179 13.8444 9.47179Z" fill="#ECFF4D"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4507 7.6377H11.2427C10.9667 7.6377 10.7427 7.4137 10.7427 7.1377C10.7427 6.8617 10.9667 6.6377 11.2427 6.6377H11.4507C11.7267 6.6377 11.9507 6.8617 11.9507 7.1377C11.9507 7.4137 11.7267 7.6377 11.4507 7.6377Z" fill="#ECFF4D"/>
                                    <mask id="mask0_7396_12796" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="14">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.585205 0.875H14.3443V13.6569H0.585205V0.875Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_7396_12796)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.58363 1.875C2.93029 1.875 1.58496 3.22033 1.58496 4.87367V9.65833C1.58496 11.3117 2.93029 12.657 4.58363 12.657H10.3463C11.9996 12.657 13.3443 11.3117 13.3443 9.65833V4.87367C13.3443 3.22033 11.9996 1.875 10.3463 1.875H4.58363ZM10.3463 13.657H4.58363C2.37896 13.657 0.584961 11.863 0.584961 9.65833V4.87367C0.584961 2.66833 2.37896 0.875 4.58363 0.875H10.3463C12.551 0.875 14.3443 2.66833 14.3443 4.87367V9.65833C14.3443 11.863 12.551 13.657 10.3463 13.657Z" fill="#ECFF4D"/>
                                    </g>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.70822 4.90039H4.10889C3.83289 4.90039 3.60889 4.67639 3.60889 4.40039C3.60889 4.12439 3.83289 3.90039 4.10889 3.90039H7.70822C7.98422 3.90039 8.20822 4.12439 8.20822 4.40039C8.20822 4.67639 7.98422 4.90039 7.70822 4.90039Z" fill="#ECFF4D"/>
                                </svg>
                            </div>
                            <p class="text-lance-black text-sm">Wallet Balance: <span class="font-bold">N{{ walletBalance.toLocaleString() }}</span></p>
                        </div>
                    </div>
                    <div class="flex gap-6">
                        <button @click="resetRepaymentChoice" class="btn btn-tertiary w-full">Back</button>
                        <button @click="continueRepayment = true" class="btn btn-primary w-full" :disabled="!(repaymentFormValues.repaymentAmount && !repaymentFormErrors.repaymentAmount)">Continue</button>
                    </div>
                </div>
            </div>
            <div v-show="continueRepayment" class="flex flex-col gap-6">
                <div>
                    <p class="mb-1 text-lance-black text-2xl font-medium leading-[26px] tracking-[-0.24px]">Repayments</p>
                    <p class="text-lance-black-60">Choose a Payment Method</p>
                </div>
                <form  class="flex flex-col gap-2">
                    <Form-RepaymentMethodRadioInput type="radio" name="repaymentMethod" value="wallet">
                        <div class="w-8 h-8 rounded-full flex items-center justify-center" :class="repaymentFormValues.repaymentMethod != 'wallet' ? 'bg-lance-green-5' : ''">
                            <svg v-show="repaymentFormValues.repaymentMethod != 'wallet'" xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5925 8.59703H10.8938C9.62912 8.59703 8.59979 7.56837 8.59912 6.30437C8.59912 5.03903 9.62845 4.0097 10.8938 4.00903H13.5925C13.8685 4.00903 14.0925 4.23303 14.0925 4.50903C14.0925 4.78503 13.8685 5.00903 13.5925 5.00903H10.8938C10.1798 5.0097 9.59912 5.59037 9.59912 6.3037C9.59912 7.01637 10.1805 7.59703 10.8938 7.59703H13.5925C13.8685 7.59703 14.0925 7.82103 14.0925 8.09703C14.0925 8.37303 13.8685 8.59703 13.5925 8.59703Z" fill="#052926"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1992 6.76245H10.9912C10.7152 6.76245 10.4912 6.53845 10.4912 6.26245C10.4912 5.98645 10.7152 5.76245 10.9912 5.76245H11.1992C11.4752 5.76245 11.6992 5.98645 11.6992 6.26245C11.6992 6.53845 11.4752 6.76245 11.1992 6.76245Z" fill="#052926"/>
                                <mask id="mask0_8364_7296" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="13">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.333496 0H14.0926V12.7819H0.333496V0Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_8364_7296)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.33167 1C2.67834 1 1.33301 2.34533 1.33301 3.99867V8.78333C1.33301 10.4367 2.67834 11.782 4.33167 11.782H10.0943C11.7477 11.782 13.0923 10.4367 13.0923 8.78333V3.99867C13.0923 2.34533 11.7477 1 10.0943 1H4.33167ZM10.0943 12.782H4.33167C2.12701 12.782 0.333008 10.988 0.333008 8.78333V3.99867C0.333008 1.79333 2.12701 0 4.33167 0H10.0943C12.299 0 14.0923 1.79333 14.0923 3.99867V8.78333C14.0923 10.988 12.299 12.782 10.0943 12.782Z" fill="#052926"/>
                                </g>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.45676 4.02539H3.85742C3.58142 4.02539 3.35742 3.80139 3.35742 3.52539C3.35742 3.24939 3.58142 3.02539 3.85742 3.02539H7.45676C7.73276 3.02539 7.95676 3.24939 7.95676 3.52539C7.95676 3.80139 7.73276 4.02539 7.45676 4.02539Z" fill="#052926"/>
                            </svg>
                            <svg v-show="repaymentFormValues.repaymentMethod == 'wallet'" xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5925 8.59703H10.8938C9.62912 8.59703 8.59979 7.56837 8.59912 6.30437C8.59912 5.03903 9.62845 4.0097 10.8938 4.00903H13.5925C13.8685 4.00903 14.0925 4.23303 14.0925 4.50903C14.0925 4.78503 13.8685 5.00903 13.5925 5.00903H10.8938C10.1798 5.0097 9.59912 5.59037 9.59912 6.3037C9.59912 7.01637 10.1805 7.59703 10.8938 7.59703H13.5925C13.8685 7.59703 14.0925 7.82103 14.0925 8.09703C14.0925 8.37303 13.8685 8.59703 13.5925 8.59703Z" fill="#C8E993"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1992 6.76245H10.9912C10.7152 6.76245 10.4912 6.53845 10.4912 6.26245C10.4912 5.98645 10.7152 5.76245 10.9912 5.76245H11.1992C11.4752 5.76245 11.6992 5.98645 11.6992 6.26245C11.6992 6.53845 11.4752 6.76245 11.1992 6.76245Z" fill="#C8E993"/>
                                <mask id="mask0_8385_8192" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="13">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.333496 0H14.0926V12.7819H0.333496V0Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_8385_8192)">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.33167 1C2.67834 1 1.33301 2.34533 1.33301 3.99867V8.78333C1.33301 10.4367 2.67834 11.782 4.33167 11.782H10.0943C11.7477 11.782 13.0923 10.4367 13.0923 8.78333V3.99867C13.0923 2.34533 11.7477 1 10.0943 1H4.33167ZM10.0943 12.782H4.33167C2.12701 12.782 0.333008 10.988 0.333008 8.78333V3.99867C0.333008 1.79333 2.12701 0 4.33167 0H10.0943C12.299 0 14.0923 1.79333 14.0923 3.99867V8.78333C14.0923 10.988 12.299 12.782 10.0943 12.782Z" fill="#C8E993"/>
                                </g>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.45676 4.02539H3.85742C3.58142 4.02539 3.35742 3.80139 3.35742 3.52539C3.35742 3.24939 3.58142 3.02539 3.85742 3.02539H7.45676C7.73276 3.02539 7.95676 3.24939 7.95676 3.52539C7.95676 3.80139 7.73276 4.02539 7.45676 4.02539Z" fill="#C8E993"/>
                            </svg>
                        </div>
                        <span class="text-sm">Pay with Wallet: <span class="font-bold">N{{ walletBalance.toLocaleString() }}</span></span>
                    </Form-RepaymentMethodRadioInput>
                    <span v-show="repaymentFormValues.repaymentMethod == 'wallet' && walletBalance < chosenAmount" class="mt-[-4px] mb-2 text-[#E70A3F] text-xs ml-4">
                        Insufficient Funds. Top up your wallet and try again
                    </span>
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
                <div class="flex gap-6">
                    <button @click="continueRepayment = false; emit('@close-loan-repayment-modal')" class="btn btn-tertiary w-full">Back</button>
                    <NuxtLink v-if="repaymentFormValues.repaymentMethod == 'wallet' && walletBalance < chosenAmount" to="wallet" class="btn btn-primary w-full">
                        <span>Fund Wallet</span>
                    </NuxtLink>
                    <button v-else @click="makeRepayment" class="btn btn-primary w-full" :disabled="!(repaymentFormValues.repaymentMethod && !repaymentFormErrors.repaymentMethod)">
                        <span>Make Repayment</span>
                    </button>
                </div>
            </div>
            <!-- <div v-show="continueRepayment">
                <div class="flex flex-col gap-8">
                    <div class="w-[192px] h-[192px] rounded-full flex items-center justify-center bg-[#D6F0AD] mx-auto">
                        <img src="/assets/img/icons/thumbs-up.png" alt="">
                    </div>
                    <div class="text-lance-black">
                        <p class="mb-2 font-aventa text-2xl leading-8 tracking-[-0.24px] font-semibold text-center">
                            Confirm Repayment
                        </p>
                        <p class="mb-4 text-center text-lance-black-60">
                            You’re about to make a repayment of 
                            <span class="text-lance-black font-medium">N {{ chosenAmount.toLocaleString() }}</span>
                        </p>
                        <div class="py-2 px-4 rounded-lg bg-lance-green-5 flex items-center gap-2">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="15.5" fill="#0A4F4D" stroke="#0A4F4D"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5925 18.5973H19.8938C18.6291 18.5973 17.5998 17.5686 17.5991 16.3046C17.5991 15.0393 18.6285 14.0099 19.8938 14.0093H22.5925C22.8685 14.0093 23.0925 14.2333 23.0925 14.5093C23.0925 14.7853 22.8685 15.0093 22.5925 15.0093H19.8938C19.1798 15.0099 18.5991 15.5906 18.5991 16.3039C18.5991 17.0166 19.1805 17.5973 19.8938 17.5973H22.5925C22.8685 17.5973 23.0925 17.8213 23.0925 18.0973C23.0925 18.3733 22.8685 18.5973 22.5925 18.5973Z" fill="#052926"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1987 16.7622H19.9907C19.7147 16.7622 19.4907 16.5382 19.4907 16.2622C19.4907 15.9862 19.7147 15.7622 19.9907 15.7622H20.1987C20.4747 15.7622 20.6987 15.9862 20.6987 16.2622C20.6987 16.5382 20.4747 16.7622 20.1987 16.7622Z" fill="#052926"/>
                                <mask id="mask0_3139_13336" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="9" y="10" width="15" height="13">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.33325 10H23.0923V22.7819H9.33325V10Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_3139_13336)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3317 11C11.6783 11 10.333 12.3453 10.333 13.9987V18.7833C10.333 20.4367 11.6783 21.782 13.3317 21.782H19.0943C20.7477 21.782 22.0923 20.4367 22.0923 18.7833V13.9987C22.0923 12.3453 20.7477 11 19.0943 11H13.3317ZM19.0943 22.782H13.3317C11.127 22.782 9.33301 20.988 9.33301 18.7833V13.9987C9.33301 11.7933 11.127 10 13.3317 10H19.0943C21.299 10 23.0923 11.7933 23.0923 13.9987V18.7833C23.0923 20.988 21.299 22.782 19.0943 22.782Z" fill="#052926"/>
                                </g>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4563 14.0254H12.8569C12.5809 14.0254 12.3569 13.8014 12.3569 13.5254C12.3569 13.2494 12.5809 13.0254 12.8569 13.0254H16.4563C16.7323 13.0254 16.9563 13.2494 16.9563 13.5254C16.9563 13.8014 16.7323 14.0254 16.4563 14.0254Z" fill="#052926"/>
                            </svg>
                            <p class="text-sm leading-5">Loan Balance:
                                <span class="font-bold">N{{ (remainingPayment - chosenAmount).toLocaleString() }}</span>
                            </p>
                        </div>
                    </div>
                    <div class="flex gap-6">
                        <button @click="continueRepayment = false" class="btn btn-tertiary w-full">Cancel</button>
                        <button @click="makeRepayment" class="btn btn-primary w-full" :class="{'loading' : makingRepayment}" :disabled="makingRepayment">
                            <span v-show="!makingRepayment">Proceed</span>
                            <Loader-Basic v-show="makingRepayment" bg="#FFF" fg="#C3E48E" />
                        </button>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
    
    import * as yup from 'yup';

    const props = defineProps<{
        loan: null | Loan,
        walletBalance: number
    }>();

    const { activeLoanTotalPaid } = storeToRefs(useLoanHistoryStore());

    const remainingPayment = computed(() => {
        return props.loan ? props.loan.totalRepaymentAmount - activeLoanTotalPaid.value : 0;
    })

    const { values: repaymentFormValues, errors: repaymentFormErrors, setFieldValue, defineField } = useForm({
        validationSchema: yup.object({
            repaymentMethod: yup.string().required().label('Repayment Method'),
            repaymentOption: yup.string().required().label('Repayment Option'),
            repaymentAmount: yup.number().required().
            max(props.walletBalance, "Insufficient Funds. Try again using the amount in your account")
            .typeError('Repayment amount is required').label('Repayment Amount'),
        })
    });

    const repaymentForm = {
        repaymentAmount: defineField('repaymentAmount')
    };

    const  chosenAmount = computed(() => {
        if(repaymentFormValues.repaymentAmount){
            return repaymentFormValues.repaymentAmount;
        }

        if(repaymentFormValues.repaymentOption == 'full'){
            return props.loan?.totalRepaymentAmount;
        }

        if(repaymentFormValues.repaymentOption == 'nextRepayment'){
            return props.loan?.monthlyPaymentAmount;
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

        const medium = repaymentFormValues.repaymentMethod == 'wallet' ? 'wallet' : 'link';
        const installment = repaymentFormValues.repaymentOption == 'full' ? 'full' : 'partial';

        const result = await apiFetch(`loans/${props.loan?.reference}/repayments?installment=${installment}&medium=${medium}`, 'POST');
        if ((result as any).success && !(result as any).error) {
            makingRepayment.value = false;
            successfulRepayment.value = true;
            repaymentResponseMessage.value = (result as any).message;

            if (medium === 'link'){
                navigateTo(
                    (result as any).data.link,
                    {
                        external: true
                    }
                );
            }
        } else {
            // console.log((result as any).error);
            makingRepayment.value = false;
            successfulRepayment.value = false;
        }
    }

    function resetRepaymentChoice(){
        setFieldValue('repaymentOption', undefined);
        emit('@close-loan-repayment-modal')
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