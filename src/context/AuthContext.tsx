import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigation } from '@react-navigation/native';

import { api } from '../api/api';

interface User {
  id: number;
  name: string;
  email: string;
  whatsapp: string;
}

interface AuthContextProps {
  handleLogin: (email: string, password: string, isBarber: boolean) => void;
  handleRegistration: (name: string, email: string, password: string) => void;
  isLogged: boolean;
  isLoading: boolean;
  errorMessage: string;
  loggedUser: User;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedUser, setLoggedUser] = useState<User>({} as User);

  const navigation = useNavigation();

  useEffect(() => {
    if (isLogged) {
      navigation.navigate('homepage');
    }
  }, [isLogged]);

  async function handleLogin(
    email: string,
    password: string,
    isBarber: boolean
  ) {
    setErrorMessage('');

    if (isBarber && email !== 'neto.daniribeiro@gmail.com') {
      setErrorMessage('opsss... você não é barbeiro');
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    try {
      const request = await api.post('/login', { email, password });

      const token = request.data.token;

      if (token) {
        setLoggedUser(request.data.user);
        setIsLogged(true);
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setIsLoading(false);

        if (isBarber) {
          navigation.navigate('barberhomepage');
        } else {
          navigation.navigate('homepage');
        }
      }

      setIsLoading(false);
      return null;
    } catch (error) {
      console.log(error);

      setErrorMessage('eita, algo de errado aconteceu :(');
    }
  }

  async function handleRegistration(
    name: string,
    email: string,
    password: string
  ) {
    setIsLoading(true);

    const request = await api.post('/signup', { name, email, password });

    const token = request.data.token;

    if (token) {
      setIsLogged(true);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    setIsLoading(false);
  }

  return (
    <AuthContext.Provider
      value={{
        handleRegistration,
        handleLogin,
        isLogged,
        isLoading,
        errorMessage,
        loggedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
