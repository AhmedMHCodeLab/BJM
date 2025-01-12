import React from 'react';
import HeroSection from "../components/Homepage/HeroSection";
import Marquee from '../components/Homepage/Marquee';  // Import Marquee component
import img1 from '../assets/images/marquee/1.svg';
import img2 from '../assets/images/marquee/2.svg';
import img3 from '../assets/images/marquee/3.svg';
import img4 from '../assets/images/marquee/4.svg';
import img5 from '../assets/images/marquee/5.svg';
import img6 from '../assets/images/marquee/6.svg';
import img7 from '../assets/images/marquee/7.svg';
import img8 from '../assets/images/marquee/8.svg';
import Cards from "../components/Homepage/Cards";
import { Box, Flex, Title } from '@mantine/core';
import  HomeService from '../components/Homepage/HomeService';
import Testmonial from '../components/Homepage/Testominal.jsx';



const items = [
  <img src={img1} alt="Brand 1"  />,
  <img src={img2} alt="Brand 2"  />,
  <img src={img3} alt="Brand 3"  />,
  <img src={img4} alt="Brand 4"  />,
  <img src={img5} alt="Brand 5"  />,
  <img src={img6} alt="Brand 6"  />,
  <img src={img7} alt="Brand 7"  />,
  <img src={img8} alt="Brand 8"  />,
];

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Marquee items={items} duration={25} gap="lg" showGradient={true} />
      <HomeService />
      <Title order={2} align="center" mb={40}>
        What Our Clients Say
      </Title>
      <Testmonial />
      
    </div>
  );
};

export default Landing;
