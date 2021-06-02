import { VStack, Flex, Box, Text } from '@chakra-ui/react'
import Carousel from '../Carousel'
export function ContinentsSlide() {
  return (
    <VStack spacing='8'>
      <Flex direction='column' align='center' justify='space-between'>
        <Text fontSize='2xl'>Vamos nessa?</Text>
        <Text fontSize='2xl'>Então escolha seu continente</Text>
      </Flex>
      <Box maxW='1240px' w='100%' h='450px' >
        <Carousel />
      </Box>
    </VStack>
  )
}