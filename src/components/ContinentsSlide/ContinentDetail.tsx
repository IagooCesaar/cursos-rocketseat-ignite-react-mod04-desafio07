import { Box, Text, Flex, BackgroundProps } from '@chakra-ui/react';

interface ContinentDetailProps {
  title: string;
  description: string;
  imageUrl: string;
  imagePosition?: string;
}

export function ContinentDetail({
  title,
  description,
  imageUrl,
  imagePosition = 'center'
}: ContinentDetailProps) {
  return (
    <Box
      bgImage={imageUrl}
      bgRepeat='no-repeat'
      bgSize='cover'
      bgPosition={imagePosition}
      color='default.light.text'
      h='100%'
      w='100%'
    >
      <Flex
        direction='column'
        justifyContent='center'
        align='center'
        flex='1'
        h='100%'
        w='100%'
      >
        <Text
          fontSize={['24', '48']}
          fontWeight='bold'
          textShadow='3px 3px #777'
        >
          {title}
        </Text>
        <Text
          fontSize={['12', '24']}
          textShadow='3px 3px #777'
        >
          {description}
        </Text>
      </Flex>
    </Box>
  )
}