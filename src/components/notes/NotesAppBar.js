import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";
import moment from "moment";
const NotesAppBar = () => {
    const dispatch = useDispatch();
    const { active: note } = useSelector((state) => state.notes);
    const handleSaveNote = () => {
        dispatch(startSaveNote(note));
    };
    const handlePictureClick = () => {
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
            <span>{moment().format('MMMM Do YYYY')}</span>
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
