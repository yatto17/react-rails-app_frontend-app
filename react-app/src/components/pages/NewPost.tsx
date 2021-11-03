import { ChangeEvent, FC, memo, useState } from "react";
import { Flex, Stack } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { PrimaryButton } from "components/atoms/button/PrimaryButton";
import { Textarea } from "@chakra-ui/textarea";
import { Image } from "@chakra-ui/image";

export const NewPost: FC = memo(() => {
  const [postTitle, setPostTitle] = useState<string>("");
  // const [postImage, setPostImage] = useState<string>("");
  const [postContent, setPostContent] = useState<string>("");

  const onChangePostTitle = (e: ChangeEvent<HTMLInputElement>) => setPostTitle(e.target.value);;
  // const onChangePostImage = (e: ChangeEvent<HTMLInputElement>) => setPostImage(e.target.value);;
  const onChangePostContent = (e: ChangeEvent<HTMLTextAreaElement>) => setPostContent(e.target.value);;

  const onClickNewPost = () => {};

  return (
    <Flex p={6} align="center" justify="space-around">
      <Stack spacing={4}>
        <Input borderRadius="10px" placeholder="タイトル" value={postTitle} onChange={onChangePostTitle}/>
        <Image boxSize="2xl" borderRadius="15px" placeholder="思い出の写真" />
        <Textarea placeholder="思い出エピソード" value={postContent} onChange={onChangePostContent} />
        <PrimaryButton
          onClick={onClickNewPost}
          disabled={postTitle === "" || postContent === ""}
        >
          投稿
        </PrimaryButton>
      </Stack>
    </Flex>
  );
});