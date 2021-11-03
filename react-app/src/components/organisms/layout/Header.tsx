import { FC, memo, useCallback } from "react";
import { useDisclosure, Flex, Heading, Link, Box } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { MenuIconButton } from "components/atoms/button/MenuIconButton";
import { MenuDrawer } from "components/molecules/MenuDrawer";
// import { PrimaryButton } from "components/atoms/button/PrimaryButton";


export const Header: FC = memo(() => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const history = useHistory();

  const onClickHome = useCallback(() => history.push("/home"), [history]);
  const onClickNewPost = useCallback(() => history.push("/home/new"), [history]);
  const onClickSetting = useCallback(() => history.push("/home/setting"), [history]);
  const onClickSignOut = useCallback(() => {}, []);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "lg", md: "2xl" }}>
            メモリアルバム
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="md"
          flexGrow={2}
          // display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            {/* <PrimaryButton onClick={onClickNewPost} >
              新規投稿
            </PrimaryButton> */}
            <Link onClick={onClickNewPost}>新規投稿</Link>
          </Box>
        </Flex>
        <Flex
          align="center"
          fontSize="md"
          // flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box mr={4}>
            {/* <PrimaryButton onClick={onClickSignOut} >
              サインアウト
            </PrimaryButton> */}
            <Link onClick={onClickSignOut}>サインアウト</Link>
          </Box>
          <Box pr={4}>
            {/* <PrimaryButton onClick={onClickSetting} >
              設定
            </PrimaryButton> */}
            <Link onClick={onClickSetting}>設定</Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer 
        onClose={onClose} 
        isOpen={isOpen} 
        onClickHome={onClickHome} 
        onClickSetting={onClickSetting} 
        onClickSignOut={onClickSignOut}
      />
    </>
  );
});