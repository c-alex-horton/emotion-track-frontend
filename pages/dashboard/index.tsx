import { Box, Container, Spacer } from '@chakra-ui/react'
import React from 'react'
import DayBlock from '../../components/entries/DayBlock'
import Nav from '../../components/layouts/Nav'
import Toolbar from '../../components/layouts/Toolbar'
import CreateEntryModal from '../../components/entries/CreateEntryModal'

// Test Data
import mockData from '../../data/mockData'

export const index = () => {
  return (
    <Box position={'relative'}>
      <Nav />
      <Container maxW={'container.md'}>
        {mockData.map((day, index) => {
          return <DayBlock key={index} date={day.date} entries={day.entries} />
        })}
      </Container>
      <Box h={'5rem'} />
      <Toolbar />
    </Box>
  )
}

export default index
