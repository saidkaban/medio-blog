import React from "react";

export interface IAuthContext {
  loggedIn: boolean;
  logUserIn: () => void;
  logUserOut: () => void;
}

const AuthContext = React.createContext<IAuthContext | null>({
  loggedIn: false,
  logUserIn: () => {},
  logUserOut: () => {},
});

export default AuthContext;
