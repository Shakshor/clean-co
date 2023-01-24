import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const RequireAdmin = () => {
    const [admin] = useAdmin();

    if (!admin) {
        return <Navigate to='/' replace></Navigate>
    }

    return <Outlet />
};

export default RequireAdmin;