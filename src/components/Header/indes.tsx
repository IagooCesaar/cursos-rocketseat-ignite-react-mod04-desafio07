import { Flex, Image } from '@chakra-ui/react';
import { ToggleColorMode } from '../ToggleColorMode';

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      h='100px'
      marginX='auto'
      align='center'
      justifyContent='center'
    >
      <Image src='/logo.svg' alt='WorldTrip' objectFit='cover' h='12' />
      <ToggleColorMode />
    </Flex>
  )
}