import React from 'react';
import { Container, Title, Text } from '@mantine/core';
import './Hero.css';

const Hero = () => {
  return (
    <div size className="hero-section">
      {/* SVG Background */}
      <div className="hero-background"></div>

      {/* Content */}
      <Container size="lg" className="hero-content">
        <Title className="hero-title" align="center">
           Strategic Solutions <span className="highlight">Tailored For You</span>
        </Title>
        <Text className="hero-description" size="xl" align="center" mt="sm" style={{ color: '#476f95' }}>
          Navigate Complexity with Confidence
        </Text>
      </Container>

    </div>
  );
};

export default Hero;
