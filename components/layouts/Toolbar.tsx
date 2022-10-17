import React, { useState } from 'react'
import { Box, IconButton, Flex } from '@chakra-ui/react'
import { AddIcon, SettingsIcon } from '@chakra-ui/icons'
import CreateEntryModal from '../entries/CreateEntryModal'
import ConfirmationModal from '../modals/ConfirmationModal'

const Toolbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)

  const saveEntry = () => {
    setIsOpen(false)
  }

  const discardEntry = () => {
    setIsOpen(false)
  }

  const openConfirmation = () => {
    setConfirmOpen(true)
  }

  const onYes = () => {
    discardEntry()
    setConfirmOpen(false)
  }

  const onNo = () => setConfirmOpen(false)

  return (
    <>
      <CreateEntryModal
        isOpen={isOpen}
        onClose={openConfirmation}
        onSave={saveEntry}
      />
      <ConfirmationModal
        isOpen={confirmOpen}
        onClose={onNo}
        onYes={onYes}
        onNo={onNo}
        text={'Discard Entry?'}
      />
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
          <IconButton
            aria-label='Create New Entry'
            bg={'#ffffff0'}
            onClick={() => {
              setIsOpen(true)
            }}>
            <AddIcon />
          </IconButton>
        </Flex>
      </Box>
    </>
  )
}

export default Toolbar
