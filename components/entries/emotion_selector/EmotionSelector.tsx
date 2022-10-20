import {
  Image,
  Box,
  HStack,
  Flex,
  IconButton,
  useRadioGroup,
} from '@chakra-ui/react'
import EmotionRadioCard from './EmotionRadioCard'
import symbols from '../../../util/Symbols'

const EmotionSelector = () => {
  const options = ['happy', 'neutral', 'sad']

  const { value, getRootProps, getRadioProps } = useRadioGroup({
    name: 'emotion',
    // defaultValue: 'neutral',
    onChange: console.log,
  })

  const group = getRootProps()

  return (
    <HStack {...group}>
      {options.map((value) => {
        return (
          <EmotionRadioCard
            key={value}
            {...getRadioProps({ value })}
            image={value}
          />
        )
      })}
    </HStack>
  )
}

export default EmotionSelector
