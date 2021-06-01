import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { RiArrowLeftSLine } from 'react-icons/ri'

export function BackPageButton() {
  const { back } = useRouter();
  return (
    <IconButton
      aria-label="Voltar para página anterior"
      icon={<RiArrowLeftSLine />}
      onclick={back}
      variant='ghost'
      spacing='8'
      fontSize='32'
      justify='center'
    />
  )
}