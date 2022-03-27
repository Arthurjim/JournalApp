import React from "react";

const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry-pircture"
                style={{
                    backgroundSize: "cover",
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
                }}
            ></div>
            <div className="journal__entry-body">
                <p className="jorunal__entry-title">Un nuevo día</p>
                <p className="jorunal__entry-content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, officiis delectus odio quibusdam ratione facere totam!
                    Consequatur ex eaque natus molestiae
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    );
};

export default JournalEntry;
