import {
  Box,
  Stack,
  Text,
  Heading,
  Flex,
  Image,
  useBreakpointValue
} from '@chakra-ui/react'

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Flex
      direction='row'
      width='100%'
      height='335px'
      bgImage='/banner-background.png'
      bgRepeat='no-repeat'
      bgSize='cover'
      justify='space-evenly'
    >
      <Stack
        direction='column'
        p='8'
        justify='center'
        spacing='5'
      >
        <Heading
          size={!!isWideVersion ? 'lg' : 'md'}
          color='default.light.text'
        >
          5 continentes,<br />
          infinitas possibilidades.
        </Heading>
        <Text
          color='default.light.text'
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou
        </Text>
      </Stack>

      {isWideVersion && (
        <Box>
          <Image
            src='/airplane.png'
            alt='avião de viagem'
            mt='76px'
          />
        </Box>
      )}

    </Flex>
  )
}