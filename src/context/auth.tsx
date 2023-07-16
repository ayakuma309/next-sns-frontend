import React, { useContext } from "react";

interface AuthContextType {
  login: (token: string) => void;
  logout: () => void;
}

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = React.createContext<AuthContextType>({
  login: () => {},
  logout: () => {},
});


export const AuthProvider = ({ children }: AuthProviderProps) => {
  const login = async (token: string) => {
  };

  const logout = () => {
  };

  const value = {
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
}
