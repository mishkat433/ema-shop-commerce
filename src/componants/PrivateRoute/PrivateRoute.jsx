import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContex } from '../../Contex/Contex';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContex);
    if (loading) {
        return <div>Loading...</div>
    }

    if (user && user.uid) {
        return children
    }
    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PrivateRoute;