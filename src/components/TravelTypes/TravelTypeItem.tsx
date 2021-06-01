import { Flex, Image, Text } from '@chakra-ui/react';

interface TravelTypeItemProps {
  title: string;
  image: string;
}

export function TravelTypeItem({
  title,
  image
}: TravelTypeItemProps) {
  return (
    <Flex
      direction='column'
      justify='center'
      align='center'
    >
      <Image 
        src={image} 
        alt={title} 
        size='5.3125rem'
      />
      <Text
        fontWeight='semibold'
        size='lg'
        mt='6'
      >
        {title}
      </Text>
    </Flex>
  )
}