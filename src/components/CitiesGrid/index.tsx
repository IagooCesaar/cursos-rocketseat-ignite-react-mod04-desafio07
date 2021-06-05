import { Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import { CitiesCard } from './CitiesCard'

interface City {
  id: string;
  name: string;
  country: string;
  continent: string;
  image?: string;
}

interface CitiesGridProps {
  cities: City[];
}

export function CitiesGrid({
  cities
}: CitiesGridProps) {
  return (
    <Flex>
      <Heading>Cidades +100</Heading>
      <SimpleGrid>
        {cities.map(city =>
          <CitiesCard key={city.id} city={city} />
        )}
      </SimpleGrid>
    </Flex>
  )
}