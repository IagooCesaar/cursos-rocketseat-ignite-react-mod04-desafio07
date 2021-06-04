import { Flex, Icon, Text, Tooltip } from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri'

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
      <Text fontSize={['20', '38']} fontWeight='semibold' color='default.highlight'>
        {value > 100 ? value - 100 : value}
      </Text>
      <Text fontWeight='semibold'>
        {kindComplete}
        {(value > 100)
          && (
            <>
              {' '}
              <Tooltip hasArrow label={`${value} ${kindComplete}`} fontSize='md' >
                <span><Icon opacity='50%' as={RiInformationLine} /></span>
              </Tooltip>
            </>
          )
        }
      </Text>
    </Flex>
  )
}