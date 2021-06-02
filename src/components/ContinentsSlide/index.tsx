import { VStack, Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'
import Carousel from '../Carousel'
import { ContinentDetail } from './ContinentDetail'
export function ContinentsSlide() {
  const carouselContent = [
    <ContinentDetail
      title='América do Norte'
      description='O continente mais antigo.'
      imageUrl='https://images.unsplash.com/photo-1619255106959-f02bf8fb4cec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
    />,
    <ContinentDetail
      title='América do Sul'
      description='O continente mais antigo.'
      imageUrl='https://images.unsplash.com/photo-1619255106959-f02bf8fb4cec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
    />,
    <ContinentDetail
      title='Ásia'
      description='O continente mais antigo.'
      imageUrl='https://images.unsplash.com/photo-1619255106959-f02bf8fb4cec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
    />,
    <ContinentDetail
      title='África'
      description='O continente mais antigo.'
      imageUrl='https://images.unsplash.com/photo-1619255106959-f02bf8fb4cec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
    />,
    <ContinentDetail
      title='Europa'
      description='O continente mais antigo.'
      imageUrl='https://images.unsplash.com/photo-1619255106959-f02bf8fb4cec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
    />,
    <ContinentDetail
      title='Oceania'
      description='O continente mais antigo.'
      imageUrl='https://images.unsplash.com/photo-1619255106959-f02bf8fb4cec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
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