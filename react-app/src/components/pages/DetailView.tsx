import { FC, memo } from "react";
import { Box, Flex, Heading, Stack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Textarea } from "@chakra-ui/textarea";


export const DetailView: FC = memo(() => {

  return (
    <Flex>
      <Stack spacing={4}>
        <Heading as="h1" size="3xl" p={4} >
          title
        </Heading>
        <Box p={8}>
          <Image 
            src="https://source.unsplash.com/random" 
            alt="Image"
          />
        </Box>
        <Box p={4}>
          <Textarea 
            placeholder="思い出エピソードが入る"
            isReadOnly={true}
          />
        </Box>
      </Stack>
    </Flex>
  );
});