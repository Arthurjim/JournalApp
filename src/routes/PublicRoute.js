import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

const PublicRoute = ({ isLoggeIn, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            component={(props) =>
                !isLoggeIn ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
};

export default PublicRoute;
