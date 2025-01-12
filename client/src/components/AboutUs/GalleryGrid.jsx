import React, { useState } from 'react';
import { Container, Text, Group, SimpleGrid, Paper, Title, Box, Modal, Image, Grid } from '@mantine/core';

const projects = [
  { 
    id: 1, 
    title: 'BREATHE', 
    size: 'large',
    description: 'A contemplative drama exploring themes of isolation and renewal.',
    image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM2-1024x683.jpg'
  },
  {
    id: 2,
    title: 'THE LOST CITY',
    size: 'small',
    description: 'An action-adventure film about a daring archaeologist.',
    image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM2-1024x683.jpg'
  },
  {
    id: 3,
    title: 'THE LAST STAND',
    size: 'small',
    description: 'A post-apocalyptic thriller set in a barren wasteland.',
    image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM2-1024x683.jpg'
  },
  {
    id: 4,
    title: 'THE WILDERNESS',
    size: 'large',
    description: 'A nature documentary exploring the beauty of the great outdoors.',
    image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM2-1024x683.jpg'
  },
  {
    id: 5,
    title: 'THE JOURNEY',
    size: 'large',
    description: 'A coming-of-age story.',
    image: 'https://via.placeholder.com/200x200?text=THE+JOURNEY'
  },
  {
    id: 6,
    title: 'THE QUEST',
    size: 'small',
    description: 'An epic fantasy adventure.',
    image: 'https://via.placeholder.com/200x200?text=THE+QUEST'
  },
  
  
  
];

const ProjectCard = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Paper
      p="md"
      onClick={() => onClick(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? '#2C2E33' : '#1A1B1E',
        height: project.size === 'large' ? 600 : 300,
        gridColumn: project.size === 'large' ? 'span 2' : 'span 1',
        gridRow: project.size === 'large' ? 'span 2' : 'span 1',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Adding the image */}
      <Image 
        src={project.image} 
        alt={project.title} 
        height="100%" 
        width="100%" 
        style={{
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          filter: isHovered ? 'brightness(0.8)' : 'brightness(1)',
          transition: 'filter 0.5s ease'
        }}
      />
      
      {/* Hover Effect */}
      {isHovered && (
        <Box
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '1rem',
            background: 'rgba(0, 0, 0, 0.11)',
            transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.2s ease',
            zIndex: 3,
          }}
        >
          <Text size="sm">Know More</Text>
        </Box>
      )}
    </Paper>
  );
};

export default function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Container fluid style={{ backgroundColor: '#182c5e', color: 'white', padding: '2rem' }}>
      <Title order={1} size="h2">MOMENTS WE SHARED</Title>
      <Text size="xl" mt="xs" mb="xs">Captured Times</Text>

      <SimpleGrid 
        cols={4} 
        spacing="md"
        breakpoints={[
          { maxWidth: 'md', cols: 3 },
          { maxWidth: 'sm', cols: 2 },
          { maxWidth: 'xs', cols: 1 }
        ]}
      >
        {projects.map(project => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={setSelectedProject}
          />
        ))}
      </SimpleGrid>

      <Modal
        opened={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={null}
        size="90vw"
        styles={{ 
          modal: { 
            backgroundColor: '#1A1B1E',
            maxWidth: '1400px',
            width: '90vw',
            maxHeight: '90vh',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
          },
          header: {
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: 10,
            margin: 0,
            padding: '0.5rem',
          },
          close: {
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '50%',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }
          },
          body: {
            height: '80vh',
            padding: 0,
            margin: 0,
          }
        }}
      >
        {selectedProject && (
          <Grid gutter={0} sx={{ height: '100%' }}>
            {/* Image Column - 80% width */}
            <Grid.Col span={9.6}>
              <Box sx={{ 
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#0A0A0A',
                borderRadius: '4px 0 0 4px',
                overflow: 'hidden',
              }}>
                <Image 
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Grid.Col>

            {/* Description Column - 20% width */}
            <Grid.Col span={2.4}>
              <Box sx={{ 
                height: '100%',
                padding: '2rem',
                backgroundColor: '#1A1B1E',
                borderRadius: '0 4px 4px 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}>
                <Title 
                  order={2}
                  sx={{ 
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 500,
                  }}
                >
                  {selectedProject.title}
                </Title>
                
                <Text 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.6,
                    fontSize: '1rem',
                  }}
                >
                  {selectedProject.description}
                </Text>
              </Box>
            </Grid.Col>
          </Grid>
        )}
      </Modal>
    </Container>
  );
}
