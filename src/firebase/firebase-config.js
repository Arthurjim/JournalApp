import {initializeApp} from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId:process.env.REACT_APP_PROJECT_ID,
    storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
};
// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider,

}