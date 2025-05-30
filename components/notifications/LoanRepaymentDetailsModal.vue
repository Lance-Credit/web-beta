<template>
  <div @click.self="emit('@close-modal')" class="fixed z-20 top-0 left-0 w-screen h-screen backdrop-blur-[2px] flex items-center justify-center bg-lance-black-70">
      <div class="flex flex-col gap-6 w-full sm:w-[456px] h-full sm:h-auto mx-auto bg-white px-6 sm:px-10 p-10 sm:rounded-3xl">
          <div class="p-4 rounded border border-solid bg-lance-green-5 border-lance-green">
              <p class="text-lance-green text-sm text-center"> {{ notificationData?.title }} </p>
          </div>
  
          <div>
              <p v-show="transactionReferenceCopied" class="mb-2 py-2 px-4 text-center text-[#272E2E] text-sm leading-6 rounded-[4px] border border-solid border-[#DAE0E0] bg-[#FAFCFC]">
                  Copied to clipboard
              </p>
              <div class="rounded-lg border border-solid border-lance-black bg-[rgba(236,255,77,0.05)]">
                  <div class="p-6 bg-lance-green-5 text-center">
                      <p class="mb-1 text-lance-black-50 text-sm">Amount</p>
                      <p class="text-lance-green text-xl font-semibold leading-[30px]">N{{ (notificationData?.data.amount)?.toLocaleString() }}</p>
                  </div>
                  <ul class="pt-8 pb-6 px-4">
                      <li class="flex items-center justify-between pb-4 border-b border-solid border-b-lance-green-5">
                          <p class="text-lance-black-70 text-sm leading-[21px] flex items-center gap-2">
                              Loan Reference
                          </p>
                          <p class="text-lance-black flex items-center gap-2">
                              <span class="">{{ notificationData?.data.loanReference }}</span>
                              <svg @click="copyReferenceCode(notificationData?.data.loanReference)" class="cursor-pointer" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                              Payment Date
                          </p>
                          <p class="text-lance-black">{{ new Date(notificationData?.data.paymentDate).toLocaleDateString('en-GB', { day:"numeric", month:"short", year:"numeric" }) }}</p>
                      </li>
                      <li class="flex items-center justify-between py-4 border-b border-solid border-b-lance-green-5">
                          <p class="text-lance-black-70 text-sm leading-[21px] flex items-center gap-2">
                              Payment Method
                          </p>
                          <p class="text-lance-black">
                            {{ `${notificationData?.data.paymentMethod[0].toUpperCase()}${(notificationData?.data.paymentMethod)?.substring(1)}` }}
                        </p>
                      </li>
                      <li class="flex items-center justify-between py-4 border-b border-solid border-b-lance-green-5">
                          <p class="text-lance-black-70 text-sm leading-[21px] flex items-center gap-2">
                              Payment Reference
                          </p>
                          <p class="text-lance-black flex items-center gap-2">
                              <span class="">{{ notificationData?.data.paymentReference }}</span>
                              <svg @click="copyReferenceCode(notificationData?.data.paymentReference)" class="cursor-pointer" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                              Payment Status
                          </p>
                          <p class="text-lance-black">
                            {{ `${notificationData?.data.paymentStatus[0].toUpperCase()}${(notificationData?.data.paymentStatus)?.substring(1)}` }}
                        </p>
                      </li>
                      <li class="flex items-center justify-between pt-4">
                          <p class="text-lance-black-70 text-sm leading-[21px] flex items-center gap-2">
                              Repayment Type
                          </p>
                          <p class="text-lance-black">
                            {{ `${notificationData?.data.repaymentType[0].toUpperCase()}${(notificationData?.data.repaymentType)?.substring(1)}` }}
                          </p>
                      </li>
                  </ul>
              </div>
          </div>
          
  
          <div class="flex items-center gap-[14px]">
              <NuxtLink @click="emit('@close-modal')" to="/notifications" class="btn btn-tertiary w-full">Back to Notifications</NuxtLink>
              <NuxtLink @click="emit('@close-modal')" to="/loans" class="btn w-full btn-primary">Go to Loans</NuxtLink>
          </div>
      </div>
  </div>
</template>

<style scoped>
  .btn.w-full {
    font-weight: 400;
  }
</style>

<script setup lang="ts">

  const props = defineProps<{
    notificationData: null | NotificationDetails
  }>();

  function copyReferenceCode(reference: string){
      showLoanReferenceCopied();
      navigator.clipboard.writeText(reference);
  }

  const transactionReferenceCopied:Ref <boolean> = ref(false);

  function showLoanReferenceCopied() {
      transactionReferenceCopied.value = true;
      setTimeout(()=> transactionReferenceCopied.value = false, 5000);
  }

  const emit = defineEmits<{
      '@close-modal': []
  }>();

</script>