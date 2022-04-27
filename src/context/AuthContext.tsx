import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { api } from '../api/api';

interface AuthContextProps {
    handleLogin: (email: string, password: string) => void,
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

    return (
        <AuthContext.Provider value={{ handleLogin, isLogged }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(AuthContext);
}