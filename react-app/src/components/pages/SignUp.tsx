import { ChangeEvent, FC, memo, useState } from "react";
import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";

import { PrimaryButton } from "components/atoms/button/PrimaryButton";
import { useAuth } from "hooks/useAuth";

export const SignUp: FC = memo(() => {
  const { signUp, loading } = useAuth();

  const [userName, setUserName] = useState<string>("");
  const [userMail, setUserMail] = useState<string>("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirmation, setUserPasswordConfirmation] = useState("");

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);
  const onChangeUserMail = (e: ChangeEvent<HTMLInputElement>) => setUserMail(e.target.value);
  const onChangeUserPassword = (e: ChangeEvent<HTMLInputElement>) => setUserPassword(e.target.value);
  const onChangeUserPasswordConfirmation = (e: ChangeEvent<HTMLInputElement>) => setUserPasswordConfirmation(e.target.value);

  const onClickSignUp = () => signUp(userName, userMail, userPassword, userPasswordConfirmation);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w={{ base: "sm", md: "lg" }} p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          新規アカウント登録
        </Heading>
        <Divider my={4} />
        <Stack spacing={5} py={4} px={10}>
          <Input placeholder="Name" value={userName} onChange={onChangeUserName} />
          <Input placeholder="Mail" value={userMail} onChange={onChangeUserMail} />
          <Input placeholder="Password" value={userPassword} onChange={onChangeUserPassword} />
          <Input placeholder="Password-confirmation" value={userPasswordConfirmation} onChange={onChangeUserPasswordConfirmation} />
          <PrimaryButton
            onClick={onClickSignUp}
            loading={loading}
            disabled={userName === "" || userMail === "" || userPassword === "" || userPasswordConfirmation === ""}
          >
            Sign Up!!
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});