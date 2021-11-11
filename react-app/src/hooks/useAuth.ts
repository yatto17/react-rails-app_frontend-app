import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

import { signInParams } from "types/api/signInParams";

import { useMessage } from "./useMessage";
import { signUpParams } from "types/api/signUpParams";
import { useAuthUser } from "./useAuthUser";
import { signIn, signUp } from "lib/api/auth";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const { setIsSignedIn, setCurrentUser } = useAuthUser();

  const [loading, setLoading] = useState(false);

  const submitForSignIn = useCallback(
    (email: string, password: string) => {

      const handleSubmit = async () => {
        setLoading(true);

        const params: signInParams = {
          email: email,
          password: password,
        };

        try {
          const res = await signIn(params);
          console.log(res);

          if (res.status === 200) {
            Cookies.set("_access_token", res.headers["access-token"])
            Cookies.set("_client", res.headers["client"])
            Cookies.set("_uid", res.headers["uid"])

            setIsSignedIn(true);
            setCurrentUser(res.data.data);

            history.push("/home");
            
            console.log("Signed in successfully!")
          } else {
            showMessage({ title: "Invalid Email or Password", status: "error" })
            setLoading(false);
          }
        } catch (err) {
          console.log(err);
          showMessage({ title: "Invalid Email or Password", status: "error" })
          setLoading(false);
        }
      }

      handleSubmit();
      
    }, [history, setLoading, setIsSignedIn, setCurrentUser, showMessage]
  );

  const submitForSignUp = useCallback(
    (nickname: string, email: string, password: string, passwordConfirmation: string) => {

      const handleSubmit = async () => {
        setLoading(true);

        const params: signUpParams = {
          nickname: nickname,
          email: email,
          password: password,
          passwordConfirmation: passwordConfirmation
        };

        try {
          const res = await signUp(params);
          console.log(res);

          if (res.status === 200) {
            Cookies.set("_access_token", res.headers["access-token"])
            Cookies.set("_client", res.headers["client"])
            Cookies.set("_uid", res.headers["uid"])

            setIsSignedIn(true);
            setCurrentUser(res.data.data);

            history.push("/home");

            console.log("Signed in successfully!")
          } else {
            showMessage({ title: "Invalid Email or Password", status: "error" })
            setLoading(false);
          }
        } catch (err) {
          console.log(err);
          showMessage({ title: "Invalid Email or Password", status: "error" })
          setLoading(false);
        }
      }

      handleSubmit();

    }, 
    [history, setLoading, setIsSignedIn, setCurrentUser, showMessage]
  );

  return { submitForSignIn, submitForSignUp, loading };
};