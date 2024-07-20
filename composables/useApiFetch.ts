const { logOut } = useLogout();

export const useApiFetch = () => {
    
  const apiFetch = async(
    endpoint: string,
    method: any = 'GET',
    body: Record<any, any> | undefined = undefined
  ) => {
    
    const { apiURL } = useRuntimeConfig().public;
    
    const jwt = await $fetch('/api/token');
    





    try {
      const result = await $fetch(`${apiURL}/${endpoint}`,{
          method: method,
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${jwt?.token}`
          },
          body: body
      });

      if ((result as any).success && !(result as any).error) {
          console.log('inside api fetch success');
          console.log(result);
          return {
            success: true,
            data: (result as any).data
          }
      } else {
          console.log('inside api fetch failure');
          console.log((result as any).error);
          return {
            success: false,
            error: (result as any).error
          }
      }
    } catch (error) {
      console.log('inside api fetch try error');
      console.log(error);
      console.log((error as any).response);

      if((error as any).response && (error as any).response.status == 401){
        logOut();
      } else {
        return (error as any).response._data
      }
    }





  }

  return {
      apiFetch
  }
}