import { Box, Flex, Text, VStack, Image } from '@chakra-ui/react'
import React from 'react'
import { format } from 'date-fns'

type Props = {
  entry: {
    event: string
    emotion: string
    notes: string
    time: string
    tags: []
    starred: boolean
  }
}

const EntryItem = ({ entry }: Props) => {
  return (
    <Flex
      borderWidth={'thin'}
      borderRadius={'base'}
      w='full'
      p={'1'}
      borderColor='gray.200'
      justify={'space-between'}>
      <Box textAlign={'left'}>
        <Text fontSize={'sm'} fontWeight={'medium'}>
          {entry.event}
        </Text>
        <Text fontSize={'xs'} textColor='gray.400'>
          {format(new Date(entry.time), 'p')}
        </Text>
      </Box>
      <Box textAlign={'right'}>
        <Image src='/happy.svg' alt='' h={'6'} />
        <Text>{entry.emotion}</Text>
      </Box>
    </Flex>
  )
}

export default EntryItem
