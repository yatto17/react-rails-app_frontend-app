import { ChangeEvent, FC, memo, useRef, useState } from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal";

import { useAuth } from "hooks/useAuth";
import { PrimaryButton } from "components/atoms/button/PrimaryButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

export const SignUp: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  const { submitForSignUp, loading } = useAuth();

  const [userName, setUserName] = useState<string>("");
  const [userMail, setUserMail] = useState<string>("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirmation, setUserPasswordConfirmation] = useState("");

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);
  const onChangeUserMail = (e: ChangeEvent<HTMLInputElement>) => setUserMail(e.target.value);
  const onChangeUserPassword = (e: ChangeEvent<HTMLInputElement>) => setUserPassword(e.target.value);
  const onChangeUserPasswordConfirmation = (e: ChangeEvent<HTMLInputElement>) => setUserPasswordConfirmation(e.target.value);

  const onClickSignUp = () => submitForSignUp(userName, userMail, userPassword, userPasswordConfirmation);

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Nickname</FormLabel>
            <Input
              ref={initialRef}
              placeholder="Nickname" 
              value={userName} 
              onChange={onChangeUserName} 
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input 
              placeholder="Email" 
              value={userMail} 
              onChange={onChangeUserMail} 
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input 
              placeholder="Password" 
              value={userPassword} 
              onChange={onChangeUserPassword} 
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>PasswordConfirmation</FormLabel>
            <Input 
              placeholder="PasswordConfirmation" 
              value={userPasswordConfirmation} 
              onChange={onChangeUserPasswordConfirmation} 
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <PrimaryButton
            onClick={onClickSignUp}
            loading={loading}
            disabled={userName === "" || userMail === "" || userPassword === "" || userPasswordConfirmation === ""}
          >
            Sign Up!!
          </PrimaryButton>
          <Button onClick={onClose} ml={4}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});