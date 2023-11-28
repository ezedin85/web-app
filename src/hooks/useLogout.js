import useAuthContext from "./useAuthContext"

export default function useLogout() {
    const {setAdmin} = useAuthContext()
    function logout() {
        setAdmin(null)
        localStorage.removeItem('adminToken')
    }
  return logout
}
