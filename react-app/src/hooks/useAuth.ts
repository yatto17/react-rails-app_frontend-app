import { useCallback, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// import { signInParams } from "types/api/signInParams";

import { User } from "types/api/user";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);

  const signIn = useCallback(
    (email: string, password: string) => {
      setLoading(true);

      axios
        .get<User>("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          console.log(res.data);
          if (res.data.email === email && res.data.name === password) {
            showMessage({ title: "ログインしました", status: "success" });
            history.push("/home");
          } else {
            showMessage({ title: "ユーザーが見つかりません", status: "error" });
          }
        })
        .catch(() => {
          showMessage({ title: "ログインできません", status: "error" });
        })
        .finally(() => {
          setLoading(false);
        }
      );
    }, [history, showMessage]
  );

  return { signIn, loading };
};