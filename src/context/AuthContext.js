import React, { useEffect, useState } from 'react';
import config from '../utils/config';
import Spinner from '../components/Spinner/Spinner';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        config.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );
};