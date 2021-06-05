import { Flex, Heading, SimpleGrid, FlexProps } from '@chakra-ui/react'
import { CitiesCard } from './CitiesCard'

interface City {
  id: string;
  name: string;
  country: string;
  flag?: string;
  continent: string;
  image?: string;
}

interface CitiesGridProps extends FlexProps {
  cities: City[];
}

export function CitiesGrid({
  cities
}: CitiesGridProps) {
  return (
    <Flex
      direction='column'
      width='100%'
    >
      <Heading>Cidades {cities.length > 100 ? '100+' : cities.length}</Heading>
      <SimpleGrid minChildWidth='256px' gap='45px'>
        {cities.map(city =>
          <CitiesCard key={city.id} city={city} />
        )}
      </SimpleGrid>
    </Flex>
  )
}