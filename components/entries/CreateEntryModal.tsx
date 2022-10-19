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
} from '@chakra-ui/react'
import { EditIcon, DeleteIcon, StarIcon, CheckIcon } from '@chakra-ui/icons'
import EmotionSelector from './emotion_selector/EmotionSelector'

type Props = {
  isOpen: boolean
  onClose: () => void
  onSave: () => void
}

const CreateEntryModal = ({ isOpen, onClose, onSave }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent py={1} mx='3'>
          <ModalHeader>Create New Entry</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack pt='5'>
              <Input type={'text'} placeholder='Event'></Input>
              <FormLabel>Emotion</FormLabel>
              <EmotionSelector />
              <Textarea placeholder='description' />
              <Textarea placeholder='notes' />
              <input
                type='datetime-local'
                id='meeting-time'
                name='meeting-time'
                value='2018-06-12T19:30'
                min='2018-06-07T00:00'
                max='2018-06-14T00:00'
              />
              <Textarea placeholder='tags' />
            </VStack>
            <Flex pt={'10'} justifyContent='space-between'>
              <IconButton
                onClick={onClose}
                aria-label='Delete Entry'
                backgroundColor={'white'}
                color='gray.500'>
                <DeleteIcon />
              </IconButton>
              <IconButton
                aria-label='Star Entry'
                backgroundColor={'white'}
                color='gray.500'>
                <StarIcon />
              </IconButton>
              <IconButton
                onClick={onSave}
                aria-label='Create Entry'
                backgroundColor={'white'}
                color='gray.500'>
                <CheckIcon />
              </IconButton>
            </Flex>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}
export default CreateEntryModal
