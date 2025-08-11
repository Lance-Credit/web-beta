import Connect from '@mono.co/connect.js';
import { useUserStore } from '@/stores/user';
import { useWalletStore } from '@/stores/wallet';


export const useAddBankAccount = () => {
    
    const { apiFetch } = useApiFetch();
    const { monoKey } = useRuntimeConfig().public;
    const { fullName, userProfile } = storeToRefs(useUserStore());
    
    const monoConnect = () => {
    
        const customer = {
            name: fullName.value,
            email: userProfile.value?.email,
        };
        
        const config = {
            key: monoKey,
            data: { customer },
            onSuccess: function (response: any) {
    
                addNewAccount(response.code)
            }
        };
        
        const connect = new Connect(config);
        connect.setup();
        connect.open();
        
    }
    
    const addNewAccount = async(code: string) => {

        const { fetchKycStatus } = useKYCStore();

        try {
            const result = await apiFetch('accounts', 'POST', {}, { code });
            
            if ((result as any).success && !(result as any).error) {
                // console.log('success',result);
                fetchKycStatus();
            } else {
                // console.log((result as any).error);
            }
        } catch (error) {
            // console.log((error as any).response)
        }
    }

    return {
        monoConnect
    }
}