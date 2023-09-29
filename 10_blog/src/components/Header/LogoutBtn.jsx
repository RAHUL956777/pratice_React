import { useDispatch } from 'react-redux';
import authService from '../../appwrite/config'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispacth = useDispatch();
    const logOutHandler=() => {
        authService.logout().then(()=>{
            dispacth(logout());
        })
    }
  return (
    <button
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logOutHandler}>Logout</button>
  )
}

export default LogoutBtn
