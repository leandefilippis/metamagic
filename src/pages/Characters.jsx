import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCharacters, deleteCharacter } from '../redux/actions/character'
import UpdateModal from '../components/UpdateModal/UpdateModal'
import Header from '../components/Header'
import CharacterCard from '../components/CharacterCard'
import flowers from '../assets/flowers.png'
import trees from '../assets/trees.png'
import '../scss/style.scss'

const Characters = () => {
  const [modal, setModal] = useState(false)
  const [current, setCurrent] = useState({})
  const characters = useSelector((state) => state.character.characters)
  const dispatch = useDispatch()
  const modalRef = useRef()

  useEffect(() => {
    dispatch(setCharacters())
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

  const deleteOnClick = (character) => {
    dispatch(deleteCharacter(character))
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <div className="root">
      <Header title="Characters" />
      <img src={trees} alt='' className='wallpaper' />
      <div className="characters_container">
        {characters?.map((character) => {
            return (
              <CharacterCard 
                character={character}
                modal={modal}
                setModal={setModal}
                setCurrent={setCurrent}
                deleteOnClick={deleteOnClick}
                key={character.name}
              />
            )
        })}
        <UpdateModal modal={modal} current={current} modalRef={modalRef} closeModal={closeModal} />
      </div>
    </div>
  )
}

export default Characters