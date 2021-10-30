import { useCallback, useState } from "react";
import axios from "axios";

import { User } from "types/api/user";
import { useMessage } from "./useMessage";

export const useAllPosts = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Array<User>>([]);

  const { showMessage } = useMessage();

  const getPosts = useCallback(() => {
    setLoading(true);

    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setPosts(res.data))
      .catch(() => {
        showMessage({ title: "データの取得に失敗しました", status: "error" });
      })
      .finally(() => setLoading(false));
  }, [showMessage]);

  return { getPosts, loading, posts }
}