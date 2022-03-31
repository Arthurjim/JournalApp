import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";

const NotesAppBar = () => {
    const dispatch = useDispatch();
    const { active: note } = useSelector((state) => state.notes);
    const handleSaveNote = () => {
        dispatch(startSaveNote(note));
    };
    const handlePictureClick = () => {
        console.log("picture");
        document.getElementById("fileInput").click();
    };
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if(file){
        dispatch(startUploading(file))
      }
    };
    return (
        <div className="notes__appbar">
            <span>20 de agosto de 2020</span>
            <input
                id="fileInput"
                type="file"
                name="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
            <div>
                <button className="btn" onClick={handlePictureClick}>
                    {" "}
                    Picture
                </button>
                <button className="btn" onClick={handleSaveNote}>
                    {" "}
                    Save
                </button>
            </div>
        </div>
    );
};

export default NotesAppBar;
