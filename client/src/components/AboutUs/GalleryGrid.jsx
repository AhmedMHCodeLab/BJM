import React, { useState } from 'react';
import { Container, Text, Paper, Title, Modal, Image, Box } from '@mantine/core';

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
        overflow: 'hidden',
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
          transition: 'filter 0.5s ease',
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
          <Text size="sm" color="white">Know More</Text>
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

      {/* Modal for displaying project details */}
      <Modal
        opened={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        centered
        size="lg"
        overlayBlur={2}
        radius="md"
        withCloseButton={true}
        styles={{
          modal: { backgroundColor: '#1A1B1E', color: 'white' },
        }}
      >
        {selectedProject && (
          <>
            <Image 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              fit="contain" 
              radius="md" 
              mb="md" 
            />
            <Title order={2} size="h3" align="center">{selectedProject.title}</Title>
            <Text size="sm" align="center" mt="sm" color="dimmed">{selectedProject.description}</Text>
          </>
        )}
      </Modal>

      {/* Grid Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '1rem',
        gridAutoFlow: 'dense',
      }}>
        {projects.map(project => (
          <div 
            key={project.id}
            style={{
              gridColumn: project.size === 'large' ? 'span 2' : 'span 1',
              gridRow: project.size === 'large' ? 'span 2' : 'span 1',
            }}
          >
            <ProjectCard 
              project={project} 
              onClick={setSelectedProject} 
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
