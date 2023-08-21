import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSpells } from '../../redux/actions/character'
import { db } from '../../firebase/firebaseConfig'
import styles from './UpdateModal.module.css'

const initialState = {
    name: "",
    spells: [],
    // race: ""
}

const UpdateModal = ({modal, current, modalRef, closeModal}) => {
    const dispatch = (useDispatch())
    const character = useSelector(state => state.character)
    const spells = useSelector(state => state.character.spells)
    const [input, setInput] = useState(initialState)
    

    useEffect(() => {
        dispatch(getSpells())
        // dispatch(getClasses())
        // dispatch(getRaces())
    }, [dispatch])

    const handleOnChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
    }
    
    const handleUpdate = (e) => {
        console.log(character)
        e.preventDefault()
        db.collection("characters").doc(current.id).update({
            name: input.name,
            spells: input.spells
        })
    }

    return (
        <>
        {/* HACER TASK: CAMBIO DE CURRENT SIN DESAPARECER EL MODAL PARA CAMBIAR EDIT ENTRE PERSONAJES (true - false alternado) */}
            {
            modal ? 
            <div className={styles.modalHeader} ref={modalRef}>
                <h2>Editando a: {current.name}</h2>
                <input className={styles.editInput} name="name" type="text" onChange={(e) => {handleOnChange(e)}} />
                <select name="spells" onChange={(e) => {handleOnChange(e)}} placeholder='Spells'>
                    <option value="Not selected" hidden>Select spell</option>
                    {spells?.map((opt) => (
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