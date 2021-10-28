import { FC, memo } from "react";
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";

import { PrimaryButton } from "components/atoms/button/PrimaryButton";

export const SignIn: FC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          メモリアルバム
        </Heading>
        <Divider my={4} />
        <Stack spacing={5} py={4} px={10}>
          <Input placeholder="Mail" />
          <Input placeholder="Password" />
          <PrimaryButton>Sign In!!</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});