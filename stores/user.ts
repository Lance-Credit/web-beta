import { defineStore } from 'pinia';
import { useKYCStore } from './kyc';

export const useUserStore = defineStore('user', () => 
    {
        const userProfile: Ref<User | null> = ref(null);

        const fullName = computed(()=>{
            if(userProfile.value){
                const firstName = (userProfile.value.firstName)[0].toUpperCase() + (userProfile.value.firstName).substring(1).toLowerCase();
                const lastName = (userProfile.value.lastName)[0].toUpperCase() + (userProfile.value.lastName).substring(1).toLowerCase();
                return `${firstName} ${lastName}`;
            }
            return '';
        });

        async function fetchUserProfile(token: string, apiUrl: string) {
            
            const { data: { value: result }, error } = await useFetch(`${apiUrl}/v1/profile`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            

            if((result as any).success && !(result as any).error){
                // console.log(result);
                userProfile.value = {
                    "id": (result as any).data.profile.userId,
                    "email": (result as any).data.profile.email,
                    "lastName": (result as any).data.profile.lastName,
                    "userName": (result as any).data.profile.username,
                    "phoneNumber": (result as any).data.profile.mobile,
                    "firstName": (result as any).data.profile.firstName,
                    "profilePicture": (result as any).data.profile.imageUrl,
                    "maritalStatus": '',
                    "educationLevel": '',
                    "state": '',
                    "address": '',
                    "lga": '',
                    "city": ''

                }

                const { kycItems } = storeToRefs(useKYCStore());

                kycItems.value.bvn.completed = (result as any).data.profile.hasVerifiedBvn;
                kycItems.value.email.completed = (result as any).data.profile.hasVerifiedEmail;

            }else if(error){
                // console.log(error.value?.data);
            }
        }
        
        return { userProfile, fullName, fetchUserProfile }
    },
    {
        persist: true,
    }
)