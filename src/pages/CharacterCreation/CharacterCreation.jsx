import { useState, useEffect } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ClassSelection from '../../components/CharacterCreation/ClassSelection/ClassSelection';
import RaceSelection from '../../components/CharacterCreation/RaceSelection/RaceSelection';
import PersonalitySelect from '../../components/CharacterCreation/PersonalitySelect/PersonalitySelect';
import BackgroundSelection from '../../components/CharacterCreation/BackgroundSelection/BackgroundSelection';
import {
    setBackgrounds,
    setAlignments,
    setClasses,
    setRaces,
    setSpells
} from '../../redux/actions/character';

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
        <div>
            <button onClick={prevStep} disabled={step === 1}>Anterior</button>
            <button onClick={nextStep}>Siguiente</button>
            <button onClick={createCharacter}>Create</button>
            <p>Name: {characterData.name}</p>
            <p>Alignment: {characterData.alignment}</p>
            <p>Class: {characterData.class}</p>
            <p>Race: {characterData.race}</p>
            <p>Background: {characterData.background}</p>
            {step === 1 && (
                <PersonalitySelect alignments={alignments} characterData={characterData} setCharacterData={setCharacterData} />
            )}
            {step === 2 && (
                <BackgroundSelection backgrounds={backgrounds} characterData={characterData} setCharacterData={setCharacterData} />
            )}
            {step === 3 && (
                <ClassSelection classes={classes} characterData={characterData} setCharacterData={setCharacterData} />
            )}
            {step === 4 && (
                <RaceSelection races={races} characterData={characterData} setCharacterData={setCharacterData} />
            )}
            {/* {step === 5 && (
                <LevelSelection races={races} characterData={characterData} setCharacterData={setCharacterData} />
            )} */}
        </div>
    );
}

export default CharacterCreation;