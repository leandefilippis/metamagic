import axios from "axios";
import { db } from "../../firebase/firebaseConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const CLASSES_URL = "https://api.open5e.com/v1/classes/"
const CLASSES_URL = "http://localhost:8080/api/v1/classes"
const SUBCLASSES_URL = "https://www.dnd5eapi.co/api/subclasses"
const RACES_URL = "https://www.dnd5eapi.co/api/races"
const PROFICIENCIES_URL = "https://www.dnd5eapi.co/api/proficiencies"
const BACKGROUNDS_URL = "https://api.open5e.com/v1/backgrounds/"
const ALIGNMENTS_URL = "https://www.dnd5eapi.co/api/alignments"
const TRAITS_URL = "https://www.dnd5eapi.co/api/traits"
const SKILLS_URL = "https://www.dnd5eapi.co/api/skills"
const SPELLS_URL = "https://www.dnd5eapi.co/api/spells"


export const setCharacters = createAsyncThunk(
    "character/setCharacters",
    async (_, {getState, rejectWithValue}) => {
        try {
            const userId = getState().auth.user.uid; // Agarro el ID del usuario autenticado
            const charactersRef = db.collection('users').doc(userId).collection('characters'); // Refiero a la collecion characters del usuario
            const querySnapshot = await charactersRef.get() // Obtengo la colección
            const characters = querySnapshot.docs.map((doc) => doc.data()) // La mapeo
            return characters
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const deleteCharacter = createAsyncThunk(
    "character/deleteCharacter",
    async (character, {getState, rejectWithValue}) => {
        try {
            const userId = getState().auth.user.uid; // Agarro el ID del usuario autenticado
            await db.collection("users").doc(userId).collection("characters").doc(character.id).delete() // Borro el personaje
            return character.id
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const setClasses = createAsyncThunk(
    "character/setClasses",
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(CLASSES_URL)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
    )

export const setRaces = createAsyncThunk(
    "character/setRaces",
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(RACES_URL)
            return response.data.results
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const setSpells = createAsyncThunk(
    "character/setSpells",
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(SPELLS_URL)
            return response.data.results
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const setBackgrounds = createAsyncThunk(
    "character/setBackgrounds",
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(BACKGROUNDS_URL)
            return response.data.results
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const setAlignments = createAsyncThunk(
    "character/setAlignments",
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(ALIGNMENTS_URL)
            return response.data.results
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const setClassSpells = createAsyncThunk(
    "character/setClassSpells",
    async (current, {rejectWithValue}) => {
        try {
            const response = await axios.get(`https://www.dnd5eapi.co/api/classes/${current}/spells`)
            return response.data.results
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)