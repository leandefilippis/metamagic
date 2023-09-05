// import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { db } from "../../firebase/firebaseConfig";
import { 
    setUserCharactersStart,
    setUserCharactersSuccess,
    setUserCharactersFailure,
    deleteCharacterStart,
    deleteCharacterSuccess,
    deleteCharacterFailure,
} from "../slices/characterSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const SPELLS_URL = "https://www.dnd5eapi.co/api/spells"
const CLASSES_URL = "https://www.dnd5eapi.co/api/classes"
const RACES_URL = "https://www.dnd5eapi.co/api/races"

export const getUserCharacters = () => async (dispatch, getState) => {
    dispatch(setUserCharactersStart())
    try {

        const userId = getState().auth.user.uid; // Agarro el ID del usuario autenticado
        const charactersRef = db.collection('users').doc(userId).collection('characters'); // Refiero a la collecion characters del usuario

        charactersRef.onSnapshot((querySnapshot) => { // Muestro los personajes dentro de la collecion del usuario
            let docs = []
            querySnapshot.forEach((doc) => {
                let data = doc.data()
                docs.push(data)
            }) 
            dispatch(setUserCharactersSuccess(docs))
        })

    } catch (error) {
        dispatch(setUserCharactersFailure(error.message))
    }
}

export const deleteCharacter = (character) => async (dispatch, getState) => {
    dispatch(deleteCharacterStart())
    try {
        const user = getState().auth.user
        db.collection("users").doc(user.uid).collection("characters").doc(character.id).delete()
        dispatch(deleteCharacterSuccess())
    } catch (error) {
        dispatch(deleteCharacterFailure(error.message))
    }
}

export const setClasses = createAsyncThunk(
    "character/setClasses",
    async () => {
        try {
            const response = await axios.get(CLASSES_URL)
            return response.data.results
        } catch (error) {
            throw new Error(error.message)
        }
    }
)

export const setRaces = createAsyncThunk(
    "character/setRaces",
    async () => {
        try {
            const response = await axios.get(RACES_URL)
            return response.data.results
        } catch (error) {
            throw new Error(error.message)
        }
    }
)

export const setSpells = createAsyncThunk(
    "character/setSpells",
    async () => {
        try {
            const response = await axios.get(SPELLS_URL)
            return response.data.results
        } catch (error) {
            throw new Error(error.message)
        }
    }
)