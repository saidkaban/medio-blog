import React from 'react';

export interface AuthContextInterface {
  authModalOpen: boolean;
  isAuthSignUp: boolean;
  openModal: () => void;
  closeModal: () => void;
  switchToSignIn: () => void;
  switchToSignUp: () => void;
  signUp: () => void;
  signIn: () => void;
  isAuthenticated: boolean;
}

const AuthContext = React.createContext<AuthContextInterface | null>({
  authModalOpen: false,
  isAuthSignUp: true,
  openModal: () => {},
  closeModal: () => {},
  switchToSignUp: () => {},
  switchToSignIn: () => {},
  signUp: () => {},
  signIn: () => {},
  isAuthenticated: true,
});

export default AuthContext;
