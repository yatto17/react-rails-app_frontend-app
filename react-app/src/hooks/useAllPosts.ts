import { useCallback, useState } from "react";
import axios from "axios";

import { Post } from "types/api/post";
import { useMessage } from "./useMessage";

export const useAllPosts = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Array<Post>>([]);

  const { showMessage } = useMessage();

  const getPosts = useCallback(() => {
    setLoading(true);

    axios
      .get<Array<Post>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setPosts(res.data))
      .catch(() => {
        showMessage({ title: "データの取得に失敗しました", status: "error" });
      })
      .finally(() => setLoading(false));
  }, [showMessage]);

  return { getPosts, loading, posts }
}