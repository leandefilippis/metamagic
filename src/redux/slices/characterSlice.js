import { createSlice } from '@reduxjs/toolkit'
import {
    setCharacters,
    deleteCharacter,
    setClasses,
    setRaces,
    setSpells,
    setClassSpells,
    setBackgrounds,
    setAlignments,
} from '../actions/character'

export const characterSlice = createSlice({
    name: "character",
    initialState: {
        characters: [],
        classes: [],
        races: [],
        spells: [],
        classSpells: [],
        backgrounds: [],
        alignments: [],
        status: 'idle',
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder

        /////////////////////// CHARACTERS ///////////////////////
        .addCase(setCharacters.pending, (state) => {
            state.status = 'pending'
            state.error = null
        })
        .addCase(setCharacters.fulfilled, (state, action) => {
            state.characters = action.payload
            state.status = 'fulfilled'
        })
        .addCase(setCharacters.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
        //////////////////////////////////////////////////////////
        .addCase(deleteCharacter.pending, (state) => {
            state.status = 'pending'
            state.error = null
        })
        .addCase(deleteCharacter.fulfilled, (state, action) => {
            state.characters = state.characters.filter(character => character.id !== action.payload)
            state.status = 'fulfilled'
        })
        .addCase(deleteCharacter.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
        /////////////////////// CHARACTERS ///////////////////////

        /////////////////////// CLASSES ///////////////////////
        .addCase(setClasses.pending, (state) => {
            state.status = 'pending'
            state.error = null
        })
        .addCase(setClasses.fulfilled, (state, action) => {
            state.classes = action.payload
            state.status = 'fulfilled'
        })
        .addCase(setClasses.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
        /////////////////////// CLASSES ///////////////////////


        /////////////////////// RACES ///////////////////////
        .addCase(setRaces.pending, (state) => {
            state.status = 'pending'
            state.error = null
        })
        .addCase(setRaces.fulfilled, (state, action) => {
            state.races = action.payload
            state.status = 'fulfilled'
        })
        .addCase(setRaces.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
        /////////////////////// RACES ///////////////////////

        /////////////////////// SPELLS ///////////////////////
        .addCase(setSpells.pending, (state) => {
            state.status = 'pending'
            state.error = null
        })
        .addCase(setSpells.fulfilled, (state, action) => {
            state.spells = action.payload
            state.status = 'fulfilled'
        })
        .addCase(setSpells.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
        //////////////////////////////////////////////////////
        .addCase(setClassSpells.pending, (state) => {
            state.status = 'pending'
            state.error = null
        })
        .addCase(setClassSpells.fulfilled, (state, action) => {
            state.classSpells = action.payload
            state.status = 'fulfilled'
        })
        .addCase(setClassSpells.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
        /////////////////////// SPELLS ///////////////////////

        /////////////////////// BACKGROUNDS ///////////////////////
        .addCase(setBackgrounds.pending, (state) => {
            state.status = 'pending'
            state.error = null
        })
        .addCase(setBackgrounds.fulfilled, (state, action) => {
            state.backgrounds = action.payload
            state.status = 'fulfilled'
        })
        .addCase(setBackgrounds.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
        /////////////////////// BACKGROUNDS ///////////////////////

        /////////////////////// ALIGNMENT ///////////////////////
        .addCase(setAlignments.pending, (state) => {
            state.status = 'pending'
            state.error = null
        })
        .addCase(setAlignments.fulfilled, (state, action) => {
            state.alignments = action.payload
            state.status = 'fulfilled'
        })
        .addCase(setAlignments.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
        /////////////////////// ALIGNMENT ///////////////////////
    },
})

export const {
} = characterSlice.actions

export default characterSlice.reducer