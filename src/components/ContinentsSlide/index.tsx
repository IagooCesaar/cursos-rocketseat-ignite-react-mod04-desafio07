import { VStack, Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'
import Carousel from '../Carousel'
import { ContinentDetail } from './ContinentDetail'
export function ContinentsSlide() {
  const carouselContent = [
    <ContinentDetail
      title='América do Norte'
      description='O continente mais antigo.'
      imageUrl='https://images.unsplash.com/photo-1610312278520-bcc893a3ff1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=730&q=80'
      imagePosition='bottom'
    />,
    <ContinentDetail
      title='América do Sul'
      description='O continente mais antigo.'
      imageUrl='https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    />,
    <ContinentDetail
      title='Ásia'
      description='O continente mais antigo.'
      imageUrl='https://images.unsplash.com/photo-1547150492-da7ff1742941?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    />,
    <ContinentDetail
      title='África'
      description='O continente mais antigo.'
      imageUrl='https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80'
      imagePosition='bottom'
    />,
    <ContinentDetail
      title='Europa'
      description='O continente mais antigo.'
      imageUrl='https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80'
    />,
    <ContinentDetail
      title='Oceania'
      description='O continente mais antigo.'
      imageUrl='https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    />
  ]

  return (
    <VStack spacing='8'>
      <Flex direction='column' align='center' justify='space-between'>
        <Text fontSize='2xl'>Vamos nessa?</Text>
        <Text fontSize='2xl'>Então escolha seu continente</Text>
      </Flex>
      <Box maxW='1240px' w='100%' h='450px' >
        <Carousel content={carouselContent} />
      </Box>
    </VStack>
  )
}