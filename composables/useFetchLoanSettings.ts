const { apiFetch } = useApiFetch();

export const useFetchLoanSettings = () => {

    const fetchLoanSettings = async() => {
        
        const jwt = await $fetch('/api/token');

        const result = await apiFetch('loans/settings');

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