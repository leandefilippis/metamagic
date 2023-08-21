import React, { useEffect } from 'react'
import { getSpells } from '../../redux/actions/character';
import { useDispatch } from 'react-redux'
import styles from './Home.module.css'

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getSpells())
  }, [dispatch])
  
  // const getSpells = async () => {
  //   try {
  //     const response = await axios.get("https://www.dnd5eapi.co/api/classes/sorcerer/spells")
  //     console.log(response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <div>
      <div className={styles.wrapper}>
        {/* <button onClick={() => {getSpells()}}>ECHISOS</button> */}
        <a href="/create">
        <button>Crear Personaje</button>
        </a>

        <a href="/characters">
        <button>Personajes</button>
        </a>
      </div>
    </div>
    
  )
}