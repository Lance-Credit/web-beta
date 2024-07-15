import { getActivePinia } from 'pinia'

export const useLogout = () => {

  const logOut = async() => {
      
    const { signOut } = useAuth();

    const pinia = getActivePinia();
    
    pinia._s.forEach((store) => store.$reset())

    signOut();

  }

  return {
    logOut
  }
}