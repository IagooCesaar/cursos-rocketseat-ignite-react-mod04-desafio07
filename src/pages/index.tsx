import { Flex, Box, Divider } from '@chakra-ui/react';
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <Flex w='100%' direction='column'>
      <Banner />
      <TravelTypes />
      <Box flex='1' width={['60px', '90px']} marginX='auto' my="20">
        <Divider
          border='2px'
          borderColor='body.color'
        />
      </Box>
      Continuação...
    </Flex>
  )
}
