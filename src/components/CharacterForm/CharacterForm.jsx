import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setClasses, setRaces, setSpells } from '../../redux/actions/character'
import { db, auth } from '../../firebase/firebaseConfig'
import { v4 as uuidv4 } from 'uuid';
import styles from './CharacterForm.module.css'

const initialState = {
  name: "",
  class: "",
  race: "",
  spells: []
}

const AddCharacter = () => {
  const dispatch = useDispatch()
  const classes = useSelector(state => state.character.classes)
  const races = useSelector(state => state.character.races)
  const spells = useSelector(state => state.character.spells)
  const user = useSelector(state => state.auth.user)
  const [input, setInput] = useState(initialState)
  
  useEffect(() => {
    dispatch(setSpells())
    dispatch(setClasses())
    dispatch(setRaces())
  }, [dispatch])
  
  const clearInput = () => {
    setInput(initialState)
  }
  
  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    console.log(input)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!user) {
      // Si no hay user logeado
      return;
    }
    
    const characterId = uuidv4();

    try {
      await db.collection("users").doc(user.uid).collection("characters").doc(characterId).set({
        id: characterId,
        name: input.name,
        spells: input.spells
      });

      clearInput();
    } catch (error) {
      throw new Error("Error creating the character: ", error);
    }
  }

  
  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      {/* HACER FOR OF PARA PEGAR NUEVAMENTE A CADA HECHIZO PARA FETCHEAR LA INFORMACION CONCRETA DE CADA HECHIZO */}
      <input type="text" name="name" onChange={(e) => {handleOnChange(e)}}autoComplete='off' placeholder='Name'></input>
      <select name="spells" onChange={(e) => {handleOnChange(e)}} placeholder='Spells'>
        <option value="Not selected" hidden>Select spell</option>
        {spells?.map((opt) => (
          <option key={opt.index} value={opt.name}>{opt.name}</option>
        ))}
      </select>
      <select name="classes" onChange={(e) => {handleOnChange(e)}} placeholder='Classes'>
        <option value="Not selected" hidden>Select a class</option>
        {classes?.map((opt) => (
          <option key={opt.index} value={opt.name}>{opt.name}</option>
        ))}
      </select>
      <select name="races" onChange={(e) => {handleOnChange(e)}} placeholder='Races'>
        <option value="Not selected" hidden>Select a race</option>
        {races?.map((opt) => (
          <option key={opt.index} value={opt.name}>{opt.name}</option>
        ))}
      </select>
      <button type="submit">Crear</button>
    </form>
  )
}

export default AddCharacter