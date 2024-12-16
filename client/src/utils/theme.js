import { createTheme } from '@mantine/core'

const theme = createTheme({
  colors: {
    purpleBlue: [
      '#dfe2fe',
      '#b1cbfa',
      '#8e98f5',
      '#7971ea',
      '#bcb8f5',
      '#182c5e',
    ],
  },
  fontFamily: 'League Spartan, sans-serif',
  headings: {
    sizes: {
      h1: {
        fontSize: '3rem',
        lineHeight: 1.1,
      },
      h2: {
        fontSize: '2.5rem',
        lineHeight: 1.1,
      },
      h3: {
        fontSize: '2rem',
        lineHeight: 1.1,
      },
      h4: {
        fontSize: '1.5rem',
        lineHeight: 1.1,
      },
      h5: {
        fontSize: '1.25rem',
        lineHeight: 1.1,
      },
      h6: {
        fontSize: '1rem',
        lineHeight: 1.1,
      },
    },
  },
})

export default theme
