import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define o tipo para o usuário autenticado (pode ser customizado)
interface User {
    id: number;
    username: string;
    // ... outros dados do usuário
}

// Define a estrutura do contexto
interface AuthContextProps {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
    isLoggedIn: boolean;
}

// Cria o contexto com um valor padrão
const AuthContext = createContext<AuthContextProps>({
    user: null,
    login: () => {},
    logout: () => {},
    isLoggedIn: false,
});

// Componente provedor do contexto
interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const isLoggedIn = !!user; // Verifica se há um usuário logado

    const login = (userData: User) => {
        setUser(userData);
        // Aqui você pode adicionar lógica adicional, como salvar o token JWT
        // localStorage.setItem('token', 'seu_token');
    };

    const logout = () => {
        setUser(null);
        // Limpar o token ou qualquer dado persistente
        // localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};


// Hook para usar o contexto
export const useAuth = () => {
    return useContext(AuthContext);
};
