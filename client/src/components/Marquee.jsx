import React, { useState } from 'react';
import { Box, Flex, Title } from '@mantine/core';
import { motion } from 'framer-motion';
import styles from './clients.module.css';

const MarqueeFrame = ({ items, reverse, duration, gap, isHovered }) => {
  const animationDuration = isHovered ? duration * 2 : duration;

  return (
    <Flex
      gap={gap}
      component={motion.div}
      initial={{ x: !reverse ? 0 : '-100%' }}
      animate={{ x: !reverse ? '-100%' : 0 }}
      transition={{ 
        duration: animationDuration, 
        repeat: Infinity, 
        ease: 'linear',
        repeatType: "loop"
      }}
      style={{ 
        flexShrink: 0,
        willChange: 'transform' 
      }}
    >
      {items.map((item, index) => (
        <Flex 
          key={index} 
          mr={gap} 
          ml={index === 0 ? gap : 0}
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        >
          {item}
        </Flex>
      ))}
    </Flex>
  );
};

const Marquee = ({
  items,
  reverse = false,
  duration = 20,
  gap = 'md',
  showGradient = true,
  ...boxProps
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box style={{ marginTop: '20vh' }}>
      <Title className={styles.clientsTitle}>
        Services We Offer
      </Title>
      
      <Box
        style={{
          overflowX: 'hidden',
          marginTop: '2rem'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...boxProps}
      >
        <Flex
          style={{
            maskImage: showGradient
              ? 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))'
              : undefined,
            WebkitMaskImage: showGradient
              ? 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))'
              : undefined
          }}
        >
          <MarqueeFrame 
            items={items} 
            reverse={reverse} 
            duration={duration} 
            gap={gap}
            isHovered={isHovered}
          />
          <MarqueeFrame 
            items={items} 
            reverse={reverse} 
            duration={duration} 
            gap={gap}
            isHovered={isHovered}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Marquee;