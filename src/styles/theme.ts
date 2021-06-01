import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,  
}

export const theme = extendTheme({
  config,
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  colors: {
    default: {
      'highligh': '#ffba08',
      'white': '#ffffff',
      'black': '#000000',
      'dark': {
        'text': '#47585b',
        'info': '#999999'
      },
      'light': {
        'text': '#f5f8fa',
        'info': '#dadada'
      }
    }
  },
  styles: {
    global: {
      body: {
        bg: 'default.light.text',
        color: 'default.dark.text',
      }
    }
  }
})