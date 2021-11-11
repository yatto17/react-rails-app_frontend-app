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
            <WrapItem key={post.id}>
              <PostCard
                imageUrl="https://source.unsplash.com/random" // 本当はpost.imagesかな？
                title={post.name} // 本当はpost.title
                date={post.phone} // 本当はpost.date
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