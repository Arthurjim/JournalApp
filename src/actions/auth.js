import { googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../components/types/types";
import {
    getAuth,
    signInWithPopup,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { finishLoading, startLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        //dispatch lo obtenemos gracias a thunk
        dispatch(startLoading());
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            })
            .catch((error) => {
                dispatch(finishLoading());

                console.log(error);
            });

        // dispatch(login(email, password));
    };
};
export const startRegisterManual = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(user, { displayName: name });
                dispatch(login(user.uid, user.displayName));
            })
            .catch((error) => {
                console.log(error);
            });
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
export const startLogout = () => {
    return (dispatch) => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                dispatch(logout());
            })
            .catch((e) => console.log(e));
    };
};
export const logout = () => ({
    type: types.logout,
});
