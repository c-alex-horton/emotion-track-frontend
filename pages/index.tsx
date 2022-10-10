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
    <Box bg='blue.300'>
      <Container maxWidth='container.xl' padding={0}>
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
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  variant='outline'
                  color='white'>
                  Login
                </Button>
              </VStack>
            </FormControl>
          </HStack>
          <Text color='white'>
            Don&apos;t have an account?{' '}
            <Link href='/register'>
              <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Register
              </span>
            </Link>
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}

export default Home
