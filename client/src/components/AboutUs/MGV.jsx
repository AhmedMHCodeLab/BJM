import { Box, Container, Grid, Group, Stack, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatBox = ({ value, label }) => {
  const isSmallMobile = useMediaQuery('(max-width: 375px)');
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  
  // Parse the numeric value from the string
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(numericValue, '');
  
  return (
    <Box ref={ref} sx={{ textAlign: 'center' }}>
      <Text 
        size={isSmallMobile ? '1.2rem' : isMobile ? '1.5rem' : '2rem'}
        fw={600} 
        c="#6B6BFF"
        mb={4}
      >
        {inView ? (
          <CountUp
            end={numericValue}
            duration={2.5}
            separator=","
            decimals={value.includes('.') ? 1 : 0}
            suffix={suffix}
          />
        ) : '0'}
      </Text>
      <Text size={isSmallMobile ? 'xs' : 'sm'} c="dimmed">
        {label}
      </Text>
    </Box>
  );
};

const MGV = () => {
  const isSmallMobile = useMediaQuery('(max-width: 375px)');
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <Container size="lg" py={isMobile ? 30 : 50}>
      <Text 
        c="#6B6BFF" 
        tt="uppercase" 
        fw={500} 
        mb={15}
        size="sm"
      >
        WHO WE ARE
      </Text>

      <Grid gutter={isMobile ? 30 : 50}>
        <Grid.Col span={12}>
          <Group 
            position={isMobile ? "start" : "apart"} 
            align="flex-start"
            spacing={isMobile ? "xl" : "md"}
            sx={{ flexDirection: isMobile ? 'column' : 'row' }}
          >
            <Box maw={isMobile ? "100%" : 550}>
              <Title
                order={1}
                sx={{
                  fontSize: isMobile ? '2rem' : '2.5rem',
                  fontWeight: 600,
                  lineHeight: 1.2,
                  marginBottom: '1rem'
                }}
              >
                Making Life Smoother and Easier Every Day
              </Title>
            </Box>
            <Box maw={isMobile ? "100%" : 550}>
              <Text c="dimmed" size="md" lh={1.6}>
                We are dedicated to making life smoother and easier every day with practical 
                and user-friendly solutions. Our focus is on simplifying your daily routines and 
                enhancing your overall convenience. Experience seamless solutions designed 
                to fit effortlessly into your lifestyle.
              </Text>
            </Box>
          </Group>
        </Grid.Col>

        <Grid.Col span={isMobile ? 12 : 6}>
          <Box
            sx={{
              height: isMobile ? 300 : 400,
              borderRadius: 8,
              overflow: 'hidden',
              position: 'relative',
              background: '#f8f9fa'
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'white',
                padding: '2rem',
                borderRadius: '8px'
              }}
            >
              <Title order={3} mb="xs">Our Vision</Title>
              <Text c="dimmed" size="md" lh={1.6}>
                To be the leading innovator, transforming industries with cutting-edge 
                solutions that improve lives.
              </Text>
            </Box>
            <Box 
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '60%',
                background: 'url(/api/placeholder/800/600) center/cover'
              }}
            />
          </Box>
        </Grid.Col>

        <Grid.Col span={isMobile ? 12 : 6}>
          <Box
            sx={{
              height: isMobile ? 300 : 400,
              borderRadius: 8,
              overflow: 'hidden',
              position: 'relative',
              background: '#f8f9fa'
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'white',
                padding: '2rem',
                borderRadius: '8px'
              }}
            >
              <Title order={3} mb="xs">Our Goal</Title>
              <Text c="dimmed" size="md" lh={1.6}>
                To consistently deliver exceptional value and achieve excellence in 
                every project we undertake.
              </Text>
            </Box>
            <Box 
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '60%',
                background: 'url(/api/placeholder/800/600) center/cover'
              }}
            />
          </Box>
        </Grid.Col>

        <Grid.Col span={12} mt={isMobile ? 10 : 20}>
          <Grid gutter={isSmallMobile ? 'xs' : 'md'}>
            <Grid.Col span={isMobile ? 6 : 3}>
              <StatBox value="92%" label="Happy Clients" />
            </Grid.Col>
            <Grid.Col span={isMobile ? 6 : 3}>
              <StatBox value="24" label="Year of Experience" />
            </Grid.Col>
            <Grid.Col span={isMobile ? 6 : 3}>
              <StatBox value="14.2k+" label="Completed Project" />
            </Grid.Col>
            <Grid.Col span={isMobile ? 6 : 3}>
              <StatBox value="12+" label="Awards Won" />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default MGV;