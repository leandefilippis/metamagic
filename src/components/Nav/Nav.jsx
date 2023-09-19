import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginWithGoogle } from '../../redux/actions/auth';
import './Nav.scss'
import DropdownItem from '../DropdownItem/DropdownItem';
import Metabook from '../../assets/Metabook.png'
import Profile from '../../assets/Profile.png'
import Settings from '../../assets/Settings.png'
import Logout from '../../assets/Logout.png'
import Edit from '../../assets/Edit.png'

const Nav = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [menu, setMenu] = useState(false)
  const menuRef = useRef()
  const user = useSelector(state => state.auth.user)

  useEffect(() => {
    //////////////////////// MODAL CLOSE ON OUTER CLICK ////////////////////////
    let menuHandler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenu(false);
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
    navigate('/home')
  }

  return (
    <div id="nav">
      <div id="left">
        <a href="/"><img src={Metabook} alt="Metabook" id="logo"/></a>
      </div>
      <div id="right">
      { user
        ? <div className="menuContainer" ref={menuRef}>
          <div className="menuTrigger" onClick={() => {setMenu(!menu)}}>
            <img src={user?.photoURL} alt="Profile image" className="ProfilePic"/>  
          </div>
          <div className={`${menu? "active" : "inactive"}`} id="dropdownMenu">
            <ul>
              <DropdownItem img={Profile} text={'Profile'} href={'/profile'}/>
              <DropdownItem img={Edit} text={'Characters'} href={'/characters'}/>
              <DropdownItem img={Settings} text={'Settings'} href={'/settings'}/>
              <DropdownItem img={Logout} text={'Logout'}/>
            </ul>
          </div>
        </div>
        : <div className="menuTrigger"><button onClick={handleGoogleLogin}>Login with Google</button></div>
      }
      </div>
    </div>
  )
}

export default Nav