import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Container,
  Flex,
  VStack,
  HStack,
  Image,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Text,
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Container maxWidth='container.xl' padding={0} bg='blue.300'>
      <Head>
        <title>Emotion Track</title>
        <meta name='description' content='Emotion Tracking Software' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Flex h='100vh' py={20} align='center' direction='column'>
        <HStack
          w='full'
          h='full'
          p={1}
          spacing={10}
          alignItems='center'
          justify='center'>
          <Box>
            <Image src='/Logo.svg' alt='Emotion Track' />
          </Box>
        </HStack>
        <HStack
          w='full'
          h='full'
          p={10}
          spacing={10}
          alignItems='center'
          justify='center'>
          <FormControl>
            <VStack spacing={10}>
              <Input
                type='email'
                placeholder='Email'
                variant='flushed'
                color='white'
                _placeholder={{ color: 'inherit' }}
                maxWidth='md'
              />
              <Input
                type='password'
                placeholder='Password'
                variant='flushed'
                color='white'
                _placeholder={{ color: 'inherit' }}
                maxWidth='md'
              />
              <Input
                type='password'
                placeholder='Confirm Password'
                variant='flushed'
                color='white'
                _placeholder={{ color: 'inherit' }}
                maxWidth='md'
              />
              <Button
                rightIcon={<ArrowForwardIcon />}
                variant='outline'
                color='white'>
                Sign Up
              </Button>
            </VStack>
          </FormControl>
        </HStack>
        <Text color='white'>
          Already have an account?{' '}
          <Link href='/'>
            <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Sign In
            </span>
          </Link>
        </Text>
      </Flex>
    </Container>
  )
}

export default Home
