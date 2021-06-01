import { ElementType } from "react";
import { useColorMode, Box, IconButton } from "@chakra-ui/react";
import { RiMoonLine, RiSunLine } from 'react-icons/ri'

export function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === 'light') {
    return (
      <Box>
        <IconButton
          aria-label="Alterar cores"
          icon={<RiMoonLine />}
          onClick={toggleColorMode}
          variant='unstyled'
          size='md'
        />
      </Box>
    )
  }

  return (
    <Box>
      <IconButton
        aria-label="Alterar cores"
        icon={<RiSunLine />}
        onClick={toggleColorMode}
        variant='unstyled'
        size='md'
      />
    </Box>
  )
}