import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    error: null,
    user: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.loading = false;
            state.error = null;
        },    
        setUser: (state, action) => {
            state.user = action.payload; // Actualiza el estado con la información del usuario recibida
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout, setUser } = authSlice.actions;
export default authSlice.reducer;