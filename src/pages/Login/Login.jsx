import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginWithGoogle, logoutUser } from '../../redux/actions/auth';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleGoogleLogin = async () => {
    await dispatch(loginWithGoogle())
    navigate('/home')
  }

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}


export default Login