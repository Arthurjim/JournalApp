import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
const PublicRoute = ({ children }) => {
    const { uid } = useSelector((state) => state.auth);

    return !uid?  (
        <>
          {children}
        </>
    ) :<Redirect to="/" />
  
};

export default PublicRoute;
