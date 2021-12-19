import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
// import Cookies from "js-cookie";

import { signInParams } from "types/api/signInParams";

import { useMessage } from "./useMessage";
import { signUpParams } from "types/api/signUpParams";
import { useAuthUser } from "./useAuthUser";
import { signIn, signOut, signUp } from "lib/api/auth";
import { useCookies } from "react-cookie";

export const useAuth = () => {
  const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies();

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
            setCookie("_access_token", res.headers["access-token"])
            setCookie("_client", res.headers["client"])
            setCookie("_uid", res.headers["uid"])

            // Cookies.set("_access_token", res.headers["access-token"])
            // Cookies.set("_client", res.headers["client"])
            // Cookies.set("_uid", res.headers["uid"])

            console.log(cookies);

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
      
    }, [history, cookies, setCookie, setLoading, setIsSignedIn, setCurrentUser, showMessage]
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
            setCookie("_access_token", res.headers["access-token"])
            setCookie("_client", res.headers["client"])
            setCookie("_uid", res.headers["uid"])

            // Cookies.set("_access_token", res.headers["access-token"])
            // Cookies.set("_client", res.headers["client"])
            // Cookies.set("_uid", res.headers["uid"])

            console.log(cookies);

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
    [history, cookies, setCookie, setLoading, setIsSignedIn, setCurrentUser, showMessage]
  );

  const handleSignOut = async ()  => {
    setLoading(true);

    const accessToken: string = cookies._access_token
    const clientData: string = cookies._client
    const uid: string = cookies._uid
    
    try {
      const res = await signOut(accessToken, clientData, uid);

      if (res.data.success === true) {
        // サインアウト時には各Cookieを削除
        removeCookie("_access_token")
        removeCookie("_client")
        removeCookie("_uid")

        // Cookies.remove("_access_token")
        // Cookies.remove("_client")
        // Cookies.remove("_uid")

        console.log(cookies);

        setIsSignedIn(false)
        setCurrentUser(null);
        history.push("/")

        console.log("Succeeded in sign out");
      } else {
        showMessage({ title: "Failed in sign out", status: "error" })
        console.log("Failed in sign out")
      }
    } catch (err) {
      console.log(err)
      showMessage({ title: "エラーが発生しました", status: "error" })
    }
  };

  return { submitForSignIn, submitForSignUp, handleSignOut, loading };
};