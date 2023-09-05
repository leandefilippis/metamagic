import firebase from "firebase/app"
import 'firebase/auth';
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA9BWf2euy8Qt5ABN1CMH9onqHV-yDTt3Y",
    authDomain: "metamagic-c93aa.firebaseapp.com",
    projectId: "metamagic-c93aa",
    storageBucket: "metamagic-c93aa.appspot.com",
    messagingSenderId: "355128705346",
    appId: "1:355128705346:web:6f53c3ef95d7cc6bd388db"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const db = firebase.firestore()