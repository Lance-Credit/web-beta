
export const useLogout = () => {

  const logOut = async() => {
      
    const { signOut } = useAuth();

    signOut();

  }

  return {
    logOut
  }
}