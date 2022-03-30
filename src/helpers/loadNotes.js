import { db } from "../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";

export const loadNotes = async (uid) => {
    const notesSpan = await getDocs(collection(db, `${uid}/journal/notes`));
    const notes = [];
    notesSpan.forEach((doc) => {
        notes.push({
            id: doc.id,
            ...doc.data(),
        });
    });
    return notes;
};
