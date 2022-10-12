import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import DayBlock from '../../components/DayBlock'
import Nav from '../../components/Nav'

const mockData = [
  {
    date: '2022-10-05',
    entries: [
      {
        event: 'Havent showered in 3 days',
        symbol: 'neutral',
        emotion: 'gross',
        description: 'I havent been able to make myself.',
        notes:
          "I finally showered tonight, and i feel better, but I know I'm going to do it again",
        time: '2022-10-05 19:07:05',
        tags: ['Self-Care', 'Neglect', 'Guilt'],
        starred: false,
      },
      {
        event: 'Ditched Work',
        symbol: 'neutral',
        emotion: 'dissapointed',
        description: 'I tried getting dressed but I just called in.',
        notes: 'I just couldnt make myself',
        time: '2022-10-05 09:07:05',
        tags: ['Responisibility', 'Apathy', 'Work'],
        starred: true,
      },
      {
        event: 'Finished Project',
        symbol: 'happy',
        emotion: 'happy',
        description:
          'Finally finished the website ive been working on for 3 months!',
        notes: 'I feel a high right now thats still going the next day.',
        time: '2022-10-05 09:07:05',
        tags: ['Work', 'Responsibility', 'Excitement', 'Proud'],
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
        description: 'We fought about dishes.',
        notes: 'It was stupid and I got more angry than I should have.',
        time: '2022-10-05 19:07:05',
        tags: ['Relationship', 'Self-Control'],
        starred: true,
      },
    ],
  },
  {
    date: '2022-10-05',
    entries: [
      {
        event: 'Havent showered in 3 days',
        symbol: 'neutral',
        emotion: 'gross',
        description: 'I havent been able to make myself.',
        notes:
          "I finally showered tonight, and i feel better, but I know I'm going to do it again",
        time: '2022-10-05 19:07:05',
        tags: ['Self-Care', 'Neglect', 'Guilt'],
        starred: false,
      },
      {
        event: 'Ditched Work',
        symbol: 'neutral',
        emotion: 'dissapointed',
        description: 'I tried getting dressed but I just called in.',
        notes: 'I just couldnt make myself',
        time: '2022-10-05 09:07:05',
        tags: ['Responisibility', 'Apathy', 'Work'],
        starred: true,
      },
      {
        event: 'Finished Project',
        symbol: 'happy',
        emotion: 'happy',
        description:
          'Finally finished the website ive been working on for 3 months!',
        notes: 'I feel a high right now thats still going the next day.',
        time: '2022-10-05 09:07:05',
        tags: ['Work', 'Responsibility', 'Excitement', 'Proud'],
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
        description: 'We fought about dishes.',
        notes: 'It was stupid and I got more angry than I should have.',
        time: '2022-10-05 19:07:05',
        tags: ['Relationship', 'Self-Control'],
        starred: true,
      },
    ],
  },
  {
    date: '2022-10-05',
    entries: [
      {
        event: 'Havent showered in 3 days',
        symbol: 'neutral',
        emotion: 'gross',
        description: 'I havent been able to make myself.',
        notes:
          "I finally showered tonight, and i feel better, but I know I'm going to do it again",
        time: '2022-10-05 19:07:05',
        tags: ['Self-Care', 'Neglect', 'Guilt'],
        starred: false,
      },
      {
        event: 'Ditched Work',
        symbol: 'neutral',
        emotion: 'dissapointed',
        description: 'I tried getting dressed but I just called in.',
        notes: 'I just couldnt make myself',
        time: '2022-10-05 09:07:05',
        tags: ['Responisibility', 'Apathy', 'Work'],
        starred: true,
      },
      {
        event: 'Finished Project',
        symbol: 'happy',
        emotion: 'happy',
        description:
          'Finally finished the website ive been working on for 3 months!',
        notes: 'I feel a high right now thats still going the next day.',
        time: '2022-10-05 09:07:05',
        tags: ['Work', 'Responsibility', 'Excitement', 'Proud'],
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
        description: 'We fought about dishes.',
        notes: 'It was stupid and I got more angry than I should have.',
        time: '2022-10-05 19:07:05',
        tags: ['Relationship', 'Self-Control'],
        starred: true,
      },
    ],
  },
]

export const index = () => {
  return (
    <Box position={'relative'}>
      <Nav />
      <Container maxW={'container.md'}>
        {mockData.map((day, index) => {
          return <DayBlock key={index} date={day.date} entries={day.entries} />
        })}
      </Container>
    </Box>
  )
}

export default index
