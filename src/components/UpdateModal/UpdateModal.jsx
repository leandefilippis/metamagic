import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setClasses, setRaces, setSpells } from '../../redux/actions/character'
import { db, auth } from '../../firebase/firebaseConfig'
import './UpdateModal.scss'

const initialState = {
    name: "",
    classes: [],
    races: [],
    spells: []
}

const UpdateModal = ({modal, current, modalRef, closeModal}) => {
    const dispatch = (useDispatch())
    const { classes, races, spells } = useSelector(state => state.character)
    const [input, setInput] = useState(initialState)
    const user = useSelector(state => state.auth.user)

    useEffect(() => {
        dispatch(setSpells())
        dispatch(setClasses())
        dispatch(setRaces())
    }, [dispatch])

    const handleOnChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    
    const handleUpdate = (e) => {
        e.preventDefault()
        db.collection("users").doc(user.uid).collection("characters").doc(current.id).update({
            name: input.name,
            spells: input.spells
        })
    }

    return (
        <>
        {/* HACER TASK: CAMBIO DE CURRENT SIN DESAPARECER EL MODAL PARA CAMBIAR EDIT ENTRE PERSONAJES (true - false alternado) */}
            {
            modal ? 
            <div className="modalHeader" ref={modalRef}>
                <h2>Editando a: {current.name}</h2>
                <input className="editInput" name="name" type="text" onChange={(e) => {handleOnChange(e)}} />
                <select name="spells" onChange={(e) => {handleOnChange(e)}} placeholder='Spells'>
                    <option value="Not selected" hidden>Select spells</option>
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
                <button onClick={handleUpdate}>Update</button>
                <button onClick={closeModal}>Cancel</button>
            </div> : <> </>
            }
        </>
    )
}

export default UpdateModal