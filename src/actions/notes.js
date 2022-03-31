import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";
import { types } from "../components/types/types";
import { db } from "../firebase/firebase-config";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
export const startNewNote = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        const newNote = {
            title: "",
            body: "",
            date: new Date().getTime(),
        };
        const doc = await addDoc(
            collection(db, `${uid}/journal/notes`),
            newNote
        );
        dispatch(activeNote(doc.id, newNote));
    };
};

export const activeNote = (id, note) => {
    return {
        type: types.notesActive,
        payload: {
            id,
            ...note,
        },
    };
};

export const setNotes = (notes) => {
    return {
        type: types.notesLoad,
        payload: notes,
    };
};
export const startSLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    };
};

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if (!note.url) {
            delete note.url;
        }
        const noteToFirestore = { ...note };
        delete noteToFirestore.id;
        const noteRef = doc(db, `${uid}/journal/notes/${note.id}`);
        await updateDoc(noteRef, noteToFirestore);
        dispatch(refreshNote(note.id, noteToFirestore));
        Swal.fire("Saved!", "Your note has been saved", "success");
    };
};

export const refreshNote = (id, note) => {
    return {
        type: types.notesUpdated,
        payload: {
            id,
            note: {
                id,
                ...note,
            },
        },
    };
};

export const startUploading = (file) => {
    return async (dispatch,getState)=>{
        const {active:activeNote} = getState().notes;
        const fileUrl = await fileUpload(file)
        console.log(fileUrl)

    }
}