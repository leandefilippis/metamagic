import { loginStart, loginSuccess, loginFailure, logout } from '../slices/authSlice';
import firebase from 'firebase/app';
import 'firebase/auth';
import { db } from '../../firebase/firebaseConfig';

export const loginWithGoogle = () => async (dispatch) => {
    dispatch(loginStart());
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const userCredential = await firebase.auth().signInWithPopup(provider);

        // Verifico si el usuario ya existe en la DB
        const userRef = db.collection('users').doc(userCredential.user.uid);
        const userDoc = await userRef.get();

        if (!userDoc.exists) {
            // Si el usuario no existe en la base de datos lo registro
            await userRef.set({
                // Datos que precise del usuario
                uid: userCredential.user.uid,
                username: userCredential.user.displayName,
                email: userCredential.user.email,
                photo: userCredential.user.photoURL,
            })
        }

        localStorage.setItem('user', JSON.stringify(userCredential.user))
        dispatch(loginSuccess(userCredential.user))

    } catch (error) {
        dispatch(loginFailure(error.message))
    }
}

export const logoutUser = () => async (dispatch) => {
    try {
        await firebase.auth().signOut();
        localStorage.removeItem('user')
        dispatch(logout());
    } catch (error) {
        console.error('Error during logout:', error);
    }
}