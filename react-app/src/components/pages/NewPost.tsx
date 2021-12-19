import { ChangeEvent, FC, memo, useState } from "react";
import { Box, Flex, Stack } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { PrimaryButton } from "components/atoms/button/PrimaryButton";
import { Textarea } from "@chakra-ui/textarea";
import { Image } from "@chakra-ui/image";
import { FormControl, FormLabel } from "@chakra-ui/form-control";

import { Post } from "types/api/post";
import { useAllPosts } from "hooks/useAllPosts";
// import { useAuthUser } from "hooks/useAuthUser";

export const NewPost: FC = memo(() => {
  const [postTitle, setPostTitle] = useState<string>("");
  const [postImage, setPostImage] = useState<any>("");
  const [postContent, setPostContent] = useState<string>("");

  // const { currentUser } = useAuthUser();
  const { newPost, loading } = useAllPosts();

  const params: Post = {
    title: postTitle,
    imageUrl: postImage,
    content: postContent,
    // userId: currentUser.id
  }

  const onChangePostTitle = (e: ChangeEvent<HTMLInputElement>) => setPostTitle(e.target.value);
  const onChangePostImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        console.log(e.target.result)
        setPostImage(e.target.result);
      }
      reader.readAsDataURL(file);
    }
  }
  const onChangePostContent = (e: ChangeEvent<HTMLTextAreaElement>) => setPostContent(e.target.value);

  const onClickNewPost = () => newPost(params);

  return (
    <Flex p={6} align="center" justify="space-around">
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input borderRadius="10px" placeholder="タイトル" value={postTitle} onChange={onChangePostTitle}/>
          <FormLabel>Image</FormLabel>
          <Box>
            <Input type="file" src={postImage} onChange={onChangePostImage} border="none" />
            <Flex>
              <Image src={postImage} m="md" h="md" />
            </Flex>
          </Box>
          <FormLabel>episode</FormLabel>
          <Textarea placeholder="思い出エピソード" value={postContent} onChange={onChangePostContent} />
        </FormControl>
        <PrimaryButton
          onClick={onClickNewPost}
          loading={loading}
          disabled={postTitle === "" || postContent === ""}
        >
          投稿
        </PrimaryButton>
      </Stack>
    </Flex>
  );
});