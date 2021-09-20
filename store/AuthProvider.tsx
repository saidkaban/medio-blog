import { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import AuthContext from './auth-context';
import type { AuthContextInterface } from './auth-context';

const AuthProvider: React.FC = ({ children }) => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [isAuthSignUp, setIsAuthSignup] = useState(true);

  const openModal = () => {
    setAuthModalOpen(true);
  };

  const closeModal = () => {
    setAuthModalOpen(false);
  };

  const switchToSignIn = () => {
    setIsAuthSignup(false);
  };

  const switchToSignUp = () => {
    setIsAuthSignup(true);
  };

  const signUp = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert('SUCCESFULLY SIGNED UP!')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const signIn = (email: string, password: string) => {};

  const authContext: AuthContextInterface = {
    authModalOpen: authModalOpen,
    isAuthSignUp: isAuthSignUp,
    openModal: openModal,
    closeModal: closeModal,
    switchToSignIn: switchToSignIn,
    switchToSignUp: switchToSignUp,
    signUp: () => signUp,
    signIn: () => signIn,
    isAuthenticated: true,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
