import { useWalletStore } from './wallet';

const { apiFetch } = useApiFetch();

export const useKYCStore = defineStore('kyc', () => 
    {
        const { linkedAccount } = storeToRefs(useWalletStore());

        const kycItems = ref({
            account: {
                completed: false
            },
            personalDetails: {
                completed: false
            },
            kyc: {
                completed: false,
                state: ''
            },
            id: {
                completed: false
            },
            linkedBankAccount: {
                completed: false
            }
        });

        const waitedForKycFetch: Ref<boolean> = ref(false);

        const kycCompleted = computed(() => {
            return kycItems.value.account.completed && kycItems.value.personalDetails.completed &&
            kycItems.value.kyc.completed && kycItems.value.id.completed &&
            kycItems.value.linkedBankAccount.completed;
        })
        
        async function fetchKycStatus() {
            
            const { fetchUserLinkedAccountAndBalance } = useWalletStore();

            await fetchUserVerifications();

            if(kycItems.value.kyc.completed){
                await fetchUserLinkedAccountAndBalance();
            }
            
            waitedForKycFetch.value = true;

            kycItems.value.linkedBankAccount.completed = linkedAccount.value ? true : false;
        }

        async function fetchUserVerifications() {
            
            const result = await apiFetch('verifications');

            if ((result as any).success && !(result as any).error) {

                const kycState = (result as any).data.verification.kyc ? (result as any).data.verification.kyc.verificationStatus : '';
                if(kycState === 'pending' || kycState === 'failed') {
                    kycItems.value.kyc.state = kycState;
                }

                if(
                    (result as any).data.verification.phone && (result as any).data.verification.phone.verificationStatus == 'successful' &&
                    (result as any).data.verification.email && (result as any).data.verification.email.verificationStatus == 'successful'
                ){
                    kycItems.value.account.completed = true;
                }else{
                    kycItems.value.account.completed = false;
                }

                if(kycState == 'successful'){
                    kycItems.value.kyc.completed = true;
                    kycItems.value.id.completed = true;
                    kycItems.value.personalDetails.completed = true;
                }else{
                    kycItems.value.kyc.completed = false;
                    kycItems.value.id.completed = false;
                    kycItems.value.personalDetails.completed = false;
                }

            } else {
                // console.log((result as any).error);
            }
        }

        function $reset() {
            kycItems.value = {
                account: {
                    completed: false
                },
                personalDetails: {
                    completed: false
                },
                kyc: {
                    completed: false,
                    state: ''
                },
                id: {
                    completed: false
                },
                linkedBankAccount: {
                    completed: false
                }
            };

            waitedForKycFetch.value = false;
        }

        function $resetKYC() {
            kycItems.value = {
                account: {
                    completed: false
                },
                personalDetails: {
                    completed: false
                },
                kyc: {
                    completed: false,
                    state: ''
                },
                id: {
                    completed: false
                },
                linkedBankAccount: {
                    completed: false
                }
            };

            waitedForKycFetch.value = false;
        }
        
        return { kycItems, kycCompleted, fetchKycStatus, waitedForKycFetch, $reset, $resetKYC }
    },
    {
        persist: true,
    }
)