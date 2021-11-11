import { useCallback, useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router";

import { Post } from "types/api/post";
import { useMessage } from "./useMessage";
// import { createPost } from "lib/api/postApi";

export const useAllPosts = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Array<Post>>([]);
  // const [value, setValue] = useState({});
  // const history = useHistory();

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

  // const newPost = useCallback(() => {
    
  //   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     setValue({
  //       ...value,
  //       [e.target.name]: e.target.value
  //     })
  //   }

  //   const handleSubmit = async (e: ChangeEvent<HTMLInputElement>) => {
  //     e.preventDefault();
  //     try {
  //       const res = await createPost(value)
  //       console.log(res)
  //       history.push("/")
  //     } catch (err) {
  //       console.log(err);
  //       showMessage({ title: "Invalid Post Data", status: "error" });
  //     }
  //   }

  // }, [history, showMessage, value]);

  return { getPosts, loading, posts }
}