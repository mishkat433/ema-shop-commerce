import React, { createContext, useState } from 'react';

export const AuthContex = createContext();

const Contex = ({ children }) => {
    const [user, setUser] = useState({});
    const authInfo = { user, setUser, };
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default Contex;