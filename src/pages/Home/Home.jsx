import React, { useEffect } from 'react'
import { setSpells } from '../../redux/actions/character';
import { useDispatch } from 'react-redux'
import styles from './Home.module.css'

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(setSpells())
  }, [dispatch])
  
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.homeDiv}>
          <p className={styles.homeTitle}>Create</p>
          <p className={styles.homeTitle}>Duel</p>
          <p className={styles.homeTitle}>Level Up.</p>
        </div>
      </div>
    </div>
    
  )
}