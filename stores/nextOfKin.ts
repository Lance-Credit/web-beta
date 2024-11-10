export const useNextOfKinStore = defineStore('nextOfKin', () => 
    {
        const nextOfKinDetails: Ref<NextOfKinDetails | null> = ref(null);

        function $reset() {
            nextOfKinDetails.value = null;
        }
        
        return { nextOfKinDetails, $reset }
    },
    {
        persist: true,
    }
)

interface NextOfKinDetails {
    email: string,
    lastName: string,
    firstName: string,
    phoneNumber: string,
    relationship: string,
    address: {
        city: string
        country: string
        lga: string
        state: string
        street: string
    }
}