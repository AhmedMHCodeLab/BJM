import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import './index.css'
import App from './App.jsx'
import theme from './utils/theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider theme={theme} withGlobalStyles>
      <App />
    </MantineProvider>
  </StrictMode>
)
