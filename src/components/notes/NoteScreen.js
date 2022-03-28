import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea
                    placeholder="What happend today"
                    className="note__textarea"
                ></textarea>
                <div className="note__image">
                    <img
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                        alt="images"
                    />
                </div>
            </div>
        </div>
    );
};

export default NoteScreen;
