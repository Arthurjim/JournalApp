import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote, startDelete } from "../../actions/notes";
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
    const handleDelete = () => {
        dispatch(startDelete(note.id));
    };
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <div className="note__title">
                    <input
                        type="text"
                        placeholder="Some awesome title"
                        className="notes__title-input"
                        autoComplete="off"
                        name="title"
                        onChange={hanldeInputChange}
                        value={title}
                    />
                    <button className="btn btn-danger" onClick={handleDelete}>
                        DELETE
                    </button>
                </div>
                <textarea
                    placeholder="What happend today"
                    className="note__textarea"
                    name="body"
                    onChange={hanldeInputChange}
                    value={body}
                ></textarea>
                {note.url && (
                    <div className="note__image">
                        <img src={note.url} alt="images" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default NoteScreen;
