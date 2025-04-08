import React, { useState, useEffect } from 'react';
import { Box, Paper, Title, Text, Group, Stack, Collapse, Grid } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Target, Heart, Check, Users, Star, Lightbulb } from 'lucide-react';

// Custom hook for responsive design
const useViewportSize = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return { width, isMobile: width < 768 };
};

const CoreValue = ({ title, description, icon: Icon }) => (
  <Box mb="sm">
    <Group spacing="sm" noWrap align="flex-start">
      <Box pt={2}>
        <Icon size={20} color="#2563eb" />
      </Box>
      <Box>
        <Text weight={700} size="sm">{title}</Text>
        <Text size="sm" color="gray.7">{description}</Text>
      </Box>
    </Group>
  </Box>
);

const Section = ({ icon: Icon, title, content, isExpanded, onClick, color, isMobile }) => {
  // Optimized for both desktop and mobile view
  return (
    <motion.div
      layout
      style={{ 
        width: isExpanded ? '90%' : isMobile ? '100%' : '30%',
        maxWidth: isExpanded ? '90%' : '150px',
        minWidth: isMobile ? '100%' : '80px',
        transition: 'width 0.3s ease',
        marginBottom: isMobile ? '10px' : '0'
      }}
    >
      <Paper
        p="md"
        onClick={onClick}
        style={{
          height: '100%',
          cursor: 'pointer',
          backgroundColor: color,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Group position="left" spacing="md" noWrap>
          <Icon size={24} color="white" />
          <Title 
            order={3} 
            color="white" 
            style={{ 
              writingMode: isExpanded || isMobile ? 'horizontal-tb' : 'vertical-rl',
              transform: isExpanded || isMobile ? 'none' : 'rotate(180deg)',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              fontSize: isMobile ? '16px' : '24px'
            }}
          >
            {title}
          </Title>
        </Group>

        <Collapse in={isExpanded}>
          <Text c="white" mt="md" mb="xl" style={{ whiteSpace: 'normal' }}>{content}</Text>
          
          {title === 'Our Core Values' && (
            <Grid gutter="md">
              <Grid.Col xs={12} sm={6}>
                <Stack spacing="lg">
                  <CoreValue
                    title="INTEGRITY"
                    description="We are committed to conducting business with honesty, fairness and high ethical standards"
                    icon={Heart}
                  />
                  <CoreValue
                    title="EXCELLENCE"
                    description="We strive to deliver exceptional quality in all our services"
                    icon={Star}
                  />
                  <CoreValue
                    title="COLLABORATION"
                    description="We believe in working together as a team and with our clients"
                    icon={Users}
                  />
                </Stack>
              </Grid.Col>
              
              <Grid.Col xs={12} sm={6}>
                <Stack spacing="lg">
                  <CoreValue
                    title="PROFESSIONALISM"
                    description="We maintain high standards of professionalism in all our interactions"
                    icon={Check}
                  />
                  <CoreValue
                    title="INNOVATION"
                    description="We constantly seek new and better ways to serve our clients"
                    icon={Lightbulb}
                  />
                  <CoreValue
                    title="CLIENT FOCUS"
                    description="We put our clients' needs first and strive to exceed their expectations"
                    icon={Target}
                  />
                </Stack>
              </Grid.Col>
            </Grid>
          )}
        </Collapse>
      </Paper>
    </motion.div>
  );
};

const BJMMissionValues = () => {
  const [expanded, setExpanded] = useState(null);
  const { isMobile } = useViewportSize();

  const sections = [
    {
      title: 'Our Vision',
      icon: Eye,
      content: 'To be recognized as a valued, an impactful, innovative and efficient Management Consulting Partner to our clients in Africa.',
      color: '#2563eb'
    },
    {
      title: 'Our Mission',
      icon: Target,
      content: 'Our mission is to make available to Private Sector, not-for profit and Public Sector innovative solutions, value added services and expertise, enabling them to achieve their long-term financial, economic and sustainability vision.',
      color: '#3b82f6'
    },
    {
      title: 'Our Core Values',
      icon: Heart,
      content: 'The building blocks of BJM Management Consultancy Company Ltd is a set of values. They guide us in our client engagement and delivery.',
      color: '#60a5fa'
    }
  ];

  return (
    <Box p="xl" style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '10vh',
      width: '100%'
    }}>
      <Box style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {/* Responsive title */}
        <Title 
          order={1} 
          align="center" 
          mb="xl"
          style={{
            fontSize: isMobile ? '28px' : '36px'
          }}
        >
          Our Vision, Mission & Core Values
        </Title>

        {/* Responsive container for the sections */}
        <Box
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '1rem',
            alignItems: 'stretch',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          {sections.map((section, index) => (
            <Section
              key={section.title}
              {...section}
              isExpanded={expanded === index}
              onClick={() => setExpanded(expanded === index ? null : index)}
              isMobile={isMobile}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BJMMissionValues;