import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import {
  Box,
  Flex,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import { ContinentBanner } from '../../components/ContinentBanner';
import { api } from '../../services/api';
import { ContinentInfo } from '../../components/ContinentInfo';

interface ContinentsProps {
  continent: {
    id: string;
    title: string;
    description: string;
    image: string;
    betterImagePosition: string;
    bio?: string;
  }
}

export default function Continents({
  continent,
}: ContinentsProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Flex w='100%' direction='column' pb='12'>
      <ContinentBanner
        bgImage={continent.image}
        bgPosition={continent.betterImagePosition}
        bgSize='cover'
        continentName={continent.title}
      />
      <Box maxW='1240px' px='10' marginX='auto'>
        <Flex
          justify='space-between'
          align='center'
          width='100%'
          minH={isWideVersion ? 'auto' : '300px'}
          direction={isWideVersion ? 'row' : 'column'}
        >
          <Box flex='1' width='100%'>
            <Text as='p' fontSize={['md', 'lg']} align='justify' width='100%'>
              {continent.bio ?? 'Not implemented'}
            </Text>
          </Box>
          <ContinentInfo countries={50} languages={60} cities={127} />
        </Flex>
        {/* lista de cidades */}
      </Box>
    </Flex >
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params;
  const response = await api.get(`/continents/${String(name)}`)
  const continent = response.data;
  return {
    props: {
      continent
    }
  }
}