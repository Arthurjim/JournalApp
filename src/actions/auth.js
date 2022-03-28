import {  googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../components/types/types";
import { getAuth, signInWithPopup } from "firebase/auth";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        //dispatch lo obtenemos gracias a thunk
        setTimeout(() => {
            dispatch(login(email, password));
        }, 3500);
    };
};

export const startGoogleLogin = () => {
    return (dispatch) => {
        // firebase.auth().signInWithPopup(googleAuthProvider)

        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
            dispatch(login(user.uid, user.displayName));
        });
    };
};

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
        },
    };
};
