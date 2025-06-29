import React,{useState, useEffect} from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@heroui/react";
import { MailIcon } from "lucide-react";

type SubscribeSectionProps = {
  openModal: boolean;
  onModalClose: () => void;
}

export default function SubscribeSection({openModal, onModalClose}: SubscribeSectionProps) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = useState<"blur">("blur");

  useEffect(() => {
    if(openModal){
    onOpen();
    }
  }, [openModal]);

  const handleOpen = (backdrop: "blur") => {
    setBackdrop(backdrop);
    onOpen();
  };

  const handleClose = () => {
    onClose();
    if(onModalClose){
      onModalClose();
    }
  }

  return (
    <>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={handleClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl font-bold">Subscribe for updates</ModalHeader>
              <ModalBody>
              <Input
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" className="cursor-pointer bg-blue-600 hover:bg-blue-700 rounded-lg shadow-[0px_2px_0px_0px_#FFFFFF40_inset] text-white" onPress={handleClose}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

