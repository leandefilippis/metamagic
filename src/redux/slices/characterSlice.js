import { createSlice } from '@reduxjs/toolkit'

export const characterSlice = createSlice({
    name: "character",
    initialState: {
        characters: [],
        // classes: [],
        // races: [],
        spells: [],
        status: 'idle',
        loading: false,
        error: null,
    },
    reducers: {

        /* FETCH */
        setCharactersStart(state){
            state.loading = true
            state.error = null
        },
        setCharactersSuccess(state, action){
            state.characters = action.payload
            state.loading = false
        },
        setCharactersFailure(state, action){
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

        /* FETCH */
        setSpellsStart(state){
            state.loading = true
            state.error = null
        },
        setSpellsSuccess(state, action){
            state.spells = action.payload
            state.loading = false
        },
        setSpellsFailure(state, action){
            state.loading = false
            state.error = action.payload
        },
        // setClasses(state, action){
        //     state.classes = action.payload
        // },
        // setRaces(state, action){
        //     state.races = action.payload
        // }
    },
    // extraReducers: (builder) => {
    //     builder
    //     .addCase(getSpells.pending, (state) => {
    //         state.loading = true
    //         state.error = null
    //     })
    //     .addCase(getSpells.fullfilled, (state, action) => {
    //         state.loading = false
    //         state.spells = action.payload
    //         state.error = ""
    //     })
    //     .addCase(getSpells.rejected, (state, action) => {
    //         state.loading = false
    //         state.error = action.payload
    //     })
    // },
})

export const { 
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
    getClasses,
    getRaces,
} = characterSlice.actions

export default characterSlice.reducer