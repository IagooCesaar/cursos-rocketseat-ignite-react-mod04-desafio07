import { Box, Text, Flex } from '@chakra-ui/react';

interface ContinentDetailProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function ContinentDetail({
  title,
  description,
  imageUrl
}: ContinentDetailProps) {
  return (
    <Box
      bgImage={imageUrl}
      bgRepeat='no-repeat'
      bgSize='cover'
      color='default.light.text'
      // h='450px'
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
        <Text fontSize='48' fontWeight='bold'>{title}</Text>
        <Text fontSize='24'>{description}</Text>
      </Flex>
    </Box>
  )
}