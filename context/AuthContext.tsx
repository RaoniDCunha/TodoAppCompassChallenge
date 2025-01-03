import React, { createContext, useState, useContext, ReactNode } from 'react';


interface User {
    id: number;
    username: string;

}


interface AuthContextProps {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
    isLoggedIn: boolean;
}


const AuthContext = createContext<AuthContextProps>({
    user: null,
    login: () => {},
    logout: () => {},
    isLoggedIn: false,
});


interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const isLoggedIn = !!user;

    const login = (userData: User) => {
        setUser(userData);

    };

    const logout = () => {
        setUser(null);

    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    return useContext(AuthContext);
};
