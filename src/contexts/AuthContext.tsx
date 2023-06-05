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

import { AuthService } from '../services';
import { LoginType } from '../types/login.type';

interface User {
  id: string;
  roles: string[];
  active: boolean;
}

interface AuthContextData {
  isAuthenticated: boolean;
  user?: User;
  signIn: (loginType: LoginType) => Promise<string>;
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
    setCookie(undefined, 'token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
      path: '/',
    });
  };

  const signIn = async (loginType: LoginType): Promise<string> => {
    const response = await authService.login(loginType);
    saveToken(response.data);
    // api.defaults.headers.common.Authorization = `Bearer ${response.data}`;
    await loadUser();
    return response.data;
  };

  const signOut = () => {
    setUser(undefined);
    destroyCookie(undefined, 'token', {
      path: '/',
    });
  };

  useEffect(() => {
    const { token } = parseCookies();
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
