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
  Tag,
  HStack,
  Flex,
  IconButton,
} from '@chakra-ui/react'
import { EditIcon, DeleteIcon, StarIcon } from '@chakra-ui/icons'
import React from 'react'
import symbols from '../util/Symbols'
import { format } from 'date-fns'

type Props = {
  isOpen: boolean
  onClose: () => void
  entry: Entry
}

const EntryModal = ({ isOpen, onClose, entry }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent py={1} mx='3'>
          <ModalHeader>
            {entry.event}
            <Text fontSize={'xs'} color='gray.400'>
              {format(new Date(entry.time), 'p - MMM do, yyyy')}
            </Text>
          </ModalHeader>

          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Image src={symbols[entry.symbol]} alt='' />
            </Box>
            <Text>Emotion: {entry.emotion}</Text>
            <br />
            <Text fontWeight={'Bold'}>Description:</Text>
            <Text>{entry.description}</Text>
            <br />
            <Text fontWeight={'Bold'}>Notes:</Text>
            <Text>{entry.notes}</Text>
            <HStack pt='5'>
              {entry.tags.map((tag, i) => {
                return <Tag key={i}>{tag}</Tag>
              })}
            </HStack>
            <Flex pt={'10'} justifyContent='space-between'>
              <IconButton
                aria-label='Delete Entry'
                backgroundColor={'white'}
                color='gray.500'>
                <DeleteIcon />
              </IconButton>
              <IconButton
                aria-label='Edit Entry'
                backgroundColor={'white'}
                color='gray.500'>
                <StarIcon />
              </IconButton>
              <IconButton
                aria-label='Edit Entry'
                backgroundColor={'white'}
                color='gray.500'>
                <EditIcon />
              </IconButton>
            </Flex>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}
export default EntryModal
