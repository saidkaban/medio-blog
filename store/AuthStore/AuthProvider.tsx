import { useState } from "react";

import AuthContext from "./auth-context";
import type { IAuthContext } from "./auth-context";

const AuthProvider: React.FC = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState<{
    uid: string;
    name: string;
  }>({ uid: "", name: "" });

  const logUserIn = (userId: string, name: string) => {
    setLoggedInUser({ uid: userId, name: name });
  };

  const logUserOut = () => {
    setLoggedInUser({ uid: "", name: "" });
  };

  const authContext: IAuthContext = {
    loggedInUser: loggedInUser,
    logUserIn: logUserIn,
    logUserOut: logUserOut,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
