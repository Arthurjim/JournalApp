import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote } from "../../actions/notes";
import useForm from "../../hooks/useForm";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
    const { active: note } = useSelector((state) => state.notes);
    const dispatch = useDispatch();
    const [formValue, hanldeInputChange, reset] = useForm(note);
    const { title, body } = formValue;

    const activeId = useRef(note.id);
    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset]);

    useEffect(() => {
        dispatch(activeNote(note.id, formValue));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formValue]);
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    onChange={hanldeInputChange}
                    value={title}
                />
                <textarea
                    placeholder="What happend today"
                    className="note__textarea"
                    name="body"
                    onChange={hanldeInputChange}
                    value={body}
                ></textarea>
                {note.url && (
                    <div className="note__image">
                        <img
                            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                            alt="images"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default NoteScreen;
