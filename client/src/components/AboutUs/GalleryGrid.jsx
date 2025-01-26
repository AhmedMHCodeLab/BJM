import React, { useState } from 'react';
import {
  Container,
  Text,
  Paper,
  Title,
  Modal,
  Image,
  Box,
  Grid,
  useMantineTheme,
} from '@mantine/core';

const projects = [
  {
    id: 1,
    title: 'BREATHE',
    size: 'large',
    description: 'A contemplative drama exploring themes of isolation and renewal.',
    image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM2-1024x683.jpg',
  },
  {
    id: 2,
    title: 'THE LOST CITY',
    size: 'small',
    description: 'An action-adventure film about a daring archaeologist.',
    image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM2-1024x683.jpg',
  },
  {
    id: 3,
    title: 'THE LAST STAND',
    size: 'small',
    description: 'A post-apocalyptic thriller set in a barren wasteland.',
    image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM2-1024x683.jpg',
  },
  {
    id: 4,
    title: 'THE WILDERNESS',
    size: 'large',
    description: 'A nature documentary exploring the beauty of the great outdoors.',
    image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM2-1024x683.jpg',
  },
  {
    id: 5,
    title: 'THE JOURNEY',
    size: 'large',
    description: 'A coming-of-age story.',
    image: 'https://via.placeholder.com/200x200?text=THE+JOURNEY',
  },
  {
    id: 6,
    title: 'THE QUEST',
    size: 'small',
    description: 'An epic fantasy adventure.',
    image: 'https://via.placeholder.com/200x200?text=THE+QUEST',
  },
];

const ProjectCard = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
    const theme = useMantineTheme();


    const cardStyle = {
      backgroundColor: isHovered ? theme.colors.dark[6] : theme.colors.dark[7],
      height: project.size === 'large' ? 450 : 300,
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.md,
    };

    const imageStyle = {
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      filter: isHovered ? 'brightness(0.7)' : 'brightness(1)',
      transition: 'filter 0.3s ease',
    };

    const hoverBoxStyle = {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
      transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
      transition: 'transform 0.2s ease',
      zIndex: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };


  return (
    <Paper
      p="md"
      onClick={() => onClick(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={cardStyle}
    >
      <Image
        src={project.image}
        alt={project.title}
        height="100%"
        width="100%"
        style={imageStyle}
      />

      {isHovered && (
        <Box style={hoverBoxStyle}>
          <Text size="sm" color="white" weight={500}>
            Know More
          </Text>
        </Box>
      )}
    </Paper>
  );
};

export default function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState(null);
    const theme = useMantineTheme();


  return (
    <Container
      fluid
      style={{
        backgroundColor: theme.colors.dark[8],
        color: theme.colors.gray[0],
        padding: '2rem',
          maxWidth: '1800px'
      }}
    >
      <Title order={1} size="h1" align="center" mb="sm">
        MOMENTS WE SHARED
      </Title>
      <Text size="lg" align="center" color="gray.4" mb="xl">
        Captured Times
      </Text>

      <Modal
        opened={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        centered
        size="lg"
        overlayBlur={2}
        radius="md"
        withCloseButton={true}
        styles={{
          modal: { backgroundColor: theme.colors.dark[7], color: theme.colors.gray[0] },
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
            <Title order={2} size="h3" align="center">
              {selectedProject.title}
            </Title>
            <Text size="sm" align="center" mt="sm" color="gray.4">
              {selectedProject.description}
            </Text>
          </>
        )}
      </Modal>


        <Grid gutter="md" >
          {projects.map((project) => (
            <Grid.Col
              key={project.id}
              span={{ base: 12, sm: project.size === 'large' ? 12: 6, md: project.size === 'large' ? 8 : 4, lg: project.size === 'large' ? 6: 3 }}
            >
              <ProjectCard project={project} onClick={setSelectedProject} />
            </Grid.Col>
          ))}
        </Grid>
    </Container>
  );
}