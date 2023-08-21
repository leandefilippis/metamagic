import { configureStore } from "@reduxjs/toolkit"
import characterReducer from "../slices/characterSlice"
import authReducer from "../slices/authSlice"

export default configureStore({
    reducer: {
        character : characterReducer,
        auth: authReducer,
    }
})