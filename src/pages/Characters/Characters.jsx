import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters, deleteCharacter } from '../../redux/actions/character'
import UpdateModal from '../../components/UpdateModal/UpdateModal'
import styles from './Characters.module.css'

const Characters = () => {
  const [modal, setModal] = useState(false)
  const [current, setCurrent] = useState({})
  const characters = useSelector((state) => state.character.characters)
  const dispatch = useDispatch()
  const modalRef = useRef()

  useEffect(() => {
    dispatch(getCharacters())

//////////////////////// MODAL CLOSE ON OUTER CLICK ////////////////////////
    let modalHandler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModal(false);
      }
    }
    document.addEventListener("mousedown", modalHandler)
    return () => {
      document.removeEventListener("mousedown", modalHandler);
    }
    ////////////////////////////////////////////////////////////////////////////
    
  }, [dispatch])

  const deleteOnClick = (name) => {
    dispatch(deleteCharacter(name))
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <div className={styles.wrapper}>
        {characters?.map((el) => {
          return (
            <div className={styles.characterCard} key={el.name}>
              {el.name}, {el.spells}
              <div>
                <button onClick={() => {setModal(!modal)
                  setCurrent(el)}}> Edit </button>

                <button onClick={() => deleteOnClick(el.name)}>Delete</button>
              </div>
            </div>
          )
        })}
        <UpdateModal modal={modal} current={current} modalRef={modalRef} closeModal={closeModal} />
    </div>
  )
}

export default Characters