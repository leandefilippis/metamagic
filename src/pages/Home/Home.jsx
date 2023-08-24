import React, { useEffect } from 'react'
import { getSpells } from '../../redux/actions/character';
import { useDispatch } from 'react-redux'
import styles from './Home.module.css'

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getSpells())
  }, [dispatch])
  
  return (
    <div>
      <div className={styles.wrapper}>
      </div>
    </div>
    
  )
}