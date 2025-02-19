import React, { useState } from 'react';
import { Box, Paper, Title, Text, Group, Stack, Collapse, Grid } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Target, Heart, Check, Users, Star, Lightbulb } from 'lucide-react';

const CoreValue = ({ title, description, icon: Icon }) => (
  <Box mb="sm">
    <Group spacing="sm">
      <Icon size={20} color="#2563eb" />
      <Text weight={700} size="sm">{title}</Text>
    </Group>
    <Text size="sm" color="gray.7" ml={28}>{description}</Text>
  </Box>
);

const Section = ({ icon: Icon, title, content, isExpanded, onClick, color }) => (
  <motion.div
    layout
    style={{ 
      width: isExpanded ? '90%' : '5%',
      transition: 'width 0.3s ease'
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
        overflow: 'hidden'
      }}
    >
      <Group position="left" spacing="xs" noWrap>
        <Icon size={24} color="white" />
        <Title order={3} color="white" style={{ 
          writingMode: isExpanded ? 'horizontal-tb' : 'vertical-rl',
          transform: isExpanded ? 'none' : 'rotate(180deg)',
          transition: 'all 0.3s ease'
        }}>
          {title}
        </Title>
      </Group>

      <Collapse in={isExpanded}>
        <Text color="white" mt="md" mb="xl">{content}</Text>
        
        {title === 'Our Core Values' && (
          <Grid gutter="md">
            <Grid.Col span={6}>
              <Stack>
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
            
            <Grid.Col span={6}>
              <Stack>
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

const BJMMissionValues = () => {
  const [expanded, setExpanded] = useState(null);

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
        <Title order={1} align="center" mb="xl">Our Vision, Mission & Core Values</Title>
        <Group 
          wrap="nowrap" 
          spacing="md" 
          align="stretch" 
          h={expanded === null}
          position="center"
          style={{
            width: '100%',
            justifyContent: 'center'
          }}
        >
          {sections.map((section, index) => (
            <Section
              key={section.title}
              {...section}
              isExpanded={expanded === index}
              onClick={() => setExpanded(expanded === index ? null : index)}
            />
          ))}
        </Group>
      </Box>
    </Box>
  );
};

export default BJMMissionValues;