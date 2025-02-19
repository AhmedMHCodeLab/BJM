import { useEffect, useState } from 'react';
import { Card, Text, Button, Center, Stack, Badge, Box, rem, Group, Paper } from '@mantine/core';
import { IconChevronLeft, IconChevronRight, IconQuote } from '@tabler/icons-react';
import { useInterval } from '@mantine/hooks';
import React from 'react';
import styles from './TestimonialCarousel.module.css';
import cardStyles from './TestimonialCarousel.module.css';


export const testimonials = [
  {
    logo: "UNDP",
    company: "United Nations Development Programme, The Gambia",
    testimonial:
      "Thank you for the timely submission of the final outcome independent evaluation for the UNDP Governance Programme. It was a pleasure working with you and the BJM team. We wish you success in future endeavors.",
  },
  {
    logo: "AGM",
    company: "Association of Gambian Manufacturers",
    testimonial:
      "We are delighted and grateful for the wonderful work you and your firm BJM have done. AGM has stepped into a new era of institutional transformational changes, which will soon reflect in our sector activities.",
  },
  {
    logo: "MOFEA",
    company: "Ministry of Finance and Economic Affairs, The Gambia",
    testimonial:
      "Your keen expertise as a member of the PURA Independent Fact-Finding Panel brought significant insights. The high-quality report and professionalism exceeded expectations.",
  },
  {
    logo: "Team EbA",
    company: "Large-Scale Ecosystem-Based Adaptation Project, The Gambia",
    testimonial:
      "Team EbA is grateful for a well-crafted and delivered policy for the Department of Community Development. Thank you.",
  },
  {
    logo: "AfriCAN",
    company: "Africa Catalyzing Action for Nutrition",
    testimonial:
      "Thank you so much for the Strategic Plan. It was well-received and much appreciated.",
  },
  {
    logo: "SSHFC",
    company: "Social Security and Housing Finance Corporation, The Gambia",
    testimonial:
      "The World Bank was very pleased with the Strategic Plan you produced for the Corporation. They even requested your contact details, which I will forward.",
  },
  {
    logo: "ILO",
    company: "International Labour Organization",
    testimonial:
      "Your swift input added significant value to the quality of the manual. Thank you for your contribution.",
  },
  {
    logo: "ADWAC",
    company: "ADWAC, AVISU, HePDO, Caritas Gambia",
    testimonial:
      "Thank you for your unwavering support in producing the Financial Management Manual, Human Resources Management Manual, and Strategic Plan 2025-2029.",
  },
  {
    logo: "AfricaRice",
    company: "AfricaRice",
    testimonial:
      "The revised version of the report captures my comments very well and will aid the restructuring of the organogram and improve management.",
  },
  {
    logo: "GIEPA",
    company: "Gambia Investment, Export Promotion Agency",
    testimonial:
      "This is a great opportunity to ensure the implementation of the Strategic Plan, which has the potential to transform The Gambia. Your professionalism is impressive.",
  },
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState('next');

  const interval = useInterval(() => {
    if (!isHovered) {
      handleNext();
    }
  }, 5000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  const handleNext = () => {
    setDirection('next');
    setCurrentIndex((current) => (current + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Box 
      maw={900} 
      mx="auto" 
      pos="relative"
      py={rem(30)}
      px={rem(20)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box pos="relative" h={rem(400)}>
        {/* Navigation buttons */}
        <Group style={{ position: 'absolute', top: '50%', width: '100%', transform: 'translateY(-50%)', zIndex: 3, justifyContent: 'space-between' }}>
          <Button
            variant="light"
            radius="xl"
            size="md"
            onClick={handlePrev}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              transform: 'translateX(-50%)'
            }}
          >
            <IconChevronLeft size={20} />
          </Button>

          <Button
            variant="light"
            radius="xl"
            size="md"
            onClick={handleNext}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              transform: 'translateX(50%)'
            }}
          >
            <IconChevronRight size={20} />
          </Button>
        </Group>

        {/* Main card */}
        <Card
          key={currentIndex} // Add this to force remount
          shadow="sm"
          padding={rem(40)}
          radius="lg"
          className={cardStyles.card} // Apply the glassmorphism style
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            background: 'linear-gradient(90deg, #bcb8f5 0%, #b1cbfa 100%)',
            animation: `${direction === 'next' ? 'slideFromRight' : 'slideFromLeft'} 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)`
          }}
        >
          <Stack gap="xl">
            <Center>
              <IconQuote 
                size={40} 
                style={{ 
                  opacity: .70,
                  color: 'rgb(255, 255, 255)',
                }}
              />
            </Center>

            <Text size="xl" c='rgb(99, 97, 97)' ta="center" lh={1.6}>
              {testimonials[currentIndex].testimonial}
            </Text>

            <Stack gap="xs" align="center">
              <Badge 
                size="lg" 
                radius="xl" 
                style={{
                  background: 'rgba(85, 70, 216, 0.56)',
                  color: 'white',
                }}
                
              >
                {testimonials[currentIndex].logo}
              </Badge>
              <Text size="md" c="white" ta="center" w="80%">
                {testimonials[currentIndex].company}
              </Text>
            </Stack>
          </Stack>
        </Card>
      </Box>

      <style>
        {`
          @keyframes slideFromRight {
            0% {
              transform: translate(50%, -50%);
              opacity: 0;
            }
            100% {
              transform: translate(-50%, -50%);
              opacity: 1;
            }
          }

          @keyframes slideFromLeft {
            0% {
              transform: translate(-150%, -50%);
              opacity: 0;
            }
            100% {
              transform: translate(-50%, -50%);
              opacity: 1;
            }
          }
        `}
      </style>
    </Box>
  );
}

export default TestimonialCarousel;