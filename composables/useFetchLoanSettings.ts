
export const useFetchLoanSettings = () => {
    
    const { apiURL } = useRuntimeConfig().public;

    const fetchLoanSettings = async() => {
        
        const jwt = await $fetch('/api/token');

        const result = await $fetch(`${apiURL}/v1/loans/settings`,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwt?.token}`
            }
        });

        if ((result as any).success && !(result as any).error) {
            return (result as any).data;
        } else {
            // console.log(error.value?.data);
            return null;
        }
    }

    return {
        fetchLoanSettings
    }
}