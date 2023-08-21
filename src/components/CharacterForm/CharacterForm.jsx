import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSpells, getClasses, getRaces } from '../../redux/actions/character'
import { db } from '../../firebase/firebaseConfig'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  name: "",
  spells: [],
  // race: ""
}

const AddCharacter = () => {
  const dispatch = useDispatch()
  const spells = useSelector(state => state.character.spells)
  const [input, setInput] = useState(initialState)
  // const classes = useSelector(state => state.character.classes)
  // const races = useSelector(state => state.character.races)

  useEffect(() => {
    dispatch(getSpells())
    // dispatch(getClasses())
    // dispatch(getRaces())
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

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = uuidv4()
    db.collection("characters").doc(id).set({
      id: id,
      name: input.name,
      spells: input.spells
    })
    clearInput()
  }

  
  return (
    <form className='wrapper' onSubmit={handleSubmit}>
      {/* HACER FOR OF PARA PEGAR NUEVAMENTE A CADA HECHIZO PARA FETCHEAR LA INFORMACION CONCRETA DE CADA HECHIZO */}
      <input type="text" name="name" onChange={(e) => {handleOnChange(e)}}autoComplete='off' placeholder='Name'></input>
      <select name="spells" onChange={(e) => {handleOnChange(e)}} placeholder='Spells'>
        <option value="Not selected" hidden>Select spell</option>
        {spells?.map((opt) => (
          <option key={opt.index} value={opt.name}>{opt.name}</option>
        ))}
      </select>
      <button type="submit">Crear</button>
    </form>
  )
}

export default AddCharacter