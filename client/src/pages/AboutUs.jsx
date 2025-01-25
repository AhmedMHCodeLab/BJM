import React from 'react'
import ProfileCards from '../components/AboutUs/ProfileCards';
import { SectionTitle } from '../components'
import MGV from '../components/AboutUs/MGV';

const AboutUs = () => {
  return (
    <div style={{ padding: '2rem' }}>
      
      <div  style={{ textAlign: 'center' }}>
        <SectionTitle title="Our Team" />
      <ProfileCards/>
      </div>
      <div>
      <MGV/>
      </div>
      
    </div>
  );
};
export default AboutUs
