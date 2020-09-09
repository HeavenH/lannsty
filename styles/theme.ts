import { theme, DefaultTheme } from '@chakra-ui/core';

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '8px',
    md: '12px',
  },
  fontSizes: {
    ...theme.fontSizes,
    "5xl": "4rem"
  },
}

export default customTheme;