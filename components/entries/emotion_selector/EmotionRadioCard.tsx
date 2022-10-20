import { Box, useRadio, Image } from '@chakra-ui/react'
import symbols from '../../../util/Symbols'

const EmotionRadioCard = (props: any) => {
  const { image, ...radioProps } = props
  const { getInputProps, getCheckboxProps } = useRadio(radioProps)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow='md'
        _checked={{
          bg: 'blue.100',
          color: 'white',
          borderColor: 'blue.50',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}>
        <Image src={symbols[image]} alt='' width={'10'} />
      </Box>
    </Box>
  )
}

export default EmotionRadioCard
