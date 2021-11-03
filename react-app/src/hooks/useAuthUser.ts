import { useContext } from "react";
import { AuthUserContext, AuthUserContextType } from "providers/AuthUserProvider";

export const useAuthUser = (): AuthUserContextType =>
  useContext(AuthUserContext);