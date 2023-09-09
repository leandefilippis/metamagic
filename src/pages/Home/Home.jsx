import React, { useEffect } from 'react'
import { setSpells } from '../../redux/actions/character';
import { useDispatch } from 'react-redux'
import styles from './Home.module.css'
import homepaper from '../../assets/homepaper.jpg'

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(setSpells())
  }, [dispatch])
  
  return (
    <div id={styles.root}>
      <img src={homepaper} id={styles.homepaper}/>
      <div className={styles.wrapper}>
        <div className={styles.homeDiv}>
        <a href="/characters/create">
        <p className={styles.homeTitle}>Create</p>
      </a>
          <p className={styles.homeTitle}>Duel</p>
          <p className={styles.homeTitle}>Level Up.</p>
        </div>
      </div>
    </div>
    
  )
}