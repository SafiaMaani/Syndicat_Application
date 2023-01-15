import { Navigate, Outlet } from 'react-router-dom'
const ProtectRoute = () => {
   
return (
    localStorage.getItem('localStorage') ? <Outlet/> : <Navigate to='/'/>
  )
}

export default ProtectRoute