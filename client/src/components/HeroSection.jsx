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
          Discover the Power of <span className="highlight">True Consultancy</span>
        </Title>
        <Text className="hero-description" size="lg" align="center" mt="sm">
          Explore cutting-edge design solutions that transform the way you build web applications
        </Text>
      </Container>

    </div>
  );
};

export default Hero;
