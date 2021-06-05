import { Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import { CitiesCard } from './CitiesCard'

export function CitiesGrid() {
  return (
    <Flex>
      <Heading>Cidades +100</Heading>
      <SimpleGrid>
        <CitiesCard />
      </SimpleGrid>
    </Flex>
  )
}