import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";
import PublicRoute from "./PublicRoute";

const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <PublicRoute>
                        <Route
                            exact
                            path="/auth/login"
                            component={LoginScreen}
                        />

                        <Route
                            path="/auth/register"
                            component={RegisterScreen}
                        />

                        <Redirect to="/auth/register" />
                    </PublicRoute>
                </Switch>
            </div>
        </div>
    );
};

export default AuthRouter;
