import { SimpleGrid, Flex, useBreakpointValue } from '@chakra-ui/react'
import {
  TravelTypeItem
} from './TravelTypeItem'

const travelTypeItems = [
  { title: 'vida noturna', image: '/travel-type-cocktail.png' },
  { title: 'praia', image: '/travel-type-surf.png' },
  { title: 'moderno', image: '/travel-type-building.png' },
  { title: 'clássico', image: '/travel-type-museum.png' },
  { title: 'e mais...', image: '/travel-type-earth.png' },
]

export function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      h='145px'
      marginX='auto'
      w='100%'
      justify='center'
    >
      <SimpleGrid
        flex='1'
        align="center"
        minChildWidth='145px'
        maxW='1160px'
      >
        {travelTypeItems.map(item =>
          <TravelTypeItem 
            key={item.title} 
            title={item.title} 
            image={item.image} 
            isWideVersion={isWideVersion}
          />
        )}
      </SimpleGrid>
    </Flex>
  )
}