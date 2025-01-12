import React from 'react'
import GalleryHero from '../components/AboutUs/GalleryHero'
import PortfolioGrid from '../components/AboutUs/GalleryGrid'
import { Box } from '@mantine/core'

const Gallery = () => {
  return (
    <Box>
      <Box style={{ height: '100vh' }}>
        <GalleryHero />
      </Box>
      <Box style={{ position: 'relative' }}>
        <PortfolioGrid />
      </Box>

    </Box>
  );
}

export default Gallery