import { useState } from "react";

import AuthContext from "./auth-context";
import type { IAuthContext } from "./auth-context";

const AuthProvider: React.FC = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const logUserIn = () => {
    setLoggedIn(true);
  };

  const logUserOut = () => {
    setLoggedIn(false);
  };

  const authContext: IAuthContext = {
    loggedIn: loggedIn,
    logUserIn: logUserIn,
    logUserOut: logUserOut,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
