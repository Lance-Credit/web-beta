import { useKYCStore } from './kyc';

import { useNextOfKinStore } from './nextOfKin';

const { apiFetch } = useApiFetch();

export const useUserStore = defineStore('user', () => 
    {
        const { nextOfKinDetails } = storeToRefs(useNextOfKinStore());

        const userProfile: Ref<User | null> = ref(null);

        const fullName = computed(()=>{
            if(userProfile.value){
                const firstName = (userProfile.value.firstName)[0].toUpperCase() + (userProfile.value.firstName).substring(1).toLowerCase();
                const lastName = (userProfile.value.lastName)[0].toUpperCase() + (userProfile.value.lastName).substring(1).toLowerCase();
                return `${firstName} ${lastName}`;
            }
            return '';
        });

        async function fetchUserProfile() {

            const { fetchKycStatus } = useKYCStore();

            fetchKycStatus();

            const result = await apiFetch('profile');

            if ((result as any).success && !(result as any).error) {
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
                    "address": {
                        "city": (result as any).data.profile.address?.city,
                        "country": (result as any).data.profile.address?.country,
                        "lga": (result as any).data.profile.address?.lga,
                        "state": (result as any).data.profile.address?.state,
                        "street": (result as any).data.profile.address?.street,
                    },

                }

                nextOfKinDetails.value = {
                    "email": (result as any).data.profile.nextOfKin?.email,
                    "lastName": (result as any).data.profile.nextOfKin?.lastName,
                    "firstName": (result as any).data.profile.nextOfKin?.firstName,
                    "phoneNumber": (result as any).data.profile.nextOfKin?.phoneNumber,
                    "relationship": (result as any).data.profile.nextOfKin?.relationship,
                    "address": {
                        "lga": (result as any).data.profile.nextOfKin?.address.lga,
                        "city": (result as any).data.profile.nextOfKin?.address.city,
                        "state": (result as any).data.profile.nextOfKin?.address.state,
                        "street": (result as any).data.profile.nextOfKin?.address.street,
                        "country": (result as any).data.profile.nextOfKin?.address.country
                    },
                }

            } else {
                // console.log((result as any).error);
            }
        }

        function $reset() {
            userProfile.value = null
        }

        function $resetUserProfile() {
            userProfile.value = null
        }
        
        return { userProfile, fullName, fetchUserProfile, $reset, $resetUserProfile }
    },
    {
        persist: true,
    }
)