import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useDispatch } from "react-redux";
import JournalScreen from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";
import { login } from "../actions/auth";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { Redirect } from "react-router-dom";
import { startSLoadingNotes } from "../actions/notes";
const AppRouter = () => {
    const dispatch = useDispatch();
    const [cheking, setCheking] = useState(true);
    const [isLoggeIn, setIsLoggeIn] = useState(false);
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggeIn(true);
                dispatch(startSLoadingNotes(user.uid));
            } else {
                setIsLoggeIn(false);
            }
            setCheking(false);
        });
    }, [dispatch, setCheking, setIsLoggeIn]);
    if (cheking) {
        return <div>Wait...</div>;
    }
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        isLoggeIn={isLoggeIn}
                        path="/auth"
                        component={AuthRouter}
                    />
                    <PrivateRoute
                        exact
                        isLoggeIn={isLoggeIn}
                        path="/"
                        component={JournalScreen}
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
