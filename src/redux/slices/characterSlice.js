import { createSlice } from '@reduxjs/toolkit'
import { setClasses, setRaces, setSpells } from '../actions/character'

export const characterSlice = createSlice({
    name: "character",
    initialState: {
        characters: [],
        classes: [],
        races: [],
        spells: [],
        status: 'idle',
        loading: false,
        error: null,
    },
    reducers: {

        /* FETCH */
        setUserCharactersStart(state){
            state.loading = true
            state.error = null
        },
        setUserCharactersSuccess(state, action){
            state.characters = action.payload
            state.loading = false
        },
        setUserCharactersFailure(state, action){
            state.loading = false
            state.error = action.payload
        },

        /* UPDATE */
        updateCharacterStart(state){
            state.loading = true
            state.error = null
        },
        updateCharacterSuccess(state, action){
            state.loading = false
            state.characters = action.payload
        },
        updateCharacterFailure(state, action){
            state.loading = false
            state.error = action.payload
        },

        /* DELETE */
        deleteCharacterStart(state){
            state.loading = true
            state.error = null
        },
        deleteCharacterSuccess(state){
            state.loading = false
        },
        deleteCharacterFailure(state, action){
            state.loading = false
            state.error = action.payload
        },
    },
    extraReducers: (builder) => {
        builder

        /////////////////////// CLASSES ///////////////////////
        .addCase(setClasses.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(setClasses.fulfilled, (state, action) => {
            state.classes = action.payload
            state.loading = false
        })
        .addCase(setClasses.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        /////////////////////// CLASSES ///////////////////////


        /////////////////////// RACES ///////////////////////
        .addCase(setRaces.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(setRaces.fulfilled, (state, action) => {
            state.races = action.payload
            state.loading = false
        })
        .addCase(setRaces.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        /////////////////////// RACES ///////////////////////

        /////////////////////// SPELLS ///////////////////////
        .addCase(setSpells.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(setSpells.fulfilled, (state, action) => {
            state.spells = action.payload
            state.loading = false
        })
        .addCase(setSpells.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        /////////////////////// SPELLS ///////////////////////
    },
})

export const { 
    setUserCharactersStart,
    setUserCharactersSuccess,
    setUserCharactersFailure,
    updateCharacterStart,
    updateCharacterSuccess,
    updateCharacterFailure,
    deleteCharacterStart,
    deleteCharacterSuccess,
    deleteCharacterFailure,
} = characterSlice.actions

export default characterSlice.reducer