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

interface ContinentsProps {
  continent: {
    id: string;
    title: string;
    description: string;
    image: string;
    betterImagePosition: string;
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
          direction={isWideVersion ? 'row' : 'column'}
        >
          <Box flex='1'>
            <Text as='p' fontSize={['md', 'lg']} align='justify'>
              A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo
              a península ocidental da Eurásia. A Europa geralmente divide-se da Ásia a leste pela
              divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o
              mar Negro a sudes
            </Text>
          </Box>
          <Flex
            flex='1'
            direction='row'
            justify="space-around"
            align="center"
          >
            <Flex
              direction='column'
              fontSize={['1xl', '2xl']}
              align='center'
            >
              <Text fontSize={['20', '38']} fontWeight='semibold' color='default.highlight'>50</Text>
              <Text fontWeight='semibold'>países</Text>
            </Flex>
            <Flex
              direction='column'
              fontSize={['1xl', '2xl']}
              justify="center"
              align='center'
            >
              <Text fontSize={['20', '38']} fontWeight='semibold' color='default.highlight'>60</Text>
              <Text fontWeight='semibold'>línguas</Text>
            </Flex>
            <Flex
              direction='column'
              fontSize={['1xl', '2xl']}
              justify="center"
              align='center'
            >
              <Text fontSize={['20', '38']} fontWeight='semibold' color='default.highlight'>27</Text>
              <Text fontWeight='semibold'>cidades</Text>
            </Flex>
          </Flex>
        </Flex>
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