import { doc, setDoc } from "firebase/firestore";
import { types } from "../components/types/types";
import { db } from "../firebase/firebase-config";
export const startNewNote = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        const newNote = {
            title: "",
            body: "",
            date: new Date().getTime(),
        };
        const docRef = await setDoc(doc(db, `users/${uid}/journal/notes`), newNote);
        console.log(docRef)
    };
};
