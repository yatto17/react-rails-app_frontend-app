import { FC, memo } from "react";
import { Image } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";

type Props = {
  imageUrl: string;
  title: string;
  date: string;
  onClickDetailPost: () => void;
}

export const PostCard: FC<Props> = memo((props) => {
  const { imageUrl, title, date, onClickDetailPost } = props;
  return (
    <Box 
      w="260px" 
      h="260px" 
      bg="white" 
      borderRadius="10px" 
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={onClickDetailPost}
    >
      <Stack textAlign="center">
        <Image
          boxSize="160px"
          borderRadius="full"
          src={imageUrl}
          alt={title}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">{title}</Text>
        <Text fontSize="sm" color="gray">{date}</Text>
      </Stack>
    </Box>
  );
});