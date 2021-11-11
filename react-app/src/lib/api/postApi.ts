import { Post } from "types/api/post";
import { client } from "./client"

// 一覧
export const getList = () => {
  return client.get("/api/v1/posts");
};

// 詳細
export const getPostDetail = (id: number) => {
  return client.get(`/api/v1/posts/${id}`);
};

// 新規作成
export const createPost = (params: Post) => {
  return client.post("/api/v1/posts", params);
};

// 更新
export const updatePost = (id: number, params: Post) => {
  return client.patch(`/api/v1/posts/${id}`, params);
};

// 削除
export const deletePost = (id: number) => {
  return client.delete(`/api/v1/posts/${id}`);
};