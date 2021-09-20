import { useState } from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import AuthContext from "./auth-context";
import type { IModalContext } from "./auth-context";

const ModalProvider: React.FC = ({ children }) => {
  const [type, setType] = useState<"sign-in" | "sign-up" | null>(null);

  const openModal = (type: "sign-in" | "sign-up") => {
    setType(type);
  };

  const closeModal = () => {
    setType(null);
  };

  // const switchToSignIn = () => {
  //   setIsAuthSignup(false);
  // };

  // const switchToSignUp = () => {
  //   setIsAuthSignup(true);
  // };

  // const signUp = (email: string, password: string) => {
  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       alert('SUCCESFULLY SIGNED UP!')
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });
  // };

  // const signIn = (email: string, password: string) => {};

  const authContext: IModalContext = {
    openModal: openModal,
    closeModal: closeModal,
    modalType: type,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default ModalProvider;
