<template>
  <div @click.self="emit('@close-modal')" class="fixed z-20 top-0 left-0 w-screen h-screen bg-lance-black-70 backdrop-blur-[2px] flex items-center justify-center">
      <div class="bg-white w-full sm:w-[466px] h-full sm:h-auto sm:rounded-3xl px-6 sm:px-10 p-10 flex flex-col gap-6">
          <p class="text-lance-black text-2xl font-medium leading-[26px] tracking-[-0.24px]">Loan Details</p>
          <div v-show="notificationData?.data.status === 'paid'" class="flex items-center justify-between">
              <div>
                  <p class="text-lance-black-50 text-sm leading-5">Total Amount Repaid</p>
                  <p class="mt-[-12px] text-lance-black text-4xl font-bold leading-[55.93px] tracking-[0.36px]">
                      {{ (notificationData?.data.totalRepaymentAmount)?.toLocaleString() }}
                  </p>
              </div>
              <p class="py-1 px-6 rounded-[31px] text-sm font-medium w-fit bg-lance-black-5 text-lance-black-50">
                  Completed
              </p>
          </div>
          <div v-show="notificationData?.data.status === 'declined'" class="flex items-center justify-between">
              <div>
                  <p class="text-lance-black-50 text-sm leading-5">Total Amount Requested</p>
                  <p class="mt-[-12px] text-lance-black text-4xl font-bold leading-[55.93px] tracking-[0.36px]">
                      {{ (notificationData?.data.amount)?.toLocaleString() }}
                  </p>
              </div>
              <p v-if="notificationData?.data.declinedBy === 'lender'" class="py-1 px-6 rounded-[31px] text-sm font-medium w-fit bg-[rgba(250,206,202,0.20)] text-[#BC251B]">
                  Declined
              </p>
              <p v-else class="py-1 px-6 rounded-[31px] text-sm font-medium w-fit bg-[rgba(93,36,45,0.04)] text-[rgba(93,36,45,0.90)]">
                  Rejected
              </p>
          </div>
          <div>
              <p v-show="loanReferenceCopied" class="mb-2 py-2 px-4 text-center text-[#272E2E] text-sm leading-6 rounded-[4px] border border-solid border-[#DAE0E0] bg-[#FAFCFC]">
                  Copied to clipboard
              </p>
              <div
                  v-if="notificationData?.data.status === 'declined' && notificationData?.data.declinedBy === 'borrower'"
                  class="mb-2 bg-[rgba(236,255,77,0.05)] px-4 py-6 rounded-lg border border-solid border-lance-green"
              >
                  <p class="text-lance-black-70 text-sm leading-[21px]">
                      Reasons for Rejection: {{ notificationData?.data.declinedReason }}
                  </p>
              </div>
              <div
                  v-if="notificationData?.data.status === 'declined' && notificationData?.data.declinedBy === 'lender'"
                  class="rounded-lg border border-solid border-lance-black bg-white"
              >
                  <div class="py-6 px-4 bg-lance-green-5 flex items-center justify-between">
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
              <ul v-else class="p-6 rounded-lg border border-solid border-lance-black bg-[rgba(236,255,77,0.05)]">
                  <li class="flex items-center justify-between pb-4 border-b border-solid border-b-lance-green-5">
                      <p class="text-lance-black-70 text-sm leading-[21px]">Loan Amount</p>
                      <p class="text-lance-black">N{{ (notificationData?.data.amount)?.toLocaleString() }}</p>
                  </li>
                  <li class="flex items-center justify-between py-4 border-b border-solid border-b-lance-green-5">
                      <p class="text-lance-black-70 text-sm leading-[21px]">Reference</p>
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
                      <p class="text-lance-black-70 text-sm leading-[21px]">Interest Rate</p>
                      <p class="text-lance-black">{{ notificationData?.data.rate }}% per month</p>
                  </li>
                  <li class="flex items-center justify-between py-4 border-b border-solid border-b-lance-green-5">
                      <p class="text-lance-black-70 text-sm leading-[21px]">Duration</p>
                      <p class="text-lance-black">{{ notificationData?.data.tenure }} months</p>
                  </li>
                  <li class="flex items-center justify-between py-4 border-b border-solid border-b-lance-green-5">
                      <p class="text-lance-black-70 text-sm leading-[21px]">Monthly Repayment</p>
                      <p class="text-lance-black">
                          N{{ (notificationData?.data.monthlyRepaymentAmount)?.toLocaleString() }} every month
                      </p>
                  </li>
              </ul>
              <div v-show="notificationData?.data.status === 'active'" class="mt-4 p-6 rounded-lg border border-solid border-lance-black bg-[rgba(236,255,77,0.05)]">
                  <div class="flex items-center justify-between">
                      <p class="text-lance-black-70 text-sm leading-[21px]">Total Repayment</p>
                      <p class="text-lance-green text-2xl font-bold leading-[30px]">
                          N{{ (notificationData?.data.totalRepaymentAmount)?.toLocaleString() }}
                      </p>
                  </div>
              </div>
          </div>
          <button class="btn btn-primary" @click="emit('@close-modal')">Close</button>
      </div>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps<{
    notificationData: NotificationDetails | null
  }>();

  function copyReferenceCode(){
      showLoanReferenceCopied();
      navigator.clipboard.writeText(props.notificationData?.data.reference);
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