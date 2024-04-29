<template>
    <div>
        <p class="mb-[30px] text-lance-black text-xl leading-[26px] font-medium tracking-[-0.2px]">Loan Offer</p>
        <div class="p-10 rounded-xl bg-white">
            <div class="flex flex-col gap-6 w-[376px] mx-auto">
                <div
                    class="p-4 rounded border border-solid"
                    :class="notification?.approved ? 'border-lance-green bg-lance-green-5' : 'border-[#5D242D] bg-[rgba(93,36,45,0.05)]'"
                >
                    <p v-if="notification?.approved" class="text-lance-green text-sm">
                        Your offer has been accepted and is valid for <span class="text-lance-black font-medium">24 hours</span>.
                    </p>
                    <p v-else class="text-[#5D242D]">Your loan offer was not approved.</p>
                </div>

                <div v-if="notification?.approved" class="rounded-lg border border-solid border-lance-black bg-[rgba(236,255,77,0.05)]">
                    <div class="p-6 bg-lance-green-5 text-center">
                        <p class="mb-1 text-lance-black-50 text-sm">Total Repayment Amount</p>
                        <p class="text-lance-green text-xl font-semibold leading-[30px]">N{{ (notification?.loan.loanAmount)?.toLocaleString() }}</p>
                    </div>
                    <ul class="pt-8 pb-6 px-4">
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
                            <p class="text-lance-black">N{{ (notification?.loan.loanAmount)?.toLocaleString() }}</p>
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
                                <span>Interest Rate (25%)</span>
                            </p>
                            <p class="text-lance-black">N{{ totalInterest.toLocaleString() }}</p>
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
                                <span>Processing Fee (2%)</span>
                            </p>
                            <p class="text-lance-black">N{{ processingFee.toLocaleString() }}</p>
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
                                <span>Repayment</span>
                            </p>
                            <p class="text-lance-black">N {{ (totalRepayment/notification.loan.loanDuration).toLocaleString() }} monthly</p>
                        </li>
                        <li class="flex items-center justify-between py-4 border-b border-solid border-b-lance-green-5">
                            <p class="text-lance-black-70 text-sm leading-[21px] flex items-center gap-2">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6834 3.41675C6.7776 3.41675 3.6001 6.59425 3.6001 10.5001C3.6001 14.4059 6.7776 17.5834 10.6834 17.5834C14.5893 17.5834 17.7668 14.4059 17.7668 10.5001C17.7668 6.59425 14.5893 3.41675 10.6834 3.41675ZM10.6834 18.8334C6.08843 18.8334 2.3501 15.0951 2.3501 10.5001C2.3501 5.90508 6.08843 2.16675 10.6834 2.16675C15.2784 2.16675 19.0168 5.90508 19.0168 10.5001C19.0168 15.0951 15.2784 18.8334 10.6834 18.8334Z" fill="#041111" fill-opacity="0.5"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.543 13.5773C13.4339 13.5773 13.3239 13.5489 13.223 13.4898L10.0814 11.6156C9.89303 11.5023 9.77637 11.2981 9.77637 11.0781V7.03809C9.77637 6.69309 10.0564 6.41309 10.4014 6.41309C10.7472 6.41309 11.0264 6.69309 11.0264 7.03809V10.7231L13.8639 12.4148C14.1597 12.5923 14.2572 12.9756 14.0805 13.2723C13.963 13.4681 13.7555 13.5773 13.543 13.5773Z" fill="#041111" fill-opacity="0.5"/>
                                </svg>
                                <span>Duration</span>
                            </p>
                            <p class="text-lance-black">{{ notification.loan.loanDuration }} months</p>
                        </li>
                        <li class="flex items-center justify-between pt-4">
                            <p class="text-lance-black-70 text-sm leading-[21px] flex items-center gap-2">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6834 3.41675C6.7776 3.41675 3.6001 6.59425 3.6001 10.5001C3.6001 14.4059 6.7776 17.5834 10.6834 17.5834C14.5893 17.5834 17.7668 14.4059 17.7668 10.5001C17.7668 6.59425 14.5893 3.41675 10.6834 3.41675ZM10.6834 18.8334C6.08843 18.8334 2.3501 15.0951 2.3501 10.5001C2.3501 5.90508 6.08843 2.16675 10.6834 2.16675C15.2784 2.16675 19.0168 5.90508 19.0168 10.5001C19.0168 15.0951 15.2784 18.8334 10.6834 18.8334Z" fill="#041111" fill-opacity="0.5"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.543 13.5773C13.4339 13.5773 13.3239 13.5489 13.223 13.4898L10.0814 11.6156C9.89303 11.5023 9.77637 11.2981 9.77637 11.0781V7.03809C9.77637 6.69309 10.0564 6.41309 10.4014 6.41309C10.7472 6.41309 11.0264 6.69309 11.0264 7.03809V10.7231L13.8639 12.4148C14.1597 12.5923 14.2572 12.9756 14.0805 13.2723C13.963 13.4681 13.7555 13.5773 13.543 13.5773Z" fill="#041111" fill-opacity="0.5"/>
                                </svg>
                                <span>End Date</span>
                            </p>
                            <p class="text-lance-black">9th October, 2024</p>
                        </li>
                    </ul>
                </div>
                <div v-else class="rounded-lg border border-solid border-lance-black bg-white">
                    <div class="p-6 bg-lance-green-5 flex items-center justify-between">
                        <div>
                            <p class="mb-1 text-lance-black-50 text-sm leading-5">Loan Amount</p>
                            <p class="text-lance-green text-xl font-semibold leading-[30px]">
                                N{{ (notification?.loanAmount)?.loan.toLocaleString() }}
                            </p>
                        </div>
                        <p class="text-lance-black-70 text-sm leading-[21px]">Reasons below</p>
                    </div>
                    <ul class="p-4 pt-6">
                        <li class="flex items-center gap-4 pb-4 border-b border-solid border-lance-green-5">
                            <div class="w-10 h-10 rounded-full bg-lance-green-10 flex items-center justify-center">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.55744 9.41907C3.45077 9.41907 3.34344 9.38507 3.25277 9.31573C3.03411 9.14707 2.99277 8.83307 3.16144 8.6144L5.15677 6.02107C5.23811 5.91507 5.35877 5.8464 5.49077 5.82973C5.62544 5.8124 5.75744 5.84973 5.86211 5.93307L7.74211 7.40973L9.38677 5.28773C9.55611 5.0684 9.86944 5.02773 10.0881 5.1984C10.3068 5.36773 10.3468 5.68173 10.1774 5.89973L8.22411 8.41973C8.14277 8.52507 8.02277 8.59373 7.89077 8.60973C7.75744 8.62773 7.62544 8.58907 7.52011 8.50707L5.64144 7.03107L3.95411 9.22373C3.85544 9.35173 3.70744 9.41907 3.55744 9.41907Z" fill="black"/>
                                    <mask id="mask0_7654_3678" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="10" y="0" width="4" height="4">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2773 0.0834961H13.84V3.64676H10.2773V0.0834961Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_7654_3678)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0597 1.0835C11.629 1.0835 11.2783 1.4335 11.2783 1.86483C11.2783 2.2955 11.629 2.64683 12.0597 2.64683C12.4903 2.64683 12.841 2.2955 12.841 1.86483C12.841 1.4335 12.4903 1.0835 12.0597 1.0835ZM12.0597 3.64683C11.0777 3.64683 10.2783 2.8475 10.2783 1.86483C10.2783 0.882163 11.0777 0.0834961 12.0597 0.0834961C13.0423 0.0834961 13.841 0.882163 13.841 1.86483C13.841 2.8475 13.0423 3.64683 12.0597 3.64683Z" fill="black"/>
                                    </g>
                                    <mask id="mask1_7654_3678" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0791016 0.64502H13.3204V13.8857H0.0791016V0.64502Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask1_7654_3678)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.56777 13.8857H3.83177C1.5871 13.8857 0.0791016 12.309 0.0791016 9.96235V4.57435C0.0791016 2.22435 1.5871 0.64502 3.83177 0.64502H8.6771C8.9531 0.64502 9.1771 0.86902 9.1771 1.14502C9.1771 1.42102 8.9531 1.64502 8.6771 1.64502H3.83177C2.15977 1.64502 1.0791 2.79435 1.0791 4.57435V9.96235C1.0791 11.7657 2.13377 12.8857 3.83177 12.8857H9.56777C11.2398 12.8857 12.3204 11.7384 12.3204 9.96235V5.26969C12.3204 4.99369 12.5444 4.76969 12.8204 4.76969C13.0964 4.76969 13.3204 4.99369 13.3204 5.26969V9.96235C13.3204 12.309 11.8124 13.8857 9.56777 13.8857Z" fill="black"/>
                                    </g>
                                </svg>
                            </div>
                            <div class="text-sm flex-1">
                                <p class="mb-1 text-lance-black font-semibold tracking-[-0.14px]">Low Lance Score</p>
                                <p class="text-lance-black-50 leading-6">Your Lance rating is low because you haven’t updated the ID requirements.</p>
                            </div>
                        </li>
                        <li class="flex items-center gap-4 pt-4">
                            <div class="w-10 h-10 rounded-full bg-lance-green-10 flex items-center justify-center">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.55744 9.41907C3.45077 9.41907 3.34344 9.38507 3.25277 9.31573C3.03411 9.14707 2.99277 8.83307 3.16144 8.6144L5.15677 6.02107C5.23811 5.91507 5.35877 5.8464 5.49077 5.82973C5.62544 5.8124 5.75744 5.84973 5.86211 5.93307L7.74211 7.40973L9.38677 5.28773C9.55611 5.0684 9.86944 5.02773 10.0881 5.1984C10.3068 5.36773 10.3468 5.68173 10.1774 5.89973L8.22411 8.41973C8.14277 8.52507 8.02277 8.59373 7.89077 8.60973C7.75744 8.62773 7.62544 8.58907 7.52011 8.50707L5.64144 7.03107L3.95411 9.22373C3.85544 9.35173 3.70744 9.41907 3.55744 9.41907Z" fill="black"/>
                                    <mask id="mask0_7654_3678" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="10" y="0" width="4" height="4">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2773 0.0834961H13.84V3.64676H10.2773V0.0834961Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_7654_3678)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0597 1.0835C11.629 1.0835 11.2783 1.4335 11.2783 1.86483C11.2783 2.2955 11.629 2.64683 12.0597 2.64683C12.4903 2.64683 12.841 2.2955 12.841 1.86483C12.841 1.4335 12.4903 1.0835 12.0597 1.0835ZM12.0597 3.64683C11.0777 3.64683 10.2783 2.8475 10.2783 1.86483C10.2783 0.882163 11.0777 0.0834961 12.0597 0.0834961C13.0423 0.0834961 13.841 0.882163 13.841 1.86483C13.841 2.8475 13.0423 3.64683 12.0597 3.64683Z" fill="black"/>
                                    </g>
                                    <mask id="mask1_7654_3678" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0791016 0.64502H13.3204V13.8857H0.0791016V0.64502Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask1_7654_3678)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.56777 13.8857H3.83177C1.5871 13.8857 0.0791016 12.309 0.0791016 9.96235V4.57435C0.0791016 2.22435 1.5871 0.64502 3.83177 0.64502H8.6771C8.9531 0.64502 9.1771 0.86902 9.1771 1.14502C9.1771 1.42102 8.9531 1.64502 8.6771 1.64502H3.83177C2.15977 1.64502 1.0791 2.79435 1.0791 4.57435V9.96235C1.0791 11.7657 2.13377 12.8857 3.83177 12.8857H9.56777C11.2398 12.8857 12.3204 11.7384 12.3204 9.96235V5.26969C12.3204 4.99369 12.5444 4.76969 12.8204 4.76969C13.0964 4.76969 13.3204 4.99369 13.3204 5.26969V9.96235C13.3204 12.309 11.8124 13.8857 9.56777 13.8857Z" fill="black"/>
                                    </g>
                                </svg>
                            </div>
                            <div class="text-sm flex-1">
                                <p class="mb-1 text-lance-black font-semibold tracking-[-0.14px]">Poor Community Rating</p>
                                <p class="text-lance-black-50 leading-6">Your community members have overdue loans. Get them to complete their payment and try again.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div v-if="notification?.approved" class="flex items-center gap-[14px]">
                    <button @click="rejectLoanOffer" class="btn btn-tertiary w-full" :disabled="acceptingLoanOffer || rejectingLoanOffer">Reject Offer</button>
                    <button @click="acceptLoanOffer" class="btn btn-primary w-full" :disabled="acceptingLoanOffer || rejectingLoanOffer">Accept Offer</button>
                </div>
            </div>
        </div>

        <Loans-OfferAcceptanceModal v-if="loanOfferAcceptanceSuccess" />
        <Loans-OfferRejectionModal v-if="loanOfferRejectionSuccess" />
    </div>
</template>
<style>
.a{
    color: var(--Primary-Green-100, #0A4F4D);
text-align: center;
font-family: Gelion;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 30px; /* 150% */
}
</style>
<script setup lang="ts">

    const props = defineProps<{
        notification: any;
    }>();

    const totalInterest = computed(() => {
        if(props.notification){
            return (props.notification.loan.loanAmount * 0.25) * props.notification.loan.loanDuration;
        }
        return 0;
    });

    const processingFee = computed(() => {
        if(props.notification){
            return props.notification.loan.loanAmount * 0.02;
        }
        return 0;
    });

    const totalRepayment = computed(() => {
        if(props.notification){
            const principal = props.notification.loan.loanAmount;
            return principal + totalInterest.value + processingFee.value;
        }
        return 0;
    });

    const acceptingLoanOffer: Ref<boolean> = ref(false);
    
    const loanOfferAcceptanceSuccess: Ref<boolean> = ref(false);

    const rejectingLoanOffer: Ref<boolean> = ref(false);
    
    const loanOfferRejectionSuccess: Ref<boolean> = ref(false);

    async function acceptLoanOffer(){
        acceptingLoanOffer.value = true;
        setTimeout(()=>{
            loanOfferAcceptanceSuccess.value = true;
        }, 5000);

        // mark notification as read
    }

    async function rejectLoanOffer(){
        rejectingLoanOffer.value = true;
        setTimeout(()=>{
            loanOfferRejectionSuccess.value = true;
        }, 5000);

        // mark notification as read
    }

</script>