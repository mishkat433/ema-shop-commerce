import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../Firebase/Firebase.init';

export const AuthContex = createContext();
const auth = getAuth(app);

const Contex = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const logOut = () => {
        signOut(auth)
    }

    useState(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

    const authInfo = { user, setUser, loading, setLoading, logOut };
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default Contex;