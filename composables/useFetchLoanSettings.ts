
export const useFetchLoanSettings = () => {
    
    const { apiURL } = useRuntimeConfig().public;

    const fetchLoanSettings = async() => {
        
        const { data: { value: jwt } } = await useFetch('/api/token');
        
        const { data: { value: result }, error } = await useFetch(`${apiURL}/v1/loans/settings`,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwt?.token}`
            }
        });

        if(result){
            if((result as any).success && !(result as any).error){
                return (result as any).data;
            }
        }else if(error){
            // console.log(error.value?.data);
            return null;
        }
    }

    return {
        fetchLoanSettings
    }
}