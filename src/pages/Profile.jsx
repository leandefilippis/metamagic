import React from 'react'
import { useSelector } from 'react-redux'
import '../scss/style.scss'

const Profile = () => {
  const user = useSelector((state) => state.auth.user)
  console.log(user)

  return (
    <div className="wrapper">
      Profile
      <p>{user.displayName}</p>
      <p>{user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  )
}

export default Profile