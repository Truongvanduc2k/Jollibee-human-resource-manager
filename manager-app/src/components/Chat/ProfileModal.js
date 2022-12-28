import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";
import { WEB_SERVER_URL } from "../../config/serverURL";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
      {children ? (
        <span onclick={onOpen}> {children}</span>
      ) : (
        <IconButton
          display={{ base: "flex" }}
          icon={<ViewIcon />}
          onClick={onOpen}
        />
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="440px">
          <ModalCloseButton />

          <ModalBody
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontSize="20px"
              fontFamily="Poppins"
              display="flex"
              justifyContent="center"
            >
              {user.fullname}
            </Text>
            <Image
              borderRadius="full"
              boxSize="150px"
              alt={user.fullname}
              src={`${WEB_SERVER_URL}${user.avatarUrl}`}
            />
            <Text fontSize={{ base: "28px", md: "30px" }} fontFamily="Poppins">
              Email: {user.email}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProfileModal;
