<template>
    <div>
        <KYC-Process v-if="!kycCompleted" v-show="continueKycProcess" @@stop-kyc-process="continueKycProcess = false" />

        <div v-show="!continueKycProcess">
            <div class="mb-8 flex items-center justify-between">
                <div>
                    <p class="mb-1 text-lance-black text-xl leading-[26px] font-medium tracking-[-0.2px]">
                        Good afternoon, {{ userProfile.firstName }}
                    </p>
                    <p class="flex items-center gap-2">
                        <span class="text-lance-black-60 leading-[26px]">Referral Code:</span>
                        <span class="text-lance-black font-medium">{{ referralCode }}</span>
                        <svg @click="copyReferralCode" class="cursor-pointer" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_3427_18542" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="1" width="15" height="18">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.74731 1.67627H16.9579V18.2209H2.74731V1.67627Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_3427_18542)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29545 4.36198C5.104 4.36198 4.1146 5.35489 4.08655 6.57939V14.4924C4.05995 15.7598 5.03065 16.8037 6.25015 16.8319H12.0485C13.2486 16.7808 14.1991 15.7546 14.1905 14.4968V7.9341L10.8578 4.36198H6.30407H6.29545ZM6.3042 17.9415H6.22582C4.4124 17.8993 2.96857 16.347 3.00812 14.4803V6.56586C3.04982 4.73023 4.52314 3.25195 6.29413 3.25195H6.30636H11.088C11.2347 3.25195 11.3749 3.31336 11.477 3.42212L15.1189 7.32645C15.2153 7.4293 15.2692 7.56765 15.2692 7.71045V14.4922C15.2821 16.3485 13.8771 17.8653 12.0702 17.9407L6.3042 17.9415Z" fill="#AEB2B2"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.55823 2.9165C5.1774 2.9165 4.03073 4.03484 3.99823 5.414V14.3265C3.9674 15.754 5.0924 16.9298 6.50573 16.9615H13.2257C14.6166 16.904 15.7182 15.7482 15.7082 14.3315V6.93984L11.8457 2.9165H6.56823H6.55823ZM6.56823 18.2115H6.4774C4.37573 18.164 2.7024 16.4157 2.74823 14.3132V5.399C2.79657 3.3315 4.50407 1.6665 6.55657 1.6665H6.57073H12.1124C12.2824 1.6665 12.4449 1.73567 12.5632 1.85817L16.7841 6.25567C16.8957 6.3715 16.9582 6.52734 16.9582 6.68817V14.3265C16.9732 16.4173 15.3449 18.1257 13.2507 18.2107L6.56823 18.2115Z" fill="#AEB2B2"/>
                            </g>
                        </svg>
                    </p>
                </div>
                <div class="flex gap-4 items-center">
                    <NuxtLink to="/wallet" class="btn btn-secondary">Withdraw from wallet</NuxtLink>
                    <NuxtLink to="/loans" class="btn btn-primary gap-4">
                        <span>Request a Loan</span>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.58044 9.771C3.58044 9.45458 3.81557 9.19309 4.12064 9.1517L4.20544 9.146H16.7054C17.0506 9.146 17.3304 9.42582 17.3304 9.771C17.3304 10.0874 17.0953 10.3489 16.7903 10.3903L16.7054 10.396H4.20544C3.86027 10.396 3.58044 10.1162 3.58044 9.771Z" fill="white"/>
                            <path d="M11.223 5.19356C10.9783 4.95001 10.9775 4.55428 11.221 4.30968C11.4425 4.08731 11.7896 4.0664 12.0347 4.24741L12.1049 4.30778L17.1466 9.32778C17.3696 9.54985 17.3899 9.89828 17.2075 10.1433L17.1466 10.2135L12.105 15.2344C11.8604 15.4779 11.4647 15.4771 11.2211 15.2325C10.9997 15.0102 10.9802 14.6629 11.1623 14.4186L11.2229 14.3486L15.8196 9.77042L11.223 5.19356Z" fill="white"/>
                        </svg>
                    </NuxtLink>
                </div>
            </div>
            <div
                @click="showKycSummary = true" v-if="!kycCompleted"
                class="rounded-xl bg-white border border-solid border-lance-green-20 py-6 px-10 flex items-center justify-between cursor-pointer">
                <div class="flex gap-4 items-center">
                    <div class="w-16 h-16 rounded-full border-[6.4px] border-solid border-[rgba(109,151,105,0.40)] flex items-center justify-center">
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
    
            <KYC-SummaryModal
                v-if="!kycCompleted" v-show="showKycSummary"
                @@close-kyc-summary-modal="showKycSummary = false"
                @@continue-kyc-process="continueKycProcess = true"
            />
        </div>
    </div>
</template>
<style>
.a{
    color: ;
font-feature-settings: 'liga' off;
font-family: Aventa;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 32px; /* 133.333% */
letter-spacing: -0.24px;
}
</style>

<script setup lang="ts">

    import { useUserStore } from '@/stores/user';

    definePageMeta({
        middleware: 'auth',
        layout: 'dashboard'
    });

    const { userProfile } = storeToRefs(useUserStore());

    const referralCode: Ref<string> = ref('WIZ2022XD');

    function copyReferralCode(){
        navigator.clipboard.writeText(referralCode.value);
    }

    const kycCompleted: Ref<boolean> = ref(false);
    
    const kycCompletion: Ref<number> = ref(0);
    
    const showKycSummary: Ref<boolean> = ref(false);

    const continueKycProcess: Ref<boolean> = ref(false);


</script>