import {
  Box,
  Stack,
  Text,
  Heading,
  Flex,
  Image,
  useBreakpointValue
} from '@chakra-ui/react'
import { BannerContainer } from '../BannerContainer'

interface ContinentBannerProps {
  bgImage: string;
  bgSize: string;
  bgPosition: string;
  continentName: string;
}

export function ContinentBanner({
  bgImage,
  bgPosition,
  bgSize,
  continentName,
}: ContinentBannerProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <BannerContainer
      bgImage={bgImage}
      bgSize={bgSize}
      bgPosition={bgPosition}
      heigh='500px'
    >
      <Flex
        width='100%'
        height='100%'
        flex='1'
        align='flex-end'
        p='12'
      >
        <Heading
          fontSize={isWideVersion ? '56' : '28'}
          color='default.light.text'
          ml='40'
        >
          {continentName}
        </Heading>
      </Flex>
    </BannerContainer>
  )
}