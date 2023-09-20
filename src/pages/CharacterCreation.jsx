import { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PersonalitySelect from '../components/CreationSteps/Personality';
import BackgroundSelect from '../components/CreationSteps/Background';
import ClassSelect from '../components/CreationSteps/Class';
import RaceSelect from '../components/CreationSteps/Race';
import {
    setBackgrounds,
    setAlignments,
    setClasses,
    setRaces,
    setSpells
} from '../redux/actions/character';
import '../scss/style.scss'

function CharacterCreation() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.auth.user)
    const [step, setStep] = useState(1)
    const [characterData, setCharacterData] = useState({
        name: '',
        alignment: '',
        background: '',
        class: '',
        race: '',
        level: '',
    });
    
    useEffect(() => {
        dispatch(setAlignments())
        dispatch(setBackgrounds())
        dispatch(setClasses())
        dispatch(setRaces())
        dispatch(setSpells())
    }, [dispatch])

    const {classes, races, alignments, spells, backgrounds} = useSelector ((state) => state.character)
    
    const nextStep = () => {setStep(step + 1)}
    const prevStep = () => {setStep(step - 1)}

    const createCharacter = async () => {
    const characterId = uuidv4()
    try {
        const characterRef = db
          .collection("users")
          .doc(user.uid)
          .collection("characters")
          .doc(characterId)
        await characterRef.set({
            ...characterData,
            id: characterId
        })
        navigate("/characters")
      } catch (error) {
        throw new Error(error.message)
      }
    }

    return (
        <div className="root">
            <div className="root_left">
                <button onClick={prevStep} disabled={step === 1}>Anterior</button>
                <button onClick={nextStep}>Siguiente</button>
                <button onClick={createCharacter}>Create</button>
                <p className='subtitle'>{characterData.name}</p>
                <p className='subtitle'>{characterData.alignment}</p>
                <p className='subtitle'>{characterData.class}</p>
                <p className='subtitle'>{characterData.race}</p>
                <p className='subtitle'>{characterData.background}</p>
            </div>
            {step === 1 && (
                <ClassSelect classes={classes} characterData={characterData} setCharacterData={setCharacterData} />
            )}
            {step === 2 && (
                <RaceSelect races={races} characterData={characterData} setCharacterData={setCharacterData} />
            )}
            {step === 3 && (
                <BackgroundSelect backgrounds={backgrounds} characterData={characterData} setCharacterData={setCharacterData} />
            )}
            {step === 4 && (
                <PersonalitySelect alignments={alignments} characterData={characterData} setCharacterData={setCharacterData} />
            )}
            {/* {step === 5 && (
                <LevelSelection races={races} characterData={characterData} setCharacterData={setCharacterData} />
            )} */}
        </div>
    );
}

export default CharacterCreation;