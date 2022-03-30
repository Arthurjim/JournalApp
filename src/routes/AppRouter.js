import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useDispatch } from "react-redux";
import JournalScreen from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";
import { login } from "../actions/auth";
const AppRouter = () => {
    const dispatch = useDispatch();
    const [cheking, setCheking] = useState(true);
    const [isLoggeIn, setIsLoggeIn] = useState(false);
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, ({ displayName, uid }) => {
            if (displayName) {
                dispatch(login(uid, displayName));
                setIsLoggeIn(true);
            } else {
                setIsLoggeIn(false);
            }
            setCheking(false);
        });
    }, [setCheking, setIsLoggeIn]);
    if (!cheking) {
        return <div>Loading...</div>;
    }
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRouter} />
                    <Route exact path="/" component={JournalScreen} />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
