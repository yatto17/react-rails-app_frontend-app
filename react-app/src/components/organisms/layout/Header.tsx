import { FC, memo } from "react";
import { useDisclosure, Flex, Heading, Link, Box } from "@chakra-ui/react";

import { MenuIconButton } from "components/atoms/button/MenuIconButton";
import { MenuDrawer } from "components/molecules/MenuDrawer";


export const Header: FC = memo(() => {
  const { onOpen, onClose, isOpen } = useDisclosure();
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
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            メモリアルバム
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          // display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link>新規投稿</Link>
          </Box>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          // flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link>設定</Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
});