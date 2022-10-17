// Modal for confirming action such as 'Are you Sure you want to close?
// Best Used with Context
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  VStack,
  Flex,
  IconButton,
  Input,
  FormControl,
  FormHelperText,
  RadioGroup,
  FormLabel,
  Textarea,
  HStack,
  Button,
} from '@chakra-ui/react'
import { EditIcon, DeleteIcon, StarIcon, CheckIcon } from '@chakra-ui/icons'

type Props = {
  isOpen: boolean
  onClose: () => void
  text: string
  onYes: () => void
  onNo: () => void
}

const ConfirmationModal = ({ isOpen, onClose, text, onYes, onNo }: Props) => {
  const confirm = () => {
    onClose()
  }

  const cancel = () => {
    onClose()
  }
  // const time = Date.now()
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent py={1} mx='3'>
          <ModalHeader>{text}</ModalHeader>
          <ModalBody>{text}</ModalBody>
          <HStack>
            <Button onClick={onNo}>No</Button>
            <Button onClick={onYes}>Yes</Button>
          </HStack>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}

export default ConfirmationModal
