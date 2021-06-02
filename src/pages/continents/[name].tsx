import { GetStaticProps, GetStaticPaths } from 'next';
import { Flex } from '@chakra-ui/react';
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
  return (
    <Flex w='100%' direction='column' pb='12'>
      <Flex maxW='1240px' px='10'>
        <h1>{continent.title}</h1>

      </Flex>
    </Flex>
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