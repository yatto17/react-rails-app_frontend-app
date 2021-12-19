import { useCallback, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

import { Post } from "types/api/post";
import { useMessage } from "./useMessage";
import { createPost } from "lib/api/postApi";

export const useAllPosts = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Array<Post>>([]);
  const history = useHistory();

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

  const newPost = useCallback((params: Post) => {

    const handleSubmit = async () => {
      setLoading(true);

      try {
        const res = await createPost(params);
        console.log(res);
        history.push("/");
      } catch (err) {
        console.log(err);
        showMessage({ title: "Invalid Post Data", status: "error" });
        setLoading(false);
      }
    }

    handleSubmit();

  }, [history, showMessage]);

  return { getPosts, newPost, loading, posts }
}