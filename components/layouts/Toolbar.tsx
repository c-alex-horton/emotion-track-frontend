import React from 'react'
import { Box, IconButton, Flex } from '@chakra-ui/react'
import { AddIcon, SettingsIcon } from '@chakra-ui/icons'

const Toolbar = () => {
  return (
    <Box
      position={'fixed'}
      bottom='0'
      w={'full'}
      bgGradient='linear(to-t, white, white, white, #ffffff7b)'
      h={12}>
      <Flex justifyContent={'space-between'} px='2'>
        <IconButton aria-label='Settings' bg={'#ffffff0'}>
          <SettingsIcon />
        </IconButton>
        <IconButton aria-label='Create New Entry' bg={'#ffffff0'}>
          <AddIcon />
        </IconButton>
      </Flex>
    </Box>
  )
}

export default Toolbar
