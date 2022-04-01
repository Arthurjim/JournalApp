import { collection, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
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
        dispatch(addNewNote(doc.id, newNote))
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

export const addNewNote = (id,note) => {
    return {
        type:types.notesAddNew,
        payload:{
            id,
            ...note
        }
    }
}

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
        Swal.fire({
            title: "Uploading...",
            text: "Please wait",
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen : () => {
                Swal.showLoading();
            }
        })
        const fileUrl = await fileUpload(file);
        activeNote.url =fileUrl
        dispatch(startSaveNote(activeNote));
        Swal.close();
    }
}

export const startDelete =(id)=>{
    return(dispatch,getState)=>{
        const {uid} = getState().auth;
        const {url} = getState().notes.active;

        const noteRef = doc(db,`${uid}/journal/notes/${id}`);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.value) {
                await deleteDoc(noteRef);
                if(url){
                }
                dispatch(deleteNote(id));

                Swal.fire("Deleted!", "Your note has been deleted.", "success");
            }
        });
    }
}
const deleteNote =(id)=>{
    return{
        type:types.notesDelete,
        payload:id
    }
}


export const clearNotes =()=>{
    return{
        type:types.notesLogout
    }
}