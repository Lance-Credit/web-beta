<template>
  <div @click.self="emit('@close-modal')" class="fixed z-20 top-0 left-0 w-screen h-screen backdrop-blur-[2px] flex items-center justify-center bg-lance-black-70">
      <div class="flex flex-col gap-6 w-[456px] mx-auto bg-white p-10 rounded-3xl">
          <div class="p-4 rounded border border-solid bg-lance-green-5 border-lance-green">
              <p class="text-lance-green text-sm">
                  Your offer has been approved and is valid for
                  <span class="text-lance-black font-medium">24 hours</span>.
              </p>
          </div>
  
          <div>
              <p v-show="loanReferenceCopied" class="mb-2 py-2 px-4 text-center text-[#272E2E] text-sm leading-6 rounded-[4px] border border-solid border-[#DAE0E0] bg-[#FAFCFC]">
                  Copied to clipboard
              </p>
              <div class="rounded-lg border border-solid border-lance-black bg-[rgba(236,255,77,0.05)]">
                  <div class="p-6 bg-lance-green-5 text-center">
                      <p class="mb-1 text-lance-black-50 text-sm">Total Repayment Amount</p>
                      <p class="text-lance-green text-xl font-semibold leading-[30px]">N{{ (notificationData?.data.totalRepaymentAmount)?.toLocaleString() }}</p>
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
                          <p class="text-lance-black">N{{ (notificationData?.data.amount)?.toLocaleString() }}</p>
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
                              <span>Reference</span>
                          </p>
                          <p class="text-lance-black flex items-center gap-2">
                              <span class="">{{ notificationData?.data.reference }}</span>
                              <svg @click="copyReferenceCode" class="cursor-pointer" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <mask id="mask0_3427_18542" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="1" width="15" height="18">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.74731 1.67627H16.9579V18.2209H2.74731V1.67627Z" fill="white"/>
                                  </mask>
                                  <g mask="url(#mask0_3427_18542)">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29545 4.36198C5.104 4.36198 4.1146 5.35489 4.08655 6.57939V14.4924C4.05995 15.7598 5.03065 16.8037 6.25015 16.8319H12.0485C13.2486 16.7808 14.1991 15.7546 14.1905 14.4968V7.9341L10.8578 4.36198H6.30407H6.29545ZM6.3042 17.9415H6.22582C4.4124 17.8993 2.96857 16.347 3.00812 14.4803V6.56586C3.04982 4.73023 4.52314 3.25195 6.29413 3.25195H6.30636H11.088C11.2347 3.25195 11.3749 3.31336 11.477 3.42212L15.1189 7.32645C15.2153 7.4293 15.2692 7.56765 15.2692 7.71045V14.4922C15.2821 16.3485 13.8771 17.8653 12.0702 17.9407L6.3042 17.9415Z" fill="#AEB2B2"/>
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.55823 2.9165C5.1774 2.9165 4.03073 4.03484 3.99823 5.414V14.3265C3.9674 15.754 5.0924 16.9298 6.50573 16.9615H13.2257C14.6166 16.904 15.7182 15.7482 15.7082 14.3315V6.93984L11.8457 2.9165H6.56823H6.55823ZM6.56823 18.2115H6.4774C4.37573 18.164 2.7024 16.4157 2.74823 14.3132V5.399C2.79657 3.3315 4.50407 1.6665 6.55657 1.6665H6.57073H12.1124C12.2824 1.6665 12.4449 1.73567 12.5632 1.85817L16.7841 6.25567C16.8957 6.3715 16.9582 6.52734 16.9582 6.68817V14.3265C16.9732 16.4173 15.3449 18.1257 13.2507 18.2107L6.56823 18.2115Z" fill="#AEB2B2"/>
                                  </g>
                              </svg>
                          </p>
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
                              <span>Interest Rate ({{ notificationData?.data.rate }}%)</span>
                          </p>
                          <p class="text-lance-black">N{{ notificationData?.data.totalInterestAmount ? (notificationData?.data.totalInterestAmount/100).toLocaleString() : '0.00' }}</p>
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
                              <span>Processing Fee ({{ notificationData?.data.feeCharged ? notificationData?.data.feeCharged * 100 : '0.00' }}%)</span>
                          </p>
                          <p class="text-lance-black">N{{ notificationData?.data.feeAmount ?  (notificationData?.data.feeAmount / 100).toLocaleString() : '0.00' }}</p>
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
                          <p class="text-lance-black">N {{ (notificationData?.data.monthlyRepaymentAmount)?.toLocaleString() }} monthly</p>
                      </li>
                      <li class="flex items-center justify-between py-4 border-b border-solid border-b-lance-green-5">
                          <p class="text-lance-black-70 text-sm leading-[21px] flex items-center gap-2">
                              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6834 3.41675C6.7776 3.41675 3.6001 6.59425 3.6001 10.5001C3.6001 14.4059 6.7776 17.5834 10.6834 17.5834C14.5893 17.5834 17.7668 14.4059 17.7668 10.5001C17.7668 6.59425 14.5893 3.41675 10.6834 3.41675ZM10.6834 18.8334C6.08843 18.8334 2.3501 15.0951 2.3501 10.5001C2.3501 5.90508 6.08843 2.16675 10.6834 2.16675C15.2784 2.16675 19.0168 5.90508 19.0168 10.5001C19.0168 15.0951 15.2784 18.8334 10.6834 18.8334Z" fill="#041111" fill-opacity="0.5"/>
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.543 13.5773C13.4339 13.5773 13.3239 13.5489 13.223 13.4898L10.0814 11.6156C9.89303 11.5023 9.77637 11.2981 9.77637 11.0781V7.03809C9.77637 6.69309 10.0564 6.41309 10.4014 6.41309C10.7472 6.41309 11.0264 6.69309 11.0264 7.03809V10.7231L13.8639 12.4148C14.1597 12.5923 14.2572 12.9756 14.0805 13.2723C13.963 13.4681 13.7555 13.5773 13.543 13.5773Z" fill="#041111" fill-opacity="0.5"/>
                              </svg>
                              <span>Duration</span>
                          </p>
                          <p class="text-lance-black">{{ notificationData?.data.tenure }} months</p>
                      </li>
                      <li class="flex items-center justify-between pt-4">
                          <p class="text-lance-black-70 text-sm leading-[21px] flex items-center gap-2">
                              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6834 3.41675C6.7776 3.41675 3.6001 6.59425 3.6001 10.5001C3.6001 14.4059 6.7776 17.5834 10.6834 17.5834C14.5893 17.5834 17.7668 14.4059 17.7668 10.5001C17.7668 6.59425 14.5893 3.41675 10.6834 3.41675ZM10.6834 18.8334C6.08843 18.8334 2.3501 15.0951 2.3501 10.5001C2.3501 5.90508 6.08843 2.16675 10.6834 2.16675C15.2784 2.16675 19.0168 5.90508 19.0168 10.5001C19.0168 15.0951 15.2784 18.8334 10.6834 18.8334Z" fill="#041111" fill-opacity="0.5"/>
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.543 13.5773C13.4339 13.5773 13.3239 13.5489 13.223 13.4898L10.0814 11.6156C9.89303 11.5023 9.77637 11.2981 9.77637 11.0781V7.03809C9.77637 6.69309 10.0564 6.41309 10.4014 6.41309C10.7472 6.41309 11.0264 6.69309 11.0264 7.03809V10.7231L13.8639 12.4148C14.1597 12.5923 14.2572 12.9756 14.0805 13.2723C13.963 13.4681 13.7555 13.5773 13.543 13.5773Z" fill="#041111" fill-opacity="0.5"/>
                              </svg>
                              <span>End Date</span>
                          </p>
                          <p class="text-lance-black">{{ notificationData ? new Date(notificationData.data.dueDate).toLocaleDateString('en-GB', { day:"numeric", month:"short", year:"numeric" }) : '- -'}}</p>
                      </li>
                  </ul>
              </div>
          </div>
          
  
          <div class="flex items-center gap-[14px]">
              <button @click="showLoanOfferRejectionModal = true" class="btn btn-tertiary w-full" :disabled="acceptingLoanOffer">Reject Offer</button>
              <button
                  @click="acceptLoanOffer" class="btn w-full btn-primary" :class="{'loading' : acceptingLoanOffer}"
                  :disabled="acceptingLoanOffer"
              >
                  <span v-show="!acceptingLoanOffer">Accept Offer</span>
                  <Loader-Basic v-show="acceptingLoanOffer" bg="#FFF" fg="#C3E48E" />
              </button>
          </div>
      </div>
      <Loans-OfferAcceptanceModal v-if="loanOfferAcceptanceSuccess" />
      <Loans-OfferRejectionModal v-if="showLoanOfferRejectionModal" :loan="notificationData?.data"  @@close-offer-rejection-modal="showLoanOfferRejectionModal = false" />
  </div>
</template>

<script setup lang="ts">

  const props = defineProps<{
      notificationData: null | NotificationDetails
  }>();

  const { apiFetch } = useApiFetch();

  const { fetchAccountBalance } = useWalletStore();
  
  const acceptingLoanOffer: Ref<boolean> = ref(false);
  
  const loanOfferAcceptanceSuccess: Ref<boolean> = ref(false);
  
  const showLoanOfferRejectionModal: Ref<boolean> = ref(false);

  async function acceptLoanOffer(){
      acceptingLoanOffer.value = true;       
      
      const result = await apiFetch(
          `loans/${props.notificationData?.data.reference}`,
          'PATCH',
          {},
          {
              "operation":"acceptOrDecline",
              "acceptOrDecline": "accept"
          }
      );

      if((result as any).success && !(result as any).error){
          fetchAccountBalance();
          acceptingLoanOffer.value = false;
          loanOfferAcceptanceSuccess.value = true;
      } else {
          // console.log((result as any).error);
      }
  }

  function copyReferenceCode(){
      showLoanReferenceCopied();
      navigator.clipboard.writeText(props.notificationData?.data.reference as string);
  }

  const loanReferenceCopied:Ref <boolean> = ref(false);

  function showLoanReferenceCopied() {
      loanReferenceCopied.value = true;
      setTimeout(()=> loanReferenceCopied.value = false, 5000);
  }

  const emit = defineEmits<{
      '@close-modal': []
  }>();

</script>