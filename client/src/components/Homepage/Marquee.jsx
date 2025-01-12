import React, { useState } from 'react';
import { Box, Flex, Title } from '@mantine/core';
import { motion } from 'framer-motion';
import { SectionTitle } from '..';
import styles from './Marquee.module.css';

const MarqueeFrame = ({ items, reverse, duration, gap, isHovered }) => {
  const animationDuration = isHovered ? duration * 2 : duration;
  
  return (
    <div style={{ display: 'flex', width: 'fit-content' }}>
      {[...Array(2)].map((_, containerIndex) => (
        <Flex
          key={containerIndex}
          gap={gap}
          component={motion.div}
          animate={{
            x: reverse ? [0, '100%'] : [0, '-100%']
          }}
          initial={{
            x: 0
          }}
          transition={{
            duration: animationDuration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          style={{ 
            flexShrink: 0,
            willChange: 'transform',
          }}
        >
          {items.map((item, index) => (
            <Flex 
              key={`${containerIndex}-${index}`}
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
      ))}
    </div>
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
  const [isHovered] = useState(false);
  return (
    <Box ta="center" style={{  marginTop: '30vh', marginBottom: '0vh' }}>
      <div style={{textAlign: 'center'}}>
        <SectionTitle  title="Trusted By Many" />
       </div>
      
      <Box
        style={{
          overflow: 'hidden',
          position: 'relative',
          height: '60vh',
        }}>
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
         
        </Flex>
      </Box>
    </Box>
  );
};

export default Marquee;