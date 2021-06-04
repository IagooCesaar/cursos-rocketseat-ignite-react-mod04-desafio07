import { Flex, Text } from '@chakra-ui/react';

interface ContinentInfoCardProps {
  value: number;
  kind: 'countries' | 'cities' | 'languages';
}

export function ContinentInfoCard({
  value,
  kind,
}: ContinentInfoCardProps) {
  let kindComplete = '';
  switch (kind) {
    case 'countries':
      kindComplete = 'países';
      break;
    case 'cities':
      kindComplete = 'cidades';
      break;
    case 'languages':
      kindComplete = 'línguas';
      break;
    default:
      kindComplete = 'not implemented';
      break;
  }

  return (
    <Flex
      direction='column'
      fontSize={['1xl', '2xl']}
      align='center'
    >
      <Text fontSize={['20', '38']} fontWeight='semibold' color='default.highlight'>{value}</Text>
      <Text fontWeight='semibold'>{kindComplete}</Text>
    </Flex>
  )
}