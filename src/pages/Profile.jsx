import React from 'react'
import { useSelector } from 'react-redux'
import Wallpaper from '../assets/homepaper.jpg'
import Header from '../components/Header'
import '../scss/style.scss'

const Profile = () => {
  const user = useSelector((state) => state.auth.user)
  console.log(user)

  return (
    <div className="root">
      <Header title="My profile" />
      <div className="root_body">  
      </div>
    </div>
  )
}

export default Profile