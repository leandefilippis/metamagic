
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser, loginWithGoogle } from '../redux/actions/auth'
import { sidebarData } from '../assets/dataArrays';
import Metabook from '../assets/Metabook.png'
import 'boxicons'

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const sideRef = useRef()

    useEffect(() => {
        //////////////////////// MODAL CLOSE ON OUTER CLICK ////////////////////////
        let sideHandler = (e) => {
          if (sideRef.current && !sideRef.current.contains(e.target)) {
            setSidebar(false);
          }
        }
        document.addEventListener("mousedown", sideHandler)
        return () => {
          document.removeEventListener("mousedown", sideHandler);
        }
        //////////////////////// MODAL CLOSE ON OUTER CLICK ////////////////////////
    }, [])

    const handleGoogleLogin = () => {
        dispatch(loginWithGoogle())
        navigate('/')
    }

    const handleLogout = () => {
        dispatch(logoutUser())
        navigate("/")
    }

    const toggleSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <nav className={sidebar? "sidebar" : "sidebar active"} ref={sideRef}>
            <div className="logo_wrap">
                <Link to="/" onClick={toggleSidebar}>Metamagic</Link>
                <box-icon name={sidebar? "x" : "menu"} id="menu" color="#fff" onClick={toggleSidebar} />
            </div>
            <ul>
                {sidebarData.map((item, index) => {
                    return (
                        <li key={index}>    
                            <Link to={item.path} onClick={sidebar? toggleSidebar : ""}>
                                <box-icon name={item.icon} type={item.type} color="#fff" />
                                <span className="link_text">{item.name}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            {user?
                <div className="user_details">
                    <div className="user_row" onClick={() => navigate("/profile")}>
                        <img src={user.photoURL} alt="photo" />
                        <div className="user_column">
                            <span className="user_name">Leandro</span>
                            <span className="user_title">Admin</span>
                        </div>
                    </div>
                    <box-icon name='log-out' id="logout" color="#fff" onClick={handleLogout} />
                </div>
            :
                <div className="login_container">
                    <box-icon name="google" type="logo" id="google" color="#fff" onClick={handleGoogleLogin} />
                    <button onClick={handleGoogleLogin} id="login">Login with Google</button>
                </div>
            }
        </nav>
  )
}

export default Sidebar