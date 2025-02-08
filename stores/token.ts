
export const useTokenStore = defineStore('token', () => 
    {

        const apiToken: Ref<string | null> = ref(null);

        async function fetchApiToken() {

            const jwt = await $fetch('/api/token');

            if(jwt?.token) {
                apiToken.value = jwt.token;
            } else {
                apiToken.value = null;
                // console.log((result as any).error);
            }
        }

        function $reset() {
            apiToken.value = null
        }
        
        return { fetchApiToken, apiToken, $reset }
    },
    {
        persist: true,
    }
)