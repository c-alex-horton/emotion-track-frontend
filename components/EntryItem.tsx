import { Box, Flex, Text, VStack, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { format } from 'date-fns'
import EntryModal from './EntryModal'
import symbols from '../util/Symbols'

type Props = {
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

const EntryItem = ({ entry }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => {
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <EntryModal isOpen={isOpen} onClose={onClose} entry={entry} />
      <Flex
        borderWidth={'thin'}
        borderRadius={'base'}
        w='full'
        p={'1'}
        borderColor='gray.200'
        justify={'space-between'}
        onClick={onOpen}>
        <Box textAlign={'left'}>
          <Text fontSize={'sm'} fontWeight={'medium'}>
            {entry.event}
          </Text>
          <Text fontSize={'xs'} textColor='gray.400'>
            {format(new Date(entry.time), 'p')}
          </Text>
        </Box>
        <Box>
          <Flex justifyContent='end'>
            <Image src={symbols[entry.symbol]} alt='' h={'5'} />
          </Flex>
          <Text fontSize={'sm'} textColor='gray.400'>
            {entry.emotion}
          </Text>
        </Box>
      </Flex>
    </>
  )
}

export default EntryItem
