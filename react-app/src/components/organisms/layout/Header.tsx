import { FC, memo } from "react";
import { useDisclosure, Flex, Heading, Link, Box, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerBody, Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";


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
        <IconButton
          aria-label="メニューボタン"
          icon={<HamburgerIcon />}
          size="sm"
          variant="unstyled"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />
      </Flex>
      <Drawer
        placement="right"
        size="xs"
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
            <Button w="100%">TOP</Button>
            <Button w="100%">設定</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});