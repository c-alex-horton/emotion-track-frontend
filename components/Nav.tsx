import React from 'react'
import {
  Box,
  Container,
  Flex,
  IconButton,
  Text,
  HStack,
} from '@chakra-ui/react'
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  CalendarIcon,
  StarIcon,
} from '@chakra-ui/icons'

const Nav = () => {
  return (
    <Box bg='blue.300'>
      <Container maxW={'container.lg'} h={'3rem'} color='white'>
        <Flex align={'center'} h={'full'} justify='space-between'>
          <IconButton
            aria-label='Previous Date Selection'
            bg='blue.300'
            icon={<StarIcon />}
          />
          <HStack>
            <IconButton
              aria-label='Previous Date Selection'
              bg='blue.300'
              icon={<ArrowBackIcon />}
            />
            <Text>Week of Date</Text>
            <IconButton
              aria-label='Previous Date Selection'
              bg='blue.300'
              icon={<ArrowForwardIcon />}
            />
          </HStack>
          <IconButton
            aria-label='Previous Date Selection'
            bg='blue.300'
            icon={<CalendarIcon />}
          />
        </Flex>
      </Container>
    </Box>
  )
}

export default Nav
