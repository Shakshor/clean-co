import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const user = false;

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} ></Navigate>
    }
    return children;
};

export default PrivateRoute;