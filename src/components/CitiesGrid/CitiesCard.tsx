import { Box, Image } from '@chakra-ui/react';
interface City {
  id: string;
  name: string;
  country: string;
  continent: string;
  image?: string;
}

interface CitiesCardProps {
  city: City;
}

export function CitiesCard({
  city
}: CitiesCardProps) {
  return (
    <Box>
      <Image width="100px" height="100px" src={city.image} />
      <span>{city.name}</span>
    </Box>
  )
}