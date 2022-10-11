import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import DayBlock from '../../components/DayBlock'
import Nav from '../../components/Nav'

const mockData = [
  {
    date: '2022-10-05',
    entries: [
      {
        event: 'Ate too much',
        symbol: 'neutral',
        emotion: 'gross',
        notes: 'I should have stopped but I kept going',
        time: '2022-10-05 19:07:05',
        tags: [],
        starred: false,
      },
      {
        event: 'Ditched Work',
        symbol: 'neutral',
        emotion: 'dissapointed',
        notes: 'I just couldnt make myself',
        time: '2022-10-05 09:07:05',
        tags: [],
        starred: true,
      },
      {
        event: 'Finished Project',
        symbol: 'happy',
        emotion: 'happy',
        notes: 'I just couldnt make myself',
        time: '2022-10-05 09:07:05',
        tags: [],
        starred: true,
      },
    ],
  },
  {
    date: '2022-10-06',
    entries: [
      {
        event: 'Fought with Spouse',
        symbol: 'sad',
        emotion: 'sad',
        notes:
          'We fought about dishes. It was stupid and I got more angry than I should have.',
        time: '2022-10-05 19:07:05',
        tags: [],
        starred: true,
      },
    ],
  },
]

export const index = () => {
  return (
    <Box>
      <Nav />
      <Container maxW={'container.xl'}>
        {mockData.map((day, index) => {
          return <DayBlock key={index} date={day.date} entries={day.entries} />
        })}
      </Container>
    </Box>
  )
}

export default index
