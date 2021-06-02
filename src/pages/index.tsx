import { Flex, Box, Divider } from '@chakra-ui/react';
import { HomeBanner } from '../components/HomeBanner'
import Carousel from '../components/Carousel';
import { ContinentsSlide } from '../components/ContinentsSlide';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <Flex w='100%' direction='column' pb='12'>
      <HomeBanner />
      <TravelTypes />
      <Box flex='1' width={['60px', '90px']} marginX='auto' my={['10', "20"]}>
        <Divider
          border='2px'
          borderColor='body.color'
        />
      </Box>
      <ContinentsSlide />
    </Flex>
  )
}
