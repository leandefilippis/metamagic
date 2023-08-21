import React from 'react'
import styles from './Nav.module.css'
import Metabook from '../../assets/Metabook.png'

const Nav = () => {
  return (
    <div className={styles.Nav}>
      <a href="/home">
        <img src={Metabook} alt="Metabook" className={styles.Logo}/>
      </a>
    </div>
  )
}

export default Nav