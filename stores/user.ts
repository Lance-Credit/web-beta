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
            
            const result = await $fetch(`${apiUrl}/v1/profile`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            

            if ((result as any).success && !(result as any).error) {
                // console.log(result);
                userProfile.value = {
                    "id": '',
                    "email": (result as any).data.email,
                    "lastName": (result as any).data.lastName,
                    "userName": (result as any).data.username,
                    "phoneNumber": (result as any).data.mobile,
                    "firstName": (result as any).data.firstName,
                    "profilePicture": '',
                    "maritalStatus": (result as any).data.profile.maritalStatus,
                    "educationLevel": (result as any).data.profile.levelOfEducation,
                    "residentialAddress": {
                        "city": (result as any).data.profile.residentialAddress?.city,
                        "country": (result as any).data.profile.residentialAddress?.country,
                        "lga": (result as any).data.profile.residentialAddress?.lga,
                        "state": (result as any).data.profile.residentialAddress?.state,
                        "street": (result as any).data.profile.residentialAddress?.street,
                    },

                }

                const { fetchKycStatus } = useKYCStore();

                fetchKycStatus(token, apiUrl);

            } else {
                console.log((result as any).error);
            }
        }
        
        return { userProfile, fullName, fetchUserProfile }
    },
    {
        persist: true,
    }
)