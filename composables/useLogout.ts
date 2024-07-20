import { getActivePinia } from 'pinia'

export const useLogout = () => {

  const logOut = async() => {
      
    const { signOut } = useAuth();

    signOut();
    const pinia = getActivePinia();
    
    pinia._s.forEach((store) => store.$reset())


  }

  return {
    logOut
  }
}