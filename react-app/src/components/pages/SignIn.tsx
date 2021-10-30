import { ChangeEvent, FC, memo, useState } from "react";
import { Box, Divider, Flex, Heading, Stack, Link } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";

import { PrimaryButton } from "components/atoms/button/PrimaryButton";
import { useAuth } from "hooks/useAuth";

export const SignIn: FC = memo(() => {
  const { signIn, loading } = useAuth();

  const [userMail, setUserMail] = useState<string>("");
  const [userPassword, setUserPassword] = useState("");

  const onChangeUserMail = (e: ChangeEvent<HTMLInputElement>) => setUserMail(e.target.value);
  const onChangeUserPassword = (e: ChangeEvent<HTMLInputElement>) => setUserPassword(e.target.value);

  const onClickSignIn = () => signIn(userMail, userPassword);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w={{ base: "sm", md: "lg" }} p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          メモリアルバム
        </Heading>
        <Divider my={4} />
        <Stack spacing={5} py={4} px={10}>
          <Input placeholder="Mail" value={userMail} onChange={onChangeUserMail} />
          <Input placeholder="Password" value={userPassword} onChange={onChangeUserPassword} />
          <PrimaryButton
            onClick={onClickSignIn}
            loading={loading}
            disabled={userMail === "" || userPassword === ""}
          >
            Sign In!!
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});