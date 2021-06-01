import { Flex } from '@chakra-ui/react';
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <Flex w='100%' direction='column'>
      <Banner />
      <TravelTypes />
      Continuação...
    </Flex>
  )
}
