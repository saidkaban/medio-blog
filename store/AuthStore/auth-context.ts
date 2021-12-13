import React from "react";

export interface IAuthContext {
  loggedInUser: {
    uid: string;
    name: string;
  };
  logUserIn: (userId: string, name: string) => void;
  logUserOut: () => void;
}

const AuthContext = React.createContext<IAuthContext | null>({
  loggedInUser: { uid: "", name: "" },
  logUserIn: () => {},
  logUserOut: () => {},
});

export default AuthContext;
