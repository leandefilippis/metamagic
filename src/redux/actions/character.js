// import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as types from "../../types/types";
import { db } from "../../firebase/firebaseConfig";
import { 
    setCharactersStart,
    setCharactersSuccess,
    setCharactersFailure,
    updateCharacterStart,
    updateCharacterSuccess,
    updateCharacterFailure,
    deleteCharacterStart,
    deleteCharacterSuccess,
    deleteCharacterFailure,
    setSpellsStart,
    setSpellsSuccess,
    setSpellsFailure,
} from "../slices/characterSlice";

const SPELLS_URL = "https://www.dnd5eapi.co/api/spells"
// const CLASSES_URL = "https://www.dnd5eapi.co/api/classes"
// const RACES_URL = "https://www.dnd5eapi.co/api/races"

export const getCharacters = () => async (dispatch, getState) => {
    dispatch(setCharactersStart())
    try {

        const userId = getState().auth.user.uid; // Agarro el ID del usuario autenticado
        const charactersRef = db.collection('users').doc(userId).collection('characters'); // Refiero a la collecion characters del usuario

        charactersRef.onSnapshot((querySnapshot) => { // Muestro los personajes dentro de la collecion del usuario
            let docs = []
            querySnapshot.forEach((doc) => {
                let data = doc.data()
                docs.push(data)
            })
            dispatch(setCharactersSuccess(docs))
        })

    } catch (error) {
        dispatch(setCharactersFailure(error.message))
    }
}

export const updateCharacter = (data) => async (dispatch) => {
    dispatch(updateCharacterStart())
    try {
        db.collection("characters").doc(data.id).update({
            name: data.name,
            spells: data.spells
        })
        dispatch(updateCharacterSuccess())
    } catch (error) {
        dispatch(updateCharacterFailure(error.message))
    }
}

export const deleteCharacter = (character) => async (dispatch) => {
    dispatch(deleteCharacterStart())
    try {
        db.collection(types.CHARACTERS).doc(character).delete()
        dispatch(deleteCharacterSuccess())
    } catch (error) {
        dispatch(deleteCharacterFailure(error.message))
    }
}

export const getSpells = () => async (dispatch) => {
    dispatch(setSpellsStart())
    try {
        const {data} = await axios.get(SPELLS_URL)
        dispatch(setSpellsSuccess(data.results))
    } catch (error) {
        dispatch(setSpellsFailure(error.message))
    }
}

// export const getClasses = createAsyncThunk(
//     "character/getClasses",
//     async () => {
//         try {
//             const {data} = await axios.get(CLASSES_URL)
//             console.log(data.results)
//             return data
//         } catch (error) {
//             throw new Error(error)
//         }
//     }
// )

// export const getRaces = createAsyncThunk(
//     "character/getRaces",
//     async () => {
//         try {
//             const {data} = await axios.get(RACES_URL)
//             console.log(data)
//             return data
//         } catch (error) {
//             throw new Error(error)
//         }
//     }
// )

// export const getSpells = createAsyncThunk(
//     "character/getSpells",
//         async () => {
//             try {
//                 const {data} = await axios.get(SPELLS_URL)
//                 return data
//             } catch (error) {
//                 throw new Error(error)
//             }
//         }
// )

/* PASAR A ASYNC THUNK ESTAS FUNCIONES UNA VEZ ARREGLE EL ERROR DE "TYPE" EN .ADDCASE */