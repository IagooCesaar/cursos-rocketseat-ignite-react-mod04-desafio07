import { Box, Flex } from '@chakra-ui/react'
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
  return (
    <Box
      h='145px'
      marginX='auto'
      w='100%'
    >
      <Flex
        align="center"
        justify="space-around"
        maxW='1160px'
      >
        {travelTypeItems.map(item =>
          <TravelTypeItem key={item.title} title={item.title} image={item.image} />
        )}
      </Flex>
    </Box>
  )
}