<template>
    <div v-show="!continueLoanRequestProcess">
        <KYC-Process v-if="!kycCompleted" v-show="continueKycProcess" @@stop-kyc-process="continueKycProcess = false" />

        <div v-show="!continueKycProcess || kycCompleted">
            <div class="mb-8 flex items-center justify-between">
                <div>
                    <p class="mb-1 text-lance-black text-xl leading-[26px] font-medium tracking-[-0.2px]">
                        Good afternoon, {{ `${userProfile?.firstName[0].toUpperCase()}${userProfile?.firstName.substring(1)}` }}
                    </p>
                </div>
                <div class="flex gap-4 items-center">
                    <NuxtLink to="/wallet" class="btn btn-secondary">Withdraw from wallet</NuxtLink>
                    <NuxtLink v-if="activeLoan" :to="'/loans'" class="btn btn-primary gap-4">
                        <span>Make a repayment</span>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.58044 9.771C3.58044 9.45458 3.81557 9.19309 4.12064 9.1517L4.20544 9.146H16.7054C17.0506 9.146 17.3304 9.42582 17.3304 9.771C17.3304 10.0874 17.0953 10.3489 16.7903 10.3903L16.7054 10.396H4.20544C3.86027 10.396 3.58044 10.1162 3.58044 9.771Z" fill="white"/>
                            <path d="M11.223 5.19356C10.9783 4.95001 10.9775 4.55428 11.221 4.30968C11.4425 4.08731 11.7896 4.0664 12.0347 4.24741L12.1049 4.30778L17.1466 9.32778C17.3696 9.54985 17.3899 9.89828 17.2075 10.1433L17.1466 10.2135L12.105 15.2344C11.8604 15.4779 11.4647 15.4771 11.2211 15.2325C10.9997 15.0102 10.9802 14.6629 11.1623 14.4186L11.2229 14.3486L15.8196 9.77042L11.223 5.19356Z" fill="white"/>
                        </svg>
                    </NuxtLink>
                    <button v-else @click="kycCompleted ? showLoanInstructions = true : showKycIncompleteModal = true" class="btn btn-primary gap-4">
                        <span>Request a Loan</span>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.58044 9.771C3.58044 9.45458 3.81557 9.19309 4.12064 9.1517L4.20544 9.146H16.7054C17.0506 9.146 17.3304 9.42582 17.3304 9.771C17.3304 10.0874 17.0953 10.3489 16.7903 10.3903L16.7054 10.396H4.20544C3.86027 10.396 3.58044 10.1162 3.58044 9.771Z" fill="white"/>
                            <path d="M11.223 5.19356C10.9783 4.95001 10.9775 4.55428 11.221 4.30968C11.4425 4.08731 11.7896 4.0664 12.0347 4.24741L12.1049 4.30778L17.1466 9.32778C17.3696 9.54985 17.3899 9.89828 17.2075 10.1433L17.1466 10.2135L12.105 15.2344C11.8604 15.4779 11.4647 15.4771 11.2211 15.2325C10.9997 15.0102 10.9802 14.6629 11.1623 14.4186L11.2229 14.3486L15.8196 9.77042L11.223 5.19356Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div
                @click="showKycSummary = true" v-if="!kycCompleted"
                class="mb-6 rounded-xl bg-white border border-solid border-lance-green-20 py-6 px-10 flex items-center justify-between cursor-pointer">
                <div class="flex gap-4 items-center">                    
                    <div class="w-16 h-16 rounded-full flex items-center justify-center relative">
                        <svg width="64" height="64" viewBox="0 0 64 64" class="absolute top-0 left-0">
                            <circle class="bg"
                              cx="32" cy="32" r="29" fill="none" stroke="rgba(109,151,105,0.40)" stroke-width="6"
                            ></circle>
                            <circle class="fg stroke-lance-green"
                              cx="32" cy="32" r="29" fill="none" stroke-width="6" :stroke-dasharray="`${kycCompletionCircumference} ${182.285714285714286 - kycCompletionCircumference}`"
                            ></circle>
                        </svg>
                        <p class="text-lance-secondary-green text-lg leading-[26px] font-medium">{{ kycCompletion }}%</p>
                    </div>

                    <div>
                        <p class="mb-2 text-[#1E1721] text-xl font-medium leading-[normal] tracking-[-0.2px]">
                            Please complete your KYC
                        </p>
                        <p class="text-[#656167]">Just start first   . . .</p>
                    </div>
                </div>
                <div>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.8885 16.2754C6.66661 16.0535 6.64644 15.7063 6.82799 15.4617L6.8885 15.3916L12.2796 10.0002L6.8885 4.60877C6.66661 4.38688 6.64644 4.03966 6.82799 3.79499L6.8885 3.72489C7.11039 3.503 7.45761 3.48283 7.70229 3.66437L7.77239 3.72489L13.6057 9.55822C13.8276 9.78011 13.8478 10.1273 13.6662 10.372L13.6057 10.4421L7.77239 16.2754C7.52831 16.5195 7.13258 16.5195 6.8885 16.2754Z" fill="black"/>
                    </svg>
                </div>
            </div>
            <div class="mb-6 flex gap-6">
                <div
                    class="p-6 pt-8 basis-[421px] rounded-xl border border-solid border-lance-green-20 bg-lance-green
                    bg-[url('/assets/img/active-loan-bg-gradient.svg')] bg-no-repeat bg-right grow"
                >
                    <p class="mb-8 text-[rgba(255,255,255,0.80)] font-medium">Next Repayment</p>
                    <div class="mb-4 pb-7 border-b border-solid border-[rgba(255,255,255,0.20)]">
                        <p class="mb-1 text-white text-[28px] leading-[36px] tracking-[0.28px] font-semibold">
                            N {{ activeLoan ? (activeLoan.monthlyRepaymentAmount).toLocaleString() : '0.00'}}
                        </p>
                        <p class="text-[rgba(255,255,255,0.90)] text-sm flex items-center gap-2">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0247 6.60303H2.14206C1.86606 6.60303 1.64206 6.37903 1.64206 6.10303C1.64206 5.82703 1.86606 5.60303 2.14206 5.60303H14.0247C14.3007 5.60303 14.5247 5.82703 14.5247 6.10303C14.5247 6.37903 14.3007 6.60303 14.0247 6.60303Z" fill="white" fill-opacity="0.9"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0478 9.20654C10.7718 9.20654 10.5451 8.98254 10.5451 8.70654C10.5451 8.43054 10.7658 8.20654 11.0418 8.20654H11.0478C11.3238 8.20654 11.5478 8.43054 11.5478 8.70654C11.5478 8.98254 11.3238 9.20654 11.0478 9.20654Z" fill="white" fill-opacity="0.9"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.08946 9.20654C7.81346 9.20654 7.58679 8.98254 7.58679 8.70654C7.58679 8.43054 7.80746 8.20654 8.08346 8.20654H8.08946C8.36546 8.20654 8.58946 8.43054 8.58946 8.70654C8.58946 8.98254 8.36546 9.20654 8.08946 9.20654Z" fill="white" fill-opacity="0.9"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.12498 9.20654C4.84898 9.20654 4.62164 8.98254 4.62164 8.70654C4.62164 8.43054 4.84298 8.20654 5.11898 8.20654H5.12498C5.40098 8.20654 5.62498 8.43054 5.62498 8.70654C5.62498 8.98254 5.40098 9.20654 5.12498 9.20654Z" fill="white" fill-opacity="0.9"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0478 11.7974C10.7718 11.7974 10.5451 11.5734 10.5451 11.2974C10.5451 11.0214 10.7658 10.7974 11.0418 10.7974H11.0478C11.3238 10.7974 11.5478 11.0214 11.5478 11.2974C11.5478 11.5734 11.3238 11.7974 11.0478 11.7974Z" fill="white" fill-opacity="0.9"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.08946 11.7974C7.81346 11.7974 7.58679 11.5734 7.58679 11.2974C7.58679 11.0214 7.80746 10.7974 8.08346 10.7974H8.08946C8.36546 10.7974 8.58946 11.0214 8.58946 11.2974C8.58946 11.5734 8.36546 11.7974 8.08946 11.7974Z" fill="white" fill-opacity="0.9"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.12498 11.7974C4.84898 11.7974 4.62164 11.5734 4.62164 11.2974C4.62164 11.0214 4.84298 10.7974 5.11898 10.7974H5.12498C5.40098 10.7974 5.62498 11.0214 5.62498 11.2974C5.62498 11.5734 5.40098 11.7974 5.12498 11.7974Z" fill="white" fill-opacity="0.9"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.776 3.8605C10.5 3.8605 10.276 3.6365 10.276 3.3605V1.1665C10.276 0.890504 10.5 0.666504 10.776 0.666504C11.052 0.666504 11.276 0.890504 11.276 1.1665V3.3605C11.276 3.6365 11.052 3.8605 10.776 3.8605Z" fill="white" fill-opacity="0.9"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.39059 3.8605C5.11459 3.8605 4.89059 3.6365 4.89059 3.3605V1.1665C4.89059 0.890504 5.11459 0.666504 5.39059 0.666504C5.66659 0.666504 5.89059 0.890504 5.89059 1.1665V3.3605C5.89059 3.6365 5.66659 3.8605 5.39059 3.8605Z" fill="white" fill-opacity="0.9"/>
                                <mask id="mask0_7513_4069" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="14" height="14">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.58038 1.71924H14.5804V14.9998H1.58038V1.71924Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_7513_4069)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.26101 2.7194C3.53234 2.7194 2.58034 3.6414 2.58034 5.3154V11.3481C2.58034 13.0587 3.53234 14.0001 5.26101 14.0001H10.8997C12.6283 14.0001 13.5803 13.0761 13.5803 11.3987V5.3154C13.583 4.49207 13.3617 3.85207 12.9223 3.41207C12.4703 2.95873 11.7737 2.7194 10.9057 2.7194H5.26101ZM10.8997 14.9999H5.26105C2.99105 14.9999 1.58038 13.6006 1.58038 11.3479V5.31524C1.58038 3.09657 2.99105 1.71924 5.26105 1.71924H10.9057C12.0451 1.71924 12.9871 2.06057 13.6304 2.70524C14.2551 3.33257 14.5837 4.23457 14.5804 5.31657V11.3986C14.5804 13.6199 13.1697 14.9999 10.8997 14.9999Z" fill="white" fill-opacity="0.9"/>
                                </g>
                            </svg>
                            <span>Due: {{ activeLoan ? new Date(activeLoan.dueDate).toLocaleDateString('en-GB', { day:"numeric", month:"short", year:"numeric" }) : '- -'}}</span>
                        </p>
                    </div>
                    <div class="mb-0.5 flex items-center justify-between text-[rgba(255,255,255,0.90)] text-sm">
                        <p>Paid: <span class="font-semibold">N {{ activeLoanTotalPaid.toLocaleString() }}</span></p>
                        <p>Total Loan Received : <span class="font-semibold">N {{ activeLoan ? (activeLoan.amount).toLocaleString() : '0'}}</span></p>
                    </div>
                    <div class="h-2 w-full rounded-lg bg-white" style="box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.10) inset;">
                        <div class="h-full rounded-lg" style="background: linear-gradient(90deg, #E8FF28 -2.03%, #09837F 101.29%);" :style="`width: ${percentageLoanPaid}%`"></div>
                    </div>
                </div>
                <div class="basis-[273px] py-8 px-6 flex flex-col justify-between rounded-xl bg-white border border-solid border-lance-green-10 grow">
                    <p class="text-lance-black-60 font-medium">Wallet Balance</p>
                    <p class="text-lance-black text-[28px] leading-8 font-semibold tracking-[-0.28px]">N {{ balance.toLocaleString() }}</p>
                </div>
                <div class="basis-[421px] py-8 px-6 rounded-xl bg-white border border-solid border-lance-green-10 grow">
                    <p class="mb-3 flex items-center justify-between">
                        <span class="text-[#0E0B10] text-xl leading-[26px] font-medium tracking-[-0.2px]">Credit Score</span>
                        <NuxtLink to="/settings?tab=credit-score" class="text-lance-green font-medium">Learn more</NuxtLink>
                    </p>
                    <p class="mb-[18.2px] text-lance-black-60 tracking-[-0.16px]">Your Lance credit score determines how much you</p>
                    <div class="w-[236px] mx-auto relative text-center pt-[63.8px]">
                        <svg width="237" height="238" viewBox="0 0 237 238" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-0">
                            <path d="M8.16219 120.883C5.58713 120.883 3.4899 118.795 3.59287 116.222C4.21109 100.774 7.89722 85.5867 14.4535 71.5511C21.6682 56.1059 32.1828 42.4312 45.2562 31.4908C58.3296 20.5504 73.6436 12.6107 90.1187 8.23135C105.09 4.25167 120.689 3.30015 136.004 5.41447C138.555 5.76662 140.241 8.19912 139.787 10.7339C139.333 13.2686 136.911 14.9449 134.359 14.6016C120.388 12.7223 106.168 13.6142 92.5143 17.2435C77.3572 21.2725 63.2684 28.577 51.2408 38.6422C39.2133 48.7073 29.5398 61.2881 22.9023 75.4977C16.9233 88.2976 13.5388 102.138 12.9261 116.222C12.8142 118.795 10.7372 120.883 8.16219 120.883Z" fill="#D22F2F"/>
                            <path d="M143.202 11.3818C143.737 8.86301 146.216 7.24581 148.711 7.8815C159.438 10.6142 169.722 14.8611 179.251 20.4941C181.468 21.8044 182.083 24.6995 180.685 26.862C179.287 29.0246 176.406 29.635 174.185 28.3324C165.615 23.3069 156.389 19.4966 146.771 17.0107C144.277 16.3663 142.666 13.9006 143.202 11.3818Z" fill="#FFAC5F"/>
                            <path d="M184.596 27.2601C186.141 25.2005 189.07 24.7765 191.067 26.4032C199.382 33.1792 206.722 41.0707 212.879 49.8539C214.357 51.9625 213.722 54.8533 211.556 56.2459C209.39 57.6385 206.514 57.005 205.028 54.9016C199.48 47.0449 192.899 39.9701 185.464 33.8681C183.474 32.2345 183.05 29.3197 184.596 27.2601Z" fill="#94B066"/>
                            <path d="M213.36 59.2431C215.51 57.8257 218.41 58.4149 219.741 60.6198C229.886 77.435 235.62 96.5437 236.406 116.167C236.51 118.74 234.413 120.829 231.837 120.829C229.262 120.829 227.185 118.74 227.073 116.168C226.298 98.3695 221.099 81.0426 211.948 65.757C210.626 63.5476 211.21 60.6605 213.36 59.2431Z" fill="#0A4F4D"/>
                            <path d="M21.3308 119.401C21.3308 119.401 29.4458 19.232 121.547 20.5998C213.649 21.9676 220.163 119.401 220.163 119.401" stroke="#041111" stroke-opacity="0.1" stroke-linejoin="round" stroke-dasharray="4 4"/>
                            <circle cx="14.531" cy="83.9932" r="7" fill="white" stroke="#D22F2F" stroke-width="6"/>
                        </svg>
                        <!-- <svg v-else width="237" height="238" viewBox="0 0 237 238" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-0">
                            <path d="M8.16219 121.006C5.58713 121.006 3.4899 118.917 3.59287 116.344C4.21109 100.896 7.89722 85.7093 14.4535 71.6737C21.6682 56.2285 32.1828 42.5537 45.2562 31.6133C58.3296 20.673 73.6436 12.7333 90.1187 8.3539C105.09 4.37423 120.689 3.42271 136.004 5.53702C138.555 5.88918 140.241 8.32168 139.787 10.8564C139.333 13.3912 136.911 15.0674 134.359 14.7242C120.388 12.8449 106.168 13.7368 92.5143 17.3661C77.3572 21.3951 63.2684 28.6996 51.2408 38.7647C39.2133 48.8299 29.5398 61.4107 22.9023 75.6203C16.9233 88.4201 13.5388 102.261 12.9261 116.345C12.8142 118.917 10.7372 121.006 8.16219 121.006Z" fill="#D22F2F"/>
                            <path d="M143.202 11.5044C143.737 8.98557 146.216 7.36837 148.711 8.00406C159.438 10.7367 169.722 14.9837 179.251 20.6166C181.468 21.927 182.083 24.822 180.685 26.9846C179.287 29.1472 176.406 29.7575 174.185 28.4549C165.615 23.4295 156.389 19.6191 146.771 17.1333C144.277 16.4889 142.666 14.0231 143.202 11.5044Z" fill="#FFAC5F"/>
                            <path d="M184.596 27.3826C186.141 25.323 189.07 24.899 191.067 26.5258C199.382 33.3018 206.722 41.1932 212.879 49.9764C214.357 52.085 213.722 54.9759 211.556 56.3685C209.39 57.7611 206.514 57.1276 205.028 55.0241C199.48 47.1674 192.899 40.0927 185.464 33.9907C183.474 32.357 183.05 29.4423 184.596 27.3826Z" fill="#94B066"/>
                            <path d="M213.36 59.3656C215.51 57.9482 218.41 58.5375 219.741 60.7423C229.886 77.5575 235.62 96.6662 236.406 116.289C236.51 118.862 234.413 120.951 231.837 120.951C229.262 120.952 227.185 118.863 227.073 116.29C226.298 98.492 221.099 81.1651 211.948 65.8795C210.626 63.6701 211.21 60.783 213.36 59.3656Z" fill="#0A4F4D"/>
                            <path d="M21.3308 119.524C21.3308 119.524 29.4458 19.3546 121.547 20.7224C213.649 22.0902 220.163 119.524 220.163 119.524" stroke="#041111" stroke-opacity="0.1" stroke-linejoin="round" stroke-dasharray="4 4"/>
                            <circle cx="222.531" cy="74.1162" r="7" fill="white" stroke="#0A4F4D" stroke-width="6"/>
                        </svg> -->
                        <p class="mb-1 text-lance-black text-xl font-semibold leading-6 tracking-[-0.2px]">{{ creditScore }}/1000</p>
                        <p class="py-0.5 px-4 rounded-[31px] bg-[rgba(210,47,47,0.04)] w-fit mx-auto text-sm text-[#D22F2F]">Poor</p>
                        <!-- <p class="py-0.5 px-6 rounded-[31px] bg-[rgba(10,79,77,0.04)] w-fit mx-auto text-sm text-lance-green">Excellent</p> -->
                    </div>
                </div>
            </div>
            <div class="flex gap-6">
                <div v-if="transactions.length" class="basis-[718px] rounded-xl pt-8 px-6 pb-4.5 border border-solid border-lance-blue-10 bg-white grow">
                    <p class="mb-2 text-[#0E0B10] text-xl font-medium leading-[26px] tracking-[-0.2px]">Recent Transactions</p>
                    <div class="bg-white">
                        <ul class="px-4 flex justify-between py-4 text-[#8C8890] text-sm leading-[24px]">
                            <li class="basis-[50%]">Transaction Type</li>
                            <li class="basis-[30%]">Amount</li>
                            <li class="basis-[20%] text-right">Transaction Date</li>
                        </ul>
                        <ul
                            @click="viewTransactionDetails(transaction)"
                            v-for="(transaction) in transactions" :key="transaction.id"
                            class="mb-2 flex justify-between items-center pt-[23px] pb-[15px] px-4 border-t
                            border-solid border-[rgba(3,87,238,0.05)] text-lance-black leading-[26px] cursor-pointer"
                        >
                            <li class="flex items-center gap-4 basis-[50%]">
                                <div class="flex items-center justify-center w-9 h-9 rounded-full bg-[rgba(10,79,77,0.05)]">
                                    <svg v-if="transaction.txnType == 'credit' || transaction.txnType == 'loan-repay'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8333 4.16634C10.8333 3.7061 10.4602 3.33301 9.99998 3.33301C9.53974 3.33301 9.16665 3.7061 9.16665 4.16634V9.16634H4.16665C3.70641 9.16634 3.33331 9.53944 3.33331 9.99967C3.33331 10.4599 3.70641 10.833 4.16665 10.833H9.16665V15.833C9.16665 16.2932 9.53974 16.6663 9.99998 16.6663C10.4602 16.6663 10.8333 16.2932 10.8333 15.833V10.833H15.8333C16.2936 10.833 16.6666 10.4599 16.6666 9.99967C16.6666 9.53944 16.2936 9.16634 15.8333 9.16634H10.8333V4.16634Z" fill="#0A4F4D"/>
                                    </svg>
                                    <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.16665 9.16699H4.16665C3.70641 9.16699 3.33331 9.54009 3.33331 10.0003C3.33331 10.4606 3.70641 10.8337 4.16665 10.8337H9.16665L10.8333 10.8337H15.8333C16.2936 10.8337 16.6666 10.4606 16.6666 10.0003C16.6666 9.54009 16.2936 9.16699 15.8333 9.16699H10.8333H9.16665Z" fill="#E70A3F"/>
                                    </svg>
                                </div>
                                <p>
                                    {{ transaction.txnTypeForUi }}
                                </p>
                            </li>
                            <li class="font-medium basis-[30%]">N {{ (transaction.amount/100).toLocaleString() }}</li>
                            <li class="basis-[20%] text-right">{{ new Date(transaction.createdAt).toLocaleDateString('en-GB', { day:"numeric", month:"short", year:"numeric" }) }}</li>
                        </ul>
                    </div>
                </div>
                <div v-if="activeLoan" class="basis-[421px] rounded-xl pt-[32.12px] px-6 pb-[45.88px] border border-solid border-lance-green-10 bg-white grow">
                    <p class="mb-6 flex items-center justify-between">
                        <span class="text-[#0E0B10] text-xl leading-[26px] font-medium tracking-[-0.2px]">Repayments</span>
                        <NuxtLink class="text-lance-green font-medium">Learn more</NuxtLink>
                    </p>
                    <ul>
                        <li v-for="(repayment, key) in activeLoan.schedule" :key="key" class="py-4 border-b border-solid border-lance-green-10 flex items-center justify-between">
                            <div>
                                <p class="mb-1 text-lance-black font-medium leading-[26px]">
                                    N{{ (repayment.amount).toLocaleString() }}
                                </p>
                                <p class="flex gap-2 items-center">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0247 6.7251H2.14203C1.86603 6.7251 1.64203 6.5011 1.64203 6.2251C1.64203 5.9491 1.86603 5.7251 2.14203 5.7251H14.0247C14.3007 5.7251 14.5247 5.9491 14.5247 6.2251C14.5247 6.5011 14.3007 6.7251 14.0247 6.7251Z" fill="#041111" fill-opacity="0.5"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0478 9.32861C10.7718 9.32861 10.5452 9.10461 10.5452 8.82861C10.5452 8.55261 10.7658 8.32861 11.0418 8.32861H11.0478C11.3238 8.32861 11.5478 8.55261 11.5478 8.82861C11.5478 9.10461 11.3238 9.32861 11.0478 9.32861Z" fill="#041111" fill-opacity="0.5"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.08952 9.32861C7.81352 9.32861 7.58685 9.10461 7.58685 8.82861C7.58685 8.55261 7.80752 8.32861 8.08352 8.32861H8.08952C8.36552 8.32861 8.58952 8.55261 8.58952 8.82861C8.58952 9.10461 8.36552 9.32861 8.08952 9.32861Z" fill="#041111" fill-opacity="0.5"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.12498 9.32861C4.84898 9.32861 4.62164 9.10461 4.62164 8.82861C4.62164 8.55261 4.84298 8.32861 5.11898 8.32861H5.12498C5.40098 8.32861 5.62498 8.55261 5.62498 8.82861C5.62498 9.10461 5.40098 9.32861 5.12498 9.32861Z" fill="#041111" fill-opacity="0.5"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0478 11.9199C10.7718 11.9199 10.5452 11.6959 10.5452 11.4199C10.5452 11.1439 10.7658 10.9199 11.0418 10.9199H11.0478C11.3238 10.9199 11.5478 11.1439 11.5478 11.4199C11.5478 11.6959 11.3238 11.9199 11.0478 11.9199Z" fill="#041111" fill-opacity="0.5"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.08952 11.9199C7.81352 11.9199 7.58685 11.6959 7.58685 11.4199C7.58685 11.1439 7.80752 10.9199 8.08352 10.9199H8.08952C8.36552 10.9199 8.58952 11.1439 8.58952 11.4199C8.58952 11.6959 8.36552 11.9199 8.08952 11.9199Z" fill="#041111" fill-opacity="0.5"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.12498 11.9199C4.84898 11.9199 4.62164 11.6959 4.62164 11.4199C4.62164 11.1439 4.84298 10.9199 5.11898 10.9199H5.12498C5.40098 10.9199 5.62498 11.1439 5.62498 11.4199C5.62498 11.6959 5.40098 11.9199 5.12498 11.9199Z" fill="#041111" fill-opacity="0.5"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.776 3.98306C10.5 3.98306 10.276 3.75906 10.276 3.48306V1.28906C10.276 1.01306 10.5 0.789062 10.776 0.789062C11.052 0.789062 11.276 1.01306 11.276 1.28906V3.48306C11.276 3.75906 11.052 3.98306 10.776 3.98306Z" fill="#041111" fill-opacity="0.5"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.39056 3.98306C5.11456 3.98306 4.89056 3.75906 4.89056 3.48306V1.28906C4.89056 1.01306 5.11456 0.789062 5.39056 0.789062C5.66656 0.789062 5.89056 1.01306 5.89056 1.28906V3.48306C5.89056 3.75906 5.66656 3.98306 5.39056 3.98306Z" fill="#041111" fill-opacity="0.5"/>
                                        <mask id="mask0_3412_17963" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="14" height="15">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.58038 1.8418H14.5804V15.1224H1.58038V1.8418Z" fill="white"/>
                                        </mask>
                                        <g mask="url(#mask0_3412_17963)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.26104 2.84172C3.53237 2.84172 2.58037 3.76372 2.58037 5.43772V11.4704C2.58037 13.181 3.53237 14.1224 5.26104 14.1224H10.8997C12.6284 14.1224 13.5804 13.1984 13.5804 11.521V5.43772C13.583 4.61438 13.3617 3.97438 12.9224 3.53438C12.4704 3.08105 11.7737 2.84172 10.9057 2.84172H5.26104ZM10.8997 15.1225H5.26105C2.99105 15.1225 1.58038 13.7231 1.58038 11.4705V5.4378C1.58038 3.21913 2.99105 1.8418 5.26105 1.8418H10.9057C12.0451 1.8418 12.9871 2.18313 13.6304 2.8278C14.2551 3.45513 14.5837 4.35713 14.5804 5.43913V11.5211C14.5804 13.7425 13.1697 15.1225 10.8997 15.1225Z" fill="#041111" fill-opacity="0.5"/>
                                        </g>
                                    </svg>
                                    <span class="text-lance-black-50 text-sm leading-5">
                                        Due: {{ new Date(repayment.dueDate).toLocaleDateString('en-GB', { day:"numeric", month:"short", year:"numeric" }) }}
                                    </span>
                                </p>
                            </div>
                            <p v-if="repayment.status === 'paid'" class="w-[81px] h-8 rounded-[31px] bg-[rgba(12,180,59,0.04)] flex items-center justify-center py-1">
                                <span class="text-[#0CB43B] text-sm font-medium">Paid</span>
                            </p>
                            <div v-else>
                                <div v-if="Date.now() < new Date(repayment.dueDate).getTime()" class="w-[81px] py-1 text-center rounded-[31px] bg-lance-black-5 text-lance-black-50 text-sm font-medium leading-6">
                                    Upcoming
                                </div>
                                <div v-else class="w-[81px] py-1 text-center rounded-[31px] border border-solid border-[#E70A3F] bg-[rgba(231,10,63,0.05)] text-[#E70A3F] text-sm font-medium leading-6">
                                    Due
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <KYC-SummaryModal
            v-if="!kycCompleted" v-show="showKycSummary"
            @@close-kyc-summary-modal="showKycSummary = false"
            @@continue-kyc-process="showKycProcess"
        />
        <Wallet-TransactionDetailsModal @@closeTransactionDetailsModal="showSelectedTransaction = false" v-show="showSelectedTransaction" :transaction="selectedTransaction" />
        <Loans-Instructions
            v-show="showLoanInstructions && loanSettings"
            :loan-settings="loanSettings"
            @@close-loan-instructions-modal="showLoanInstructions = false"
            @@continue-loan-request-process="showLoanRequestProcess"
        />
        <KYC-IncompleteKycNotificationModal v-if="!kycCompleted" v-show="showKycIncompleteModal" @@proceed-to-kyc-process="showKycIncompleteModal = false; showKycSummary = true;" @@close-kyc-incomplete-modal="showKycIncompleteModal = false;" />
    </div>
    <Loans-RequestProcess v-show="continueLoanRequestProcess" @@close-loan-application-modal="continueLoanRequestProcess = false" :loan-settings="loanSettings" />
</template>
<style>
    circle.fg {
    transform: rotate(-90deg);
    transform-origin: 32px 32px;
    }
</style>
<script setup lang="ts">

    definePageMeta({
        middleware: 'auth',
        layout: 'dashboard'
    });

    const { kycItems, kycCompleted } = storeToRefs(useKYCStore());

    const { balance, transactions } = storeToRefs(useWalletStore());

    const { userProfile } = storeToRefs(useUserStore());

    const showLoanInstructions: Ref<boolean> = ref(false);
    
    const continueLoanRequestProcess: Ref<boolean> = ref(false);

    function showLoanRequestProcess(){
        showLoanInstructions.value = false;
        continueLoanRequestProcess.value = true;
    }


    const showKycIncompleteModal: Ref<boolean> = ref(false);

    const kycCompletion = computed(() => {

        let completion = 0;

        if(kycItems.value.account.completed){
            completion = completion + 20;
        }
        if(kycItems.value.personalDetails.completed){
            completion = completion + 20;
        }
        if(kycItems.value.kyc.completed){
            completion = completion + 20;
        }
        if(kycItems.value.id.completed){
            completion = completion + 20;
        }
        if(kycItems.value.linkedBankAccount.completed){
            completion = completion + 20;
        }

        return completion;
    });

    const kycCompletionCircumference = computed(() => {
        return (kycCompletion.value/100) * 2 * (22/7) * 29;
    })
    
    const showKycSummary: Ref<boolean> = ref(false);

    const continueKycProcess: Ref<boolean> = ref(false);

    function showKycProcess(){
        showKycSummary.value = false;
        continueKycProcess.value = true;
    }

    const { loanSettings } = storeToRefs(useLoanHistoryStore());
    const { activeLoan, percentageLoanPaid, activeLoanTotalPaid } = storeToRefs(useLoanHistoryStore());
    
    onMounted(()=>{
        const route = useRoute();
        if(route.query.start_kyc == 'true' && !kycCompleted.value) {
            showKycSummary.value = true
        }

        setTimeout(async() => {
            if(!kycCompleted.value){
                useHead({
                    script: [
                        !kycCompleted.value ? { src: 'https://widget.dojah.io/widget.js', body: true } : ''
                    ]
                });
            }
        }, 1000);

    });
    
    const creditScore = computed(() => {
        return 98;
    })


    const selectedTransaction: Ref<null | Transaction> = ref(null);

    const showSelectedTransaction: Ref<boolean> = ref(false);

    function viewTransactionDetails(transaction: Transaction){
        selectedTransaction.value = transaction;
        showSelectedTransaction.value = true;
    }


</script>