import { useState } from 'react';
import ClassSelection from '../../components/CharacterCreation/ClassSelection/ClassSelection';
import RaceSelection from '../../components/CharacterCreation/RaceSelection/RaceSelection';
import PersonalitySelect from '../../components/CharacterCreation/PersonalitySelect/PersonalitySelect';
import BackgroundSelection from '../../components/CharacterCreation/BackgroundSelection/BackgroundSelection';
import { db } from '../../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

function CharacterCreation() {
    const [step, setStep] = useState(1); // Controla el paso actual de la creación del personaje
    const [characterData, setCharacterData] = useState({
        name: '',
        alignment: '',
        background: '',
        class: '',
        race: '',
    });

    const navigate = useNavigate(); // Para redireccionar después de guardar
    const user = useSelector((state) => state.auth.user);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const createCharacter = async () => {
    const characterId = uuidv4();
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
        navigate("/characters");
      } catch (error) {
        console.error("Error al guardar el personaje:", error)
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
                <PersonalitySelect characterData={characterData} setCharacterData={setCharacterData} />
            )}
            {step === 2 && (
                <BackgroundSelection characterData={characterData} setCharacterData={setCharacterData} />
            )}
            {step === 3 && (
                <ClassSelection characterData={characterData} setCharacterData={setCharacterData} />
            )}
            {step === 4 && (
                <RaceSelection characterData={characterData} setCharacterData={setCharacterData} />
            )}
        </div>
    );
}

export default CharacterCreation;