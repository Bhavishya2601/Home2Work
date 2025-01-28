import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import axios from 'axios';

const UserContext = createContext(undefined);

const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [reTrigger, setReTrigger] = useState(0);

    useEffect(() => {
        const fetchUserStatus = async () => {
            setIsLoading(true);
            try {
                const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/checkstatus`, null, {   
                    withCredentials: true,
                });
                if (response.data && response.data.user) {
                    setUserData(response.data.user);
                    setIsLoggedIn(true);
                } else {
                    setUserData(null);
                    setIsLoggedIn(false);
                }
            } catch (err) {
                console.log('No user found')
                setUserData(null);
                setIsLoggedIn(false);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserStatus();
    }, [reTrigger]);

    return (
        <UserContext.Provider value={{ userData, isLoggedIn, isLoading, setReTrigger }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export default UserProvider;