/* eslint-disable react-hooks/exhaustive-deps */
import { FC, memo, useCallback, useEffect } from "react";
import { Wrap, WrapItem, Spinner, Center } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { PostCard } from "components/organisms/index/PostCard";
import { useAllPosts } from "hooks/useAllPosts";
import { useAuthUser } from "hooks/useAuthUser";

export const Home: FC = memo(() => {
  const history = useHistory();
  const {getPosts, loading, posts} = useAllPosts();
  const { currentUser } = useAuthUser();

  useEffect(() => getPosts(), []);

  const onClickDetailPost = useCallback(() => history.push("/home/detail_view"), []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 12 }} justify="space-around">
          {posts.map((post) => (
            <WrapItem key={post.title}>
              <PostCard
                imageUrl={post.imageUrl}
                title={post.title}
                date={post.content}
                onClickDetailPost={onClickDetailPost}
              />
              {console.log(currentUser)}
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});