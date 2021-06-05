import { Avatar, Box, Image } from '@chakra-ui/react';
interface City {
  id: string;
  name: string;
  country: string;
  flag?: string;
  continent: string;
  image?: string;
}

interface CitiesCardProps {
  city: City;
}

export function CitiesCard({
  city
}: CitiesCardProps) {
  const countryUrl = (city.flag ?? city.country).replace(/[[:blank:]]/g, '-').toLocaleLowerCase();
  console.log(countryUrl)

  const avatarUrl =
    `https://n.i.uol.com.br/licaodecasa/ensfundamental/geografia/bandeiras/${countryUrl}.gif`;
  return (
    <Box>
      <Image width="100px" height="100px" src={city.image} />
      <Avatar name={city.country} src={avatarUrl} />
      <span>{city.name}</span>
    </Box>
  )
}