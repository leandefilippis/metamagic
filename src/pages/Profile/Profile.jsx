import React from 'react'
import styles from './Profile.module.css'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector((state) => state.auth.user)
  console.log(user)

  return (
    <div className={styles.wrapper}>
      Profile
      <p>{user.displayName}</p>
      <p>{user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  )
}

export default Profile