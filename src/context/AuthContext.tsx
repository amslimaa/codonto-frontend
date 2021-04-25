import { createContext, useState, useContext } from 'react';

interface userType {
  id: number,
  name: string,
  phone: string,
  birth: string,
  gen: string
}

interface AuthType {
  user: userType,
  login: (user: userType) => void,
  logout: () => void,
}

const defaultUserObj = {
  id: 0,
  name: '',
  phone: '',
  birth: '',
  gen: ''
};

const data = typeof window !== "undefined" ? localStorage.getItem('data'): null;
const defaultUser = data ? JSON.parse(data) : defaultUserObj;

const AuthDefault: AuthType = {
  user: defaultUser,
  login: () => { },
  logout: () => { },
}

const AuthContext = createContext<AuthType>(AuthDefault);

export function useAuth() {
  return useContext(AuthContext);
}
const setLocalStorage = (user: userType) => {
  localStorage.setItem('data', JSON.stringify(user));
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState<userType>(defaultUser);

  const login = (user: userType) => {
    setLocalStorage(user)
    setUser(user);
  };
  const logout = () => {
    setLocalStorage(user)
    setUser(defaultUser);
  };
  
  const value = {
    user,
    login,
    logout
  };

  return (
    <>
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    </>
  );

}
