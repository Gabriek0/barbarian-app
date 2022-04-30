import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { api } from '../api/api';

interface AuthContextProps {
    handleLogin: (email: string, password: string) => void,
    handleRegistration: (name: string, email: string, password: string) => void,
    isLogged: boolean
}

interface AuthContextProviderProps {
    children: ReactNode
}


const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [isLogged, setIsLogged] = useState(false);

    async function handleLogin(email: string, password: string) {
        console.log({ email, password })

        const request = await api.post('/login', { email, password })

        const token = request.data.token;

        if (token) {
            setIsLogged(true);
            // Guarda o token JWT nessa requisição
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }

    }

    async function handleRegistration(name: string, email: string, password: string) {
        const request = await api.post('/signup', { name, email, password })

        const token = request.data.token;

        if (token) {
            setIsLogged(true);
            // Guarda o token JWT nessa requisição
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    }

    return (
        <AuthContext.Provider value={{ handleRegistration, handleLogin, isLogged }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(AuthContext);
}