import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';

import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';

import { pdaJobsApi } from '../config/api';
import { ILoginPayload } from '../services/contracts/user';
import { UserService } from '../services/user-services';

export enum UserProfileEnum {
  COMPANY = 2,
  STUDENT = 1,
}

interface User {
  username: string;
  profile: UserProfileEnum;
  id: string;
}

interface AuthContextData {
  isAuthenticated: boolean;
  signIn: (credentials: ILoginPayload) => Promise<void>;
  signOut: () => void;
  user?: User;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

interface AuthContextProvider {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthContextProvider) => {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;
  const router = useRouter();

  useEffect(() => {
    const { 'pdajobs.token': token } = parseCookies();

    if (token) {
      new UserService()
        .validateToken(token)
        .then((response) => {
          const { accessToken } = response.data;
          const { profile, id, username } = jwtDecode<User>(accessToken);
          setUser({ id, profile, username });
        })
        .catch(() => {
          destroyCookie(undefined, 'pdajobs.token');
          router.push('/login');
        });
    }
  }, [router]);

  const signOut = () => {
    destroyCookie(undefined, 'pdajobs.token');
    setUser(undefined);
    router.push('/login');
  };

  const signIn = async (credentials: ILoginPayload): Promise<void> => {
    const response = await new UserService().login(credentials);
    const { accessToken } = response.data;
    const { profile, id } = jwtDecode<User>(accessToken);

    setCookie(undefined, 'pdajobs.token', accessToken, {
      maxAge: 60 * 60 * 24 * 30, // 30 days,
      path: '/',
    });

    setUser({
      id,
      username: credentials.username,
      profile,
    });

    pdaJobsApi.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    router.push(
      `/${profile === UserProfileEnum.COMPANY ? 'company' : 'student'}/home`
    );
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, signIn, user, signOut, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
