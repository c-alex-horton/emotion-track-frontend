import React from 'react'
import { Box, Divider, Heading, Text, VStack } from '@chakra-ui/react'
import { format } from 'date-fns'
import EntryItem from './EntryItem'

type Props = {
  date: string
  entries: {
    event: string
    symbol: string
    emotion: string
    notes: string
    time: string
    tags: string[]
    starred: boolean
  }[]
}

const DayBlock = ({ date, entries }: Props) => {
  return (
    <VStack spacing={3} py='2'>
      <Text color={'gray.400'} noOfLines={1} textAlign={'center'}>
        {format(new Date(date), 'EEEE, MMM do, y')}
      </Text>
      <Divider />
      {entries.map((entry, index) => {
        return <EntryItem entry={entry} key={index} />
      })}
    </VStack>
  )
}

export default DayBlock
