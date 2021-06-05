import { Flex, Text, Box } from '@chakra-ui/react';
import { ContinentInfoCard } from './ContinentInfoCard';

interface ContinentInfoProps {
  countries: number;
  cities: number;
  languages: number;
}

export function ContinentInfo({
  countries,
  cities,
  languages,
}: ContinentInfoProps) {
  return (
    <Flex
      flex='1'
      width='100%'
      direction='row'
      justify="space-around"
      align="center"
      as='div'
    >
      <ContinentInfoCard value={50} kind='countries' />
      <ContinentInfoCard value={60} kind='languages' />
      <ContinentInfoCard value={127} kind='cities' />
    </Flex>
  )
}