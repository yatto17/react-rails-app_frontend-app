import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

import { User } from "types/api/user";

export type AuthUserContextType = {
  isSignedIn: boolean;
  setIsSignedIn: Dispatch<SetStateAction<boolean>>;
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
}

export const AuthUserContext = createContext<AuthUserContextType>(
  {} as AuthUserContextType
);

export const AuthUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <AuthUserContext.Provider
      value={{
        isSignedIn,
        setIsSignedIn,
        currentUser,
        setCurrentUser
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
}