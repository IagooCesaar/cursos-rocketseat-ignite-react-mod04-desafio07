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
      <Image src={image} alt={title} />
      <Text>{title}</Text>
    </Flex>
  )
}