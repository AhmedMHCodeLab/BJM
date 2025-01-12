// GalleryHero.jsx
import React, { useState, useEffect } from 'react';
import { Box, Container, Text } from '@mantine/core';
import styles from './GalleryHero.module.css';
import { Scale } from 'lucide-react';

const galleryData = [
  {
    id: 1,
    title: 'Gambia ',
    subtitle: 'Breakfast & Networking',
    location: 'Gambia',
    image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM51-1024x683.jpg',
  },
  {
    id: 2,
    title: 'Swiss Alps - Switzerland',
    subtitle: 'Experience breathtaking views',
    location: 'Gambia',
    image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM3.jpg',
  },
  {
    id: 3,
    title: 'Bali - Indonesia',
    subtitle: 'Paradise on Earth awaits',
    location: 'Gambia',
    image: 'https://scontent.fkul8-5.fna.fbcdn.net/v/t39.30808-6/305238122_572580524451636_4026373282440208838_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fHLs5oRTfToQ7kNvgF8uulm&_nc_zt=23&_nc_ht=scontent.fkul8-5.fna&_nc_gid=A4H4fMJJR2d97p0xXQ4Q23D&oh=00_AYAHACxF6HJxs6uNLEpW63dLiDYI2UbQ-kbAIvoEIsG-2A&oe=677D8459',
  },
  {
    id: 4,
    title: 'Norwegian Fjords',
    subtitle: 'Nature at its finest',
    location: 'Gambia',
    image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM53.jpg',
  },
  {
    id: 5,
    title: 'Great Barrier Reef',
    subtitle: 'Underwater wonders',
    location: 'Gambia',
    image: 'https://bjmafrica.com/wp-content/uploads/2023/09/BJM6-2-1024x683.jpg',
  },
];

export default function GalleryHero() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Auto scroll effect
  useEffect(() => {
    let intervalId;
    
    if (isAutoScrolling) {
      intervalId = setInterval(() => {
        handleNext();
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoScrolling, activeIndex]);

  // Pause auto-scroll on user interaction
  const handleUserInteraction = () => {
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 1000);
  };

  // Update existing handlers to include user interaction
  const handlePrevious = () => {
    if (isTransitioning) return;
    handleUserInteraction();
    setIsTransitioning(true);
    setActiveIndex((current) => (current === 0 ? galleryData.length - 1 : current - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((current) => (current === galleryData.length - 1 ? 0 : current + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (isTransitioning) return;

      switch (event.key) {
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          handleUserInteraction();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isTransitioning]);

  const calculatePosition = (index) => {
    const position = index - activeIndex;
    const total = galleryData.length;
    
    // Create loop effect by adjusting position
    if (position > total / 2) return position - total;
    if (position < -total / 2) return position + total;
    return position;
  };

  const getResponsiveSpacing = () => {
    if (window.innerWidth <= 480) return 90;
    if (window.innerWidth <= 768) return 85;
    return 80;
  };

  return (
    <Box 
      className={styles.heroContainer}
      onMouseEnter={() => setIsAutoScrolling(false)}
      onMouseLeave={() => setIsAutoScrolling(true)}
    >
      {/* Layer 1: Dynamic Background */}
      <div className={styles.background}>
        <img 
          src={galleryData[activeIndex].image} 
          alt="background" 
          className={styles.backgroundImage}
        />
        <div className={styles.overlay} />
      </div>

      {/* Carousel Layer */}
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {galleryData.map((item, index) => {
            const position = calculatePosition(index);
            const translateX = position * getResponsiveSpacing(); // Dynamic spacing based on screen size
            
            return (
              <div
                key={item.id}
                className={`${styles.card} ${index === activeIndex ? styles.activeCard : ''} ${isTransitioning ? styles.transitioning : ''}`}
                style={{
                  transform: `translateX(${translateX}%) scale(${index === activeIndex ? 1 : 0.7})`,
                  zIndex: index === activeIndex ? 5 : 1,
                  opacity: index === activeIndex ? 1 : 0.65, // Reduced opacity for inactive cards
                }}
                onClick={() => !isTransitioning && setActiveIndex(index)}
                tabIndex={0}
              >
                <img src={item.image} alt={item.title} />
                <div className={styles.locationTag}>{item.location}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Layer 3: Hero Text */}
      <div className={styles.heroText}>
        <Text component="h1" className={styles.title}>
          {galleryData[activeIndex].title}
        </Text>
        <Text className={styles.subtitle}>
          {galleryData[activeIndex].subtitle}
        </Text>
      </div>
    </Box>
  );
}