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
  Tabs,
  useMantineTheme,
} from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

// Organize projects into folders/categories
const galleries = {
  events: {
    title: "Corporate Events",
    items: [
      {
        id: 1,
        title: 'Business Conference 2023',
        size: 'large',
        description: 'Annual business strategy conference with industry leaders.',
        image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM2-1024x683.jpg',
      },
      {
        id: 2,
        title: 'Leadership Summit',
        size: 'small',
        description: 'Executive leadership development program.',
        image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM3-1024x683.jpg',
      },
      {
        id: 3,
        title: 'Strategy Session',
        size: 'large',
        description: 'Strategic planning and team alignment.',
        image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM4-1024x683.jpg',
      },
      {
        id: 10,
        title: 'Leadership Forum 2023',
        size: 'large',
        description: 'Executive leadership forum focusing on strategic growth.',
        image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM8-1024x683.jpg',
      },
      {
        id: 11,
        title: 'Innovation Summit',
        size: 'small',
        description: 'Summit focused on business innovation and digital transformation.',
        image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM9-1024x683.jpg',
      },
      {
        id: 12,
        title: 'Annual Gala',
        size: 'large',
        description: 'Celebrating achievements and partnerships.',
        image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM10-1024x683.jpg',
      },
      {
        id: 13,
        title: 'Industry Networking',
        size: 'small',
        description: 'Professional networking event for industry leaders.',
        image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM11-1024x683.jpg',
      }
    ]
  },
  workshops: {
    title: "Training Workshops",
    items: [
      {
        id: 4,
        title: 'Management Workshop',
        size: 'large',
        description: 'Professional development workshop for managers.',
        image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM5-1-1024x683.jpg',
      },
      {
        id: 5,
        title: 'Team Building',
        size: 'small',
        description: 'Interactive team building activities.',
        image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM6-2-1024x683.jpg',
      },
      {
        id: 6,
        title: 'Leadership Development',
        size: 'large',
        description: 'Executive leadership training program.',
        image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM7-1-1024x683.jpg',
      },
      {
        id: 14,
        title: 'Digital Skills Workshop',
        size: 'large',
        description: 'Advanced digital skills training for professionals.',
        image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM12-1024x683.jpg',
      },
      {
        id: 15,
        title: 'Project Management',
        size: 'small',
        description: 'Professional project management certification workshop.',
        image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM13-1024x683.jpg',
      },
      {
        id: 16,
        title: 'Financial Planning',
        size: 'large',
        description: 'Strategic financial planning and analysis workshop.',
        image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM14-1024x683.jpg',
      },
      {
        id: 17,
        title: 'HR Development',
        size: 'small',
        description: 'Human resources management and development training.',
        image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM15-1024x683.jpg',
      },
      {
        id: 18,
        title: 'Marketing Strategy',
        size: 'large',
        description: 'Digital marketing and brand strategy workshop.',
        image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM16-1024x683.jpg',
      }
    ]
  },
  consulting: {
    title: "Consulting Projects",
    items: [
      {
        id: 7,
        title: 'Strategic Planning',
        size: 'large',
        description: 'Strategic planning sessions with clients.',
        image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM50-1024x683.jpg',
      },
      {
        id: 8,
        title: 'Business Advisory',
        size: 'small',
        description: 'Business advisory meetings and consultations.',
        image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM51-1024x683.jpg',
      },
      {
        id: 9,
        title: 'Client Workshop',
        size: 'large',
        description: 'Interactive workshop with key stakeholders.',
        image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM52-1024x683.jpg',
      },
      {
        id: 19,
        title: 'Digital Transformation',
        size: 'large',
        description: 'Enterprise digital transformation consulting project.',
        image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM17-1024x683.jpg',
      },
      {
        id: 20,
        title: 'Process Optimization',
        size: 'small',
        description: 'Business process reengineering and optimization.',
        image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM18-1024x683.jpg',
      },
      {
        id: 21,
        title: 'Change Management',
        size: 'large',
        description: 'Organizational change management consulting.',
        image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM19-1024x683.jpg',
      },
      {
        id: 22,
        title: 'Market Research',
        size: 'small',
        description: 'Comprehensive market analysis and research project.',
        image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM20-1024x683.jpg',
      }
    ]
  }
};

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
  const [activeTab, setActiveTab] = useState('events');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const theme = useMantineTheme();

  const handleNavigate = (direction) => {
    const currentItems = galleries[activeTab].items;
    const currentIndex = currentItems.findIndex(item => item.id === selectedProject.id);
    
    if (direction === 'next' && currentIndex < currentItems.length - 1) {
      setSelectedProject(currentItems[currentIndex + 1]);
    } else if (direction === 'prev' && currentIndex > 0) {
      setSelectedProject(currentItems[currentIndex - 1]);
    }
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: theme.colors.dark[8],
        color: theme.colors.gray[0],
        padding: '2rem',
        maxWidth: '100vw'
      }}
    >
      <Title order={1} size="h1" align="center" mb="sm">
        MOMENTS WE SHARED
      </Title>
      <Text size="lg" align="center" color="gray.4" mb="xl">
        Captured Times
      </Text>

      <Tabs 
        value={activeTab} 
        onChange={setActiveTab}
        variant="pills"
        radius="md"
        mb="xl"
      >
        <Tabs.List position="center">
          {Object.entries(galleries).map(([key, gallery]) => (
            <Tabs.Tab 
              key={key} 
              value={key}
              style={{
                color: activeTab === key ? theme.white : theme.colors.gray[4],
                backgroundColor: activeTab === key ? theme.colors.blue[7] : 'transparent'
              }}
            >
              {gallery.title}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>

      <Modal
        opened={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        centered
        size="xl"
        overlayBlur={2}
        radius="md"
        withCloseButton={true}
        styles={{
          modal: { 
            backgroundColor: theme.colors.dark[7], 
            color: theme.colors.gray[0],
            position: 'relative'
          },
        }}
      >
        {selectedProject && (
          <Box style={{ position: 'relative' }}>
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              fit="contain"
              radius="md"
              mb="md"
              style={{ maxHeight: '70vh' }}
            />
            
            <Box style={{ 
              position: 'absolute', 
              top: '50%', 
              left: 0, 
              right: 0, 
              display: 'flex', 
              justifyContent: 'space-between', 
              padding: '0 1rem',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
            }}>
              <IconChevronLeft
                size={32}
                color="white"
                style={{ 
                  cursor: 'pointer',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  borderRadius: '50%',
                  padding: '5px',
                  pointerEvents: 'auto',
                }}
                onClick={() => handleNavigate('prev')}
              />
              <IconChevronRight
                size={32}
                color="white"
                style={{ 
                  cursor: 'pointer',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  borderRadius: '50%',
                  padding: '5px',
                  pointerEvents: 'auto',
                }}
                onClick={() => handleNavigate('next')}
              />
            </Box>

            <Title order={2} size="h3" align="center" mt="md">
              {selectedProject.title}
            </Title>
            <Text size="sm" align="center" mt="sm" color="gray.4">
              {selectedProject.description}
            </Text>
          </Box>
        )}
      </Modal>

      <Grid gutter="md">
        {galleries[activeTab].items.map((project) => (
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