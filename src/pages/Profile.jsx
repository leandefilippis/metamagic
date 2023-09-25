import React from 'react'
import { useSelector } from 'react-redux'
import Wallpaper from '../assets/homepaper.jpg'
import '../scss/style.scss'

const Profile = () => {
  const user = useSelector((state) => state.auth.user)
  console.log(user)

  return (
    <div className="root">
      <img src={Wallpaper} alt="wallpaper" className='root_background' />
    </div>
  )
}

export default Profile