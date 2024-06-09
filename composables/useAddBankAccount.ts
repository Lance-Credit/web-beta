import Connect from '@mono.co/connect.js';
import { useUserStore } from '@/stores/user';
import { useWalletStore } from '@/stores/wallet';


export const useAddBankAccount = () => {
    
    const { apiURL } = useRuntimeConfig().public;
    const { monoKey } = useRuntimeConfig().public;
    const { fullName, userProfile } = storeToRefs(useUserStore());
    
    const monoConnect = () => {
    
        const customer = {
            name: fullName.value,
            email: userProfile.value.email,
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

        const { data: { value: jwt } } = await useFetch('/api/token');
        const { fetchUserLinkedAccountAndBalance } = useWalletStore();

        const { data: { value: result }, error } = await useFetch(`${apiURL}/v1/payments/accounts`, {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${jwt?.token}`
            },
            body: {
                code
            }
        });
        
        if(result){
            if((result as any).success && !(result as any).error){
                console.log('success',result);
                fetchUserLinkedAccountAndBalance(jwt?.token, apiURL);
            }
        }else if(error){
            console.log(error.value?.data);
        }
    }

    return {
        monoConnect
    }
}