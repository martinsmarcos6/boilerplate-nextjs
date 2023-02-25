import {
  ReactNode,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

interface User {
  id: string;
  roles: string[];
  active: boolean;
}

interface AuthContextData {
  isAuthenticated: boolean;
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

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
