import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  Heading,
  Text,
  Image,
  Box,
} from '@chakra-ui/react'
import React from 'react'
import symbols from '../util/Symbols'

type Props = {
  isOpen: boolean
  onClose: () => void
  entry: {
    event: string
    symbol: string
    emotion: string
    notes: string
    time: string
    tags: string[]
    starred: boolean
  }
}

const EntryModal = ({ isOpen, onClose, entry }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent py={5}>
          <ModalHeader>{entry.event}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Image src={symbols[entry.symbol]} alt='' />
            </Box>
            <Text>Emotion: {entry.emotion}</Text>
            <br />
            <Text fontWeight={'Bold'}>Notes:</Text>
            <Text>{entry.notes}</Text>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}
export default EntryModal
