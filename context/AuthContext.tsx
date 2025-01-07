
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextProps {
    isLoggedIn: boolean;
    user: { id: number, username: string } | null;
    login: (userData: { id: number, username: string }) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
    isLoggedIn: false,
    user: null,
    login: () => { },
    logout: () => { },
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<{ id: number, username: string } | null>(null);

    const login = (userData: { id: number, username: string }) => {
        setIsLoggedIn(true);
        setUser(userData);

    };

    const logout = () => {
       setIsLoggedIn(false);
       setUser(null);

     };


    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

