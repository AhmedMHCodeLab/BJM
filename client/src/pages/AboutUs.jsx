import React from 'react'
import ProfileCards from '../components/AboutUs/ProfileCards';
import { SectionTitle } from '../components'
import MGV from '../components/AboutUs/MGV';
import BJMMissionValues from '../components/AboutUs/MVO';

const AboutUs = () => {
  return (
    <div style={{ padding: '2rem' }}>
      
      <div  style={{ textAlign: 'center' }}>
        <SectionTitle title="Our Team" />
      <ProfileCards/>
      </div>
      <BJMMissionValues/>
      <div>
      <MGV/>
      </div>
      
    </div>
  );
};
export default AboutUs
