import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";
const JournalEntry = ({ id, title, body, date, url }) => {
    const notesDate = moment(date);
    const dispatch = useDispatch();

    const handleEntryClick = () => {
        dispatch(activeNote(id, { title, body, date, url }));
    };
    return (
        <div className="journal__entry pointer" onClick={handleEntryClick}>
            {url && (
                <div
                    className="journal__entry-pircture"
                    style={{
                        backgroundSize: "cover",
                        backgroundImage: `url(${url})`,
                    }}
                ></div>
            )}
            <div className="journal__entry-body">
                <p className="jorunal__entry-title">{title}</p>
                <p className="jorunal__entry-content">{body}</p>
            </div>
            <div className="journal__entry-date-box">
                <span>{notesDate.format("dddd")}</span>
                <h4>{notesDate.format("Do")}</h4>
            </div>
        </div>
    );
};

export default JournalEntry;
