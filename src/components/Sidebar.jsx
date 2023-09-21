
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser, loginWithGoogle } from '../redux/actions/auth'
import Metabook from '../assets/Metabook.png'
import 'boxicons'

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const sideRef = useRef()
    const sidebarData = [
        {
            name: "Arena",
            icon: "shield-plus",
            path: "/arena",
        },
        {
            name: "Roll",
            icon: "dice-6",
            path: "/arena",
        },
        {
            name: "Bestiary",
            icon: "skull",
            path: "/bestiary",
        },
        {
            name: "Compendium",
            icon: "book",
            path: "/compendium",
        },
        {
            name: "Characters",
            icon: "id-card",
            path: "/characters",
        },
        {
            name: "Bookmarks",
            icon: "book-bookmark",
            path: "/bookmarks",
        }
    ]

    useEffect(() => {
        //////////////////////// MODAL CLOSE ON OUTER CLICK ////////////////////////
        let menuHandler = (e) => {
          if (sideRef.current && !sideRef.current.contains(e.target)) {
            setSidebar(false);
          }
        }
        document.addEventListener("mousedown", menuHandler)
        return () => {
          document.removeEventListener("mousedown", menuHandler);
        }
        //////////////////////// MODAL CLOSE ON OUTER CLICK ////////////////////////
    }, [])

    const handleGoogleLogin = async () => {
        await dispatch(loginWithGoogle())
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
                <a href="/">Metamagic</a>
                <box-icon name={sidebar? "x" : "menu"} id="menu" color="#fff" onClick={toggleSidebar} />
            </div>
            <ul>
                {sidebarData.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.path} onClick={toggleSidebar}>
                                <box-icon name={item.icon} type="solid" color="#fff" />
                                <span className="link_text">{item.name}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <div className="user_wrap">
                <div className="user_profile">
                    {user?
                        <div className="user_details">
                            <img src={user.photoURL} alt="photo" />
                            <div className="flex_column">
                                <div className='user_name'>Leandro</div>
                                <div className="user_title">Admin</div>
                            </div>
                            <box-icon name='log-out' id="logout" color="#fff" onClick={handleLogout} />
                        </div>
                            :
                        <button onClick={handleGoogleLogin} id="login">Login with Google</button>
                    }
                </div>
            </div>
        </nav>
  )
}

export default Sidebar