import { FC, memo } from "react";
import { Button } from "@chakra-ui/button";
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/modal";

type Props = {
  onClose: () => void;
  isOpen: boolean;
}

export const MenuDrawer: FC<Props> = memo((props) => {
  const { onClose, isOpen } = props;
  return (
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
  );
});