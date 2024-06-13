<template>
    <div>
        <p class="mb-[30px] text-lance-black text-xl leading-[26px] font-medium tracking-[-0.2px]">Loan Request</p>
        <div class="rounded-xl bg-white border border-solid border-lance-black-10 p-20">
            <div v-show="activeTab == 'request'" class="flex flex-col gap-6 w-[376px] mx-auto">
                <div>
                    <p class="mb-0.5 text-[#1E1721] font-aventa text-2xl tracking-[-0.24px] font-semibold">
                        Apply for a Loan
                    </p>
                    <p class="text-lance-black-60 text-sm leading-[24px]">
                        Complete your loan application details below with the required information.
                    </p>
                </div>
                <div>
                    <Form-MoneyInput
                        placeholder="Amount" label="Amount" v-model="loanRequestForm.loanAmount[0].value" v-bind="loanRequestForm.loanAmount[1].value"
                        :error="loanRequestFormErrors.loanAmount" class="mb-4" @@money-changed="calculateLoanSummary"
                    />
                    <Form-SelectInput
                        :options="loanDurationListOptions" placeholder="Duration in Months" label="Duration in Months" @@select-change="calculateLoanSummary"
                        v-model="loanRequestForm.loanDuration[0].value" v-bind="loanRequestForm.loanDuration[1].value" :error="loanRequestFormErrors.loanDuration"
                    />
                </div>
                <div v-show="loanSummary">
                    <div class="mb-1 py-2 px-4 text-center rounded bg-[#F2F7F7]">
                        <p class="mb-0.5 text-lance-green text-[13px] leading-[20.8px]">Total Repayment</p>
                        <p class="text-lance-black text-lg font-medium leading-[27px]">N {{ (loanSummary?.totalRepaymentAmount)?.toLocaleString() }}</p>
                    </div>
                    <div class="rounded-[17px] bg-[#EFFFD4] flex items-center gap-2 p-0.5 justify-center">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.24703 1.77257C3.43483 1.77257 1.14703 4.06037 1.14703 6.87257C1.14703 9.68477 3.43483 11.9726 6.24703 11.9726C9.05923 11.9726 11.347 9.68477 11.347 6.87257C11.347 4.06037 9.05923 1.77257 6.24703 1.77257ZM6.24707 12.8726C2.93867 12.8726 0.24707 10.181 0.24707 6.87256C0.24707 3.56416 2.93867 0.872559 6.24707 0.872559C9.55547 0.872559 12.2471 3.56416 12.2471 6.87256C12.2471 10.181 9.55547 12.8726 6.24707 12.8726Z" fill="#0A4F4D"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25312 6.1986C6.50152 6.1986 6.70313 6.4002 6.70313 6.6486L6.70312 9.3C6.70312 9.5484 6.50152 9.75 6.25312 9.75C6.00472 9.75 5.80312 9.5484 5.80312 9.3L5.80312 6.6486C5.80312 6.4002 6.00472 6.1986 6.25312 6.1986Z" fill="#0A4F4D"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.24417 4.14497C6.57597 4.14497 6.84717 4.41317 6.84717 4.74497C6.84717 5.07677 6.58137 5.34497 6.25017 5.34497H6.24417C5.91237 5.34497 5.64417 5.07677 5.64417 4.74497C5.64417 4.41317 5.91237 4.14497 6.24417 4.14497Z" fill="#0A4F4D"/>
                        </svg>
                        <p class="text-lance-black-70 text-[13px] leading-[20.8px]">
                            Interest Rate: <span class="text-lance-green font-medium">{{ loanSummary?.rate }}%</span>
                        </p>
                    </div>
                </div>
                <button @click="activeTab = 'summary'" class="btn btn-primary" :disabled="!loanRequestFormFilled || !loanSummary">Next</button>
            </div>

            <div v-show="activeTab == 'summary'" class="flex flex-col gap-6 w-[386px] mx-auto">
                <div>
                    <p class="mb-0.5 text-[#1E1721] font-aventa text-2xl tracking-[-0.24px] font-semibold">
                        Loan Summary
                    </p>
                    <p class="text-lance-black-60 text-sm leading-[24px]">
                        Confirm your loan application details.
                    </p>
                </div>
                <div>
                    <ul class="p-6 rounded-lg border border-solid border-lance-black bg-[rgba(236,255,77,0.05)]">
                        <li class="flex items-center justify-between pb-4 border-b border-solid border-b-lance-green-5">
                            <p class="text-lance-black-70 text-sm leading-[21px] flex items-center gap-2">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.16892 5.75292C8.14225 5.75292 8.11559 5.75625 8.08892 5.76292C5.61392 6.37208 3.60059 9.05375 3.60059 11.7404C3.60059 15.1204 6.35059 17.8704 9.73142 17.8704C12.7789 17.8704 15.3256 15.6996 15.7873 12.7079C15.7906 12.6829 15.8023 12.6104 15.7339 12.5296C15.6689 12.4538 15.5656 12.4088 15.4573 12.4088C14.2814 12.4088 13.3839 12.4354 12.6831 12.4554C10.9864 12.5063 10.2848 12.5254 9.59142 12.0113C8.54642 11.2371 8.45809 9.90708 8.45809 5.99542C8.45809 5.92542 8.42809 5.86708 8.36809 5.82042C8.31225 5.77625 8.24142 5.75292 8.16892 5.75292ZM9.73142 19.1204C5.66142 19.1204 2.35059 15.8096 2.35059 11.7404C2.35059 8.51375 4.79059 5.28708 7.78975 4.54875C8.25809 4.43458 8.76142 4.54125 9.13975 4.83625C9.50059 5.11958 9.70809 5.54208 9.70809 5.99542C9.70809 9.64958 9.83142 10.6329 10.3356 11.0071C10.6664 11.2513 11.1198 11.2488 12.6473 11.2063C13.3573 11.1854 14.2664 11.1588 15.4573 11.1588C15.9323 11.1588 16.3798 11.3621 16.6831 11.7163C16.9648 12.0454 17.0881 12.4754 17.0231 12.8988C16.4664 16.5029 13.3998 19.1204 9.73142 19.1204Z" fill="#041111" fill-opacity="0.5"/>
                                    <mask id="mask0_3171_14312" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="11" y="1" width="9" height="9">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0786 1.33423H19.7611V9.90864H11.0786V1.33423Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_3171_14312)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3592 2.58568C12.2676 4.68485 12.4034 7.39651 12.4667 8.47068C12.4701 8.53485 12.5167 8.58151 12.5801 8.58485C13.4367 8.63401 16.3884 8.77068 18.5109 8.45818C18.5159 7.28818 17.7151 5.70151 16.5092 4.49651C15.2726 3.26151 13.8092 2.58568 12.3776 2.58568H12.3592ZM15.1126 9.90901C14.0209 9.90901 13.0601 9.86485 12.5076 9.83318C11.8126 9.79235 11.2592 9.23818 11.2192 8.54318C11.1542 7.44151 11.0134 4.64235 11.1134 2.47735C11.1409 1.84818 11.6492 1.34735 12.2709 1.33651C14.0517 1.28485 15.8892 2.11151 17.3926 3.61235C18.8576 5.07651 19.7876 7.00068 19.7609 8.51485C19.7509 9.10568 19.3217 9.59901 18.7417 9.68651C17.6101 9.85735 16.2851 9.90901 15.1126 9.90901Z" fill="#041111" fill-opacity="0.5"/>
                                    </g>
                                </svg>
                                <span>Loan Amount</span>
                            </p>
                            <p class="text-lance-black">N {{ (loanRequestFormValues.loanAmount)?.toLocaleString() }}</p>
                        </li>
                        <li class="flex items-center justify-between py-4 border-b border-solid border-b-lance-green-5">
                            <p class="text-lance-black-70 text-sm leading-[21px] flex items-center gap-2">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.69704 13.8361C6.56371 13.8361 6.42954 13.7936 6.31621 13.7069C6.04288 13.4961 5.99121 13.1036 6.20204 12.8303L8.69621 9.58859C8.79788 9.45609 8.94871 9.37026 9.11371 9.34942C9.28204 9.32776 9.44704 9.37442 9.57788 9.47859L11.9279 11.3244L13.9837 8.67192C14.1954 8.39776 14.587 8.34692 14.8604 8.56026C15.1337 8.77192 15.1837 9.16442 14.972 9.43692L12.5304 12.5869C12.4287 12.7186 12.2787 12.8044 12.1137 12.8244C11.947 12.8469 11.782 12.7986 11.6504 12.6961L9.30204 10.8511L7.19288 13.5919C7.06954 13.7519 6.88454 13.8361 6.69704 13.8361Z" fill="#041111" fill-opacity="0.5"/>
                                    <mask id="mask0_3171_14318" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="15" y="2" width="5" height="5">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0962 2.16675H19.5495V6.62083H15.0962V2.16675Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_3171_14318)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3229 3.41675C16.7845 3.41675 16.3462 3.85425 16.3462 4.39341C16.3462 4.93175 16.7845 5.37091 17.3229 5.37091C17.8612 5.37091 18.2995 4.93175 18.2995 4.39341C18.2995 3.85425 17.8612 3.41675 17.3229 3.41675ZM17.3229 6.62091C16.0954 6.62091 15.0962 5.62175 15.0962 4.39341C15.0962 3.16508 16.0954 2.16675 17.3229 2.16675C18.5512 2.16675 19.5495 3.16508 19.5495 4.39341C19.5495 5.62175 18.5512 6.62091 17.3229 6.62091Z" fill="#041111" fill-opacity="0.5"/>
                                    </g>
                                    <mask id="mask1_3171_14318" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="2" width="17" height="18">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3501 2.86841H18.9017V19.4192H2.3501V2.86841Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask1_3171_14318)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2109 19.4192H7.04093C4.2351 19.4192 2.3501 17.4484 2.3501 14.5151V7.78008C2.3501 4.84257 4.2351 2.86841 7.04093 2.86841H13.0976C13.4426 2.86841 13.7226 3.14841 13.7226 3.49341C13.7226 3.83841 13.4426 4.11841 13.0976 4.11841H7.04093C4.95093 4.11841 3.6001 5.55507 3.6001 7.78008V14.5151C3.6001 16.7692 4.91843 18.1692 7.04093 18.1692H14.2109C16.3009 18.1692 17.6518 16.7351 17.6518 14.5151V8.64924C17.6518 8.30424 17.9318 8.02424 18.2768 8.02424C18.6218 8.02424 18.9018 8.30424 18.9018 8.64924V14.5151C18.9018 17.4484 17.0168 19.4192 14.2109 19.4192Z" fill="#041111" fill-opacity="0.5"/>
                                    </g>
                                </svg>
                                <span>Interest Rate ({{ loanSummary?.rate }}%)</span>
                            </p>
                            <p class="text-lance-black">N {{ ((loanSummary?.totalRepaymentAmount || 0) - loanRequestFormValues.loanAmount).toLocaleString() }}</p>
                        </li>
                        <li class="flex items-center justify-between py-4 border-b border-solid border-b-lance-green-5">
                            <p class="text-lance-black-70 text-sm leading-[21px] flex items-center gap-2">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.69704 13.8361C6.56371 13.8361 6.42954 13.7936 6.31621 13.7069C6.04288 13.4961 5.99121 13.1036 6.20204 12.8303L8.69621 9.58859C8.79788 9.45609 8.94871 9.37026 9.11371 9.34942C9.28204 9.32776 9.44704 9.37442 9.57788 9.47859L11.9279 11.3244L13.9837 8.67192C14.1954 8.39776 14.587 8.34692 14.8604 8.56026C15.1337 8.77192 15.1837 9.16442 14.972 9.43692L12.5304 12.5869C12.4287 12.7186 12.2787 12.8044 12.1137 12.8244C11.947 12.8469 11.782 12.7986 11.6504 12.6961L9.30204 10.8511L7.19288 13.5919C7.06954 13.7519 6.88454 13.8361 6.69704 13.8361Z" fill="#041111" fill-opacity="0.5"/>
                                    <mask id="mask0_3171_14318" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="15" y="2" width="5" height="5">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0962 2.16675H19.5495V6.62083H15.0962V2.16675Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_3171_14318)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3229 3.41675C16.7845 3.41675 16.3462 3.85425 16.3462 4.39341C16.3462 4.93175 16.7845 5.37091 17.3229 5.37091C17.8612 5.37091 18.2995 4.93175 18.2995 4.39341C18.2995 3.85425 17.8612 3.41675 17.3229 3.41675ZM17.3229 6.62091C16.0954 6.62091 15.0962 5.62175 15.0962 4.39341C15.0962 3.16508 16.0954 2.16675 17.3229 2.16675C18.5512 2.16675 19.5495 3.16508 19.5495 4.39341C19.5495 5.62175 18.5512 6.62091 17.3229 6.62091Z" fill="#041111" fill-opacity="0.5"/>
                                    </g>
                                    <mask id="mask1_3171_14318" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="2" width="17" height="18">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3501 2.86841H18.9017V19.4192H2.3501V2.86841Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask1_3171_14318)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2109 19.4192H7.04093C4.2351 19.4192 2.3501 17.4484 2.3501 14.5151V7.78008C2.3501 4.84257 4.2351 2.86841 7.04093 2.86841H13.0976C13.4426 2.86841 13.7226 3.14841 13.7226 3.49341C13.7226 3.83841 13.4426 4.11841 13.0976 4.11841H7.04093C4.95093 4.11841 3.6001 5.55507 3.6001 7.78008V14.5151C3.6001 16.7692 4.91843 18.1692 7.04093 18.1692H14.2109C16.3009 18.1692 17.6518 16.7351 17.6518 14.5151V8.64924C17.6518 8.30424 17.9318 8.02424 18.2768 8.02424C18.6218 8.02424 18.9018 8.30424 18.9018 8.64924V14.5151C18.9018 17.4484 17.0168 19.4192 14.2109 19.4192Z" fill="#041111" fill-opacity="0.5"/>
                                    </g>
                                </svg>
                                <span>Processing Fee</span>
                            </p>
                            <p class="text-lance-black">N {{ loanSummary?.processingFee.toLocaleString() }}</p>
                        </li>
                        <li class="flex items-center justify-between py-4 border-b border-solid border-b-lance-green-5">
                            <p class="text-lance-black-70 text-sm leading-[21px] flex items-center gap-2">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6834 3.41675C6.7776 3.41675 3.6001 6.59425 3.6001 10.5001C3.6001 14.4059 6.7776 17.5834 10.6834 17.5834C14.5893 17.5834 17.7668 14.4059 17.7668 10.5001C17.7668 6.59425 14.5893 3.41675 10.6834 3.41675ZM10.6834 18.8334C6.08843 18.8334 2.3501 15.0951 2.3501 10.5001C2.3501 5.90508 6.08843 2.16675 10.6834 2.16675C15.2784 2.16675 19.0168 5.90508 19.0168 10.5001C19.0168 15.0951 15.2784 18.8334 10.6834 18.8334Z" fill="#041111" fill-opacity="0.5"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.543 13.5773C13.4339 13.5773 13.3239 13.5489 13.223 13.4898L10.0814 11.6156C9.89303 11.5023 9.77637 11.2981 9.77637 11.0781V7.03809C9.77637 6.69309 10.0564 6.41309 10.4014 6.41309C10.7472 6.41309 11.0264 6.69309 11.0264 7.03809V10.7231L13.8639 12.4148C14.1597 12.5923 14.2572 12.9756 14.0805 13.2723C13.963 13.4681 13.7555 13.5773 13.543 13.5773Z" fill="#041111" fill-opacity="0.5"/>
                                </svg>
                                <span>Duration</span>
                            </p>
                            <p class="text-lance-black">{{ loanSummary?.tenure }} months</p>
                        </li>
                        <li class="flex items-center justify-between pt-4">
                            <p class="text-lance-black-70 text-sm leading-[21px] flex items-center gap-2">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.69704 13.8361C6.56371 13.8361 6.42954 13.7936 6.31621 13.7069C6.04288 13.4961 5.99121 13.1036 6.20204 12.8303L8.69621 9.58859C8.79788 9.45609 8.94871 9.37026 9.11371 9.34942C9.28204 9.32776 9.44704 9.37442 9.57788 9.47859L11.9279 11.3244L13.9837 8.67192C14.1954 8.39776 14.587 8.34692 14.8604 8.56026C15.1337 8.77192 15.1837 9.16442 14.972 9.43692L12.5304 12.5869C12.4287 12.7186 12.2787 12.8044 12.1137 12.8244C11.947 12.8469 11.782 12.7986 11.6504 12.6961L9.30204 10.8511L7.19288 13.5919C7.06954 13.7519 6.88454 13.8361 6.69704 13.8361Z" fill="#041111" fill-opacity="0.5"/>
                                    <mask id="mask0_3171_14318" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="15" y="2" width="5" height="5">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0962 2.16675H19.5495V6.62083H15.0962V2.16675Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_3171_14318)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3229 3.41675C16.7845 3.41675 16.3462 3.85425 16.3462 4.39341C16.3462 4.93175 16.7845 5.37091 17.3229 5.37091C17.8612 5.37091 18.2995 4.93175 18.2995 4.39341C18.2995 3.85425 17.8612 3.41675 17.3229 3.41675ZM17.3229 6.62091C16.0954 6.62091 15.0962 5.62175 15.0962 4.39341C15.0962 3.16508 16.0954 2.16675 17.3229 2.16675C18.5512 2.16675 19.5495 3.16508 19.5495 4.39341C19.5495 5.62175 18.5512 6.62091 17.3229 6.62091Z" fill="#041111" fill-opacity="0.5"/>
                                    </g>
                                    <mask id="mask1_3171_14318" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="2" width="17" height="18">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3501 2.86841H18.9017V19.4192H2.3501V2.86841Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask1_3171_14318)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2109 19.4192H7.04093C4.2351 19.4192 2.3501 17.4484 2.3501 14.5151V7.78008C2.3501 4.84257 4.2351 2.86841 7.04093 2.86841H13.0976C13.4426 2.86841 13.7226 3.14841 13.7226 3.49341C13.7226 3.83841 13.4426 4.11841 13.0976 4.11841H7.04093C4.95093 4.11841 3.6001 5.55507 3.6001 7.78008V14.5151C3.6001 16.7692 4.91843 18.1692 7.04093 18.1692H14.2109C16.3009 18.1692 17.6518 16.7351 17.6518 14.5151V8.64924C17.6518 8.30424 17.9318 8.02424 18.2768 8.02424C18.6218 8.02424 18.9018 8.30424 18.9018 8.64924V14.5151C18.9018 17.4484 17.0168 19.4192 14.2109 19.4192Z" fill="#041111" fill-opacity="0.5"/>
                                    </g>
                                </svg>
                                <span>Repayment</span>
                            </p>
                            <p class="text-lance-black">N {{ (loanSummary?.monthlyPaymentAmount)?.toLocaleString() }} monthly</p>
                        </li>
                    </ul>
                    <div class="mt-4 p-6 rounded-lg border border-solid border-lance-black bg-[rgba(236,255,77,0.05)]">
                        <div class="flex items-center justify-between">
                            <p class="text-lance-black-70 text-sm leading-[21px] flex items-center gap-2">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_3171_14343" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="3" width="17" height="17">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3501 3H18.5993V19.2492H2.3501V3Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_3171_14343)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.68755 12.8479L12.7351 17.7921C12.8684 18.0088 13.0767 18.0063 13.1609 17.9946C13.2451 17.9829 13.4476 17.9313 13.5209 17.6854L17.3317 4.81461C17.3984 4.58711 17.2759 4.43211 17.2209 4.37711C17.1676 4.32211 17.0151 4.20461 16.7942 4.26711L3.91422 8.03877C3.67005 8.11044 3.61672 8.31544 3.60505 8.39961C3.59339 8.48544 3.59005 8.69794 3.80589 8.83377L8.80672 11.9613L13.2251 7.49627C13.4676 7.25127 13.8634 7.24877 14.1092 7.49127C14.3551 7.73377 14.3567 8.13044 14.1142 8.37544L9.68755 12.8479ZM13.0959 19.2496C12.5159 19.2496 11.9842 18.9546 11.6709 18.4479L8.44005 13.2054L3.14339 9.89294C2.57255 9.53544 2.27422 8.89877 2.36672 8.22961C2.45839 7.56044 2.91755 7.02877 3.56255 6.83961L16.4426 3.06794C17.0351 2.89461 17.6701 3.05877 18.1067 3.49377C18.5434 3.93294 18.7059 4.57461 18.5292 5.16961L14.7184 18.0396C14.5276 18.6871 13.9942 19.1446 13.3267 19.2338C13.2484 19.2438 13.1726 19.2496 13.0959 19.2496Z" fill="#041111" fill-opacity="0.5"/>
                                    </g>
                                </svg>
                                <span>Total Repayment</span>
                            </p>
                            <p class="text-lance-green text-2xl font-bold leading-[30px]">
                                N{{ (loanSummary?.totalRepaymentAmount)?.toLocaleString() }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-[14px]">
                    <button @click="activeTab = 'request'" class="btn btn-tertiary w-full" :disabled="submittingLoanApplication">Back</button>
                    <button @click="submitLoanApplication" class="btn btn-primary w-full" :disabled="submittingLoanApplication">Submit Request</button>
                </div>
            </div>
        </div>

        <Loans-SuccessfulLoanApplicationModal v-if="loanApplicationSuccess" @@close-loan-application-modal="emit('@close-loan-application-modal')" />
    </div>
</template>

<script setup lang="ts">

    import * as yup from 'yup';

    const { fetchLoanHistory } = useLoanHistoryStore();

    const props = defineProps<{
        loanSettings?: {
            "defaultRate": number,
            "minRate": number,
            "maxRate": number,
            "minDuration": number,
            "maxDuration": number,
            "processingFee": number
        } | null
    }>();

    const activeTab: Ref<string> = ref('request');

    const { values: loanRequestFormValues, errors: loanRequestFormErrors, defineField } = useForm({
        validationSchema: yup.object({
            loanAmount: yup.number().required().typeError('Loan amount is required').label('Loan Amount'),
            loanDuration: yup.number().required().label('Loan Duration')
        })
    });

    const loanRequestForm = {
        loanAmount: defineField('loanAmount'),
        loanDuration: defineField('loanDuration')
    };

    const loanDurationListOptions = computed(() => {
        const totalMonthPeriod = props.loanSettings?.maxDuration ? props.loanSettings.maxDuration/30 : 1;

        let listArray = [];

        for (let i = 1; i <= totalMonthPeriod; i++) {
            listArray.push({
                label: i+' month',
                value: i.toString()
            });
        }
        return listArray;
    })
    
    const loanRequestFormFilled = computed(() => {
        return loanRequestFormValues.loanAmount && !loanRequestFormErrors.value.loanAmount &&
        loanRequestFormValues.loanDuration && !loanRequestFormErrors.value.loanDuration;
    });

    const submittingLoanApplication: Ref<boolean> = ref(false);

    const loanApplicationSuccess: Ref<boolean> = ref(false);

    const { apiURL } = useRuntimeConfig().public;

    const { data: { value: jwt } } = await useFetch('/api/token');

    const loanSummary: Ref<{
        "monthlyPaymentAmount": number,
        "totalRepaymentAmount": number,
        "rate": number,
        "tenure": number,
        "processingFee": number
    } | null> = ref(null);
    
    async function calculateLoanSummary(){
        if(loanRequestFormFilled.value){
            loanSummary.value = null;
            const { data: { value: result }, error } = await useFetch(`${apiURL}/v1/loans/summary?principal=${loanRequestFormValues.loanAmount}&tenure=${loanRequestFormValues.loanDuration}`,{
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwt.token}`
                }
            });
    
            if(result){
                if((result as any).success && !(result as any).error){
                    loanSummary.value = (result as any).data;
                }
            }else if(error){
                // console.log(error.value?.data);
            }
        }
    }
        
    async function submitLoanApplication(){

        submittingLoanApplication.value = true;
        

        const { data: { value: result }, error } = await useFetch(`${apiURL}/v1/loans`, {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${jwt?.token}`
            },
            body: {
                "source": "web",
                "amount": parseInt(loanRequestFormValues.loanAmount),
                "tenure": parseInt(loanRequestFormValues.loanDuration)
            }
        });

        if(result){
            if((result as any).success && !(result as any).error){
                loanApplicationSuccess.value = true;
                submittingLoanApplication.value = false;
                fetchLoanHistory(jwt?.token, apiURL);
            }
        }else if(error){
            // console.log(error.value?.data);
        }
    }


    const emit = defineEmits<{
        '@close-loan-application-modal': []
    }>();

</script>