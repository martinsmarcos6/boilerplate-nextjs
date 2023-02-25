import {
  ReactNode,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';

import { destroyCookie, parseCookies, setCookie } from 'nookies';

import { traadApi } from '../config/api';
import { AuthService } from '../services';
import { LoginDto } from '../services/dto/login.dto';

interface User {
  id: string;
  roles: string[];
  active: boolean;
}

interface AuthContextData {
  isAuthenticated: boolean;
  user?: User;
  signIn: (loginDto: LoginDto) => Promise<string>;
  setUser: Dispatch<SetStateAction<User | undefined>>;
  signOut: () => void;
}

interface AuthContextProvider {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthContextProvider) => {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;
  const authService = new AuthService();

  const loadUser = async () => {
    const response = await authService.loadUser();
    const userData = response.data;
    setUser(userData);
  };
  const saveToken = (token: string) => {
    setCookie(undefined, 'traad.token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
      path: '/',
    });
  };

  const signIn = async (loginDto: LoginDto): Promise<string> => {
    const response = await authService.login(loginDto);
    saveToken(response.data);
    traadApi.defaults.headers.common.Authorization = `Bearer ${response.data}`;
    await loadUser();
    return response.data;
  };

  const signOut = () => {
    setUser(undefined);
    destroyCookie(undefined, 'traad.token', {
      path: '/',
    });
  };

  useEffect(() => {
    const { 'traad.token': token } = parseCookies();
    if (token) {
      authService
        .loadUser()
        .then((response) => {
          const userData = response.data;
          setUser(userData);
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, setUser, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
