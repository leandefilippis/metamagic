import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCharacters, deleteCharacter } from '../redux/actions/character'
import UpdateModal from '../components/UpdateModal/UpdateModal'
import '../scss/style.scss'
//////////////////////////////////////////////// 3D ////////////////////////////////////////////////
import CharacterScene from '../scenes/CharacterScene/CharacterScene'
import { Environment, OrbitControls, Stars } from '@react-three/drei'
import Sphere from '../models/Sphere'
import Model from '../models/Model'
import Cylinder from '../models/Cylinder'
import Cube from '../models/Box'
import D20 from '../models/D20'
//////////////////////////////////////////////// 3D ////////////////////////////////////////////////

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
    <>
    <div className="wrapper">
      {characters?.map((character) => {
        return (
          <div className="characterCard" key={character.name}>
            <p>{character.name}</p>
            <p>{character.class}</p>
            <p>{character.race}</p>
            <div>
              <button onClick={() => {setModal(!modal)
                setCurrent(character)}}> Edit </button>
              <button onClick={() => deleteOnClick(character)}>Delete</button>
            </div>
          </div>
        )
      })}
      <UpdateModal modal={modal} current={current} modalRef={modalRef} closeModal={closeModal} />

















    </div>
    <div className="escena">
          <CharacterScene>
            <color attach="background" args={['#161c24']} />
            <Sphere color='#fafafa' position={[-3, 0, 0]} />
            <Sphere color='#ff0000' position={[3, 0, 0]}/>
            <Sphere color='#0000ff' position={[0, 0, -3]}/>
            <Sphere color='#f51f7f' position={[0, 0, 3]}/>
            <ambientLight />
            <OrbitControls />
            <Environment preset='city'/>
            <group position={[0, -3, 0]}>
              <Cylinder color='black' envMapIntensity={1} position={[0, -6, 0]} args={[15, 15, 15, 64]}/>
              <Cube color='#7a4f82' position={[0, 2.04, 0]} args={[10, 10]} rotation={[-7.855, 0, 0.1]}/>
              <Cube color='white' position={[0, 2.02, 0]} args={[11, 11]} rotation={[-7.855, 0, 0.1]}/>
            </group>
              <D20 color="#8e00f4" envMapIntensity={0.3} rougness={0} metalness={0} />
            <Stars factor={3} fade speed={1} radius={50}/>
            {/* <Model /> */}
          </CharacterScene>
    </div> 
    </>
  )
}

export default Characters