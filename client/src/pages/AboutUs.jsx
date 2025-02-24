import React from 'react'
import ProfileCards from '../components/AboutUs/ProfileCards'
import { SectionTitle } from '../components'
import MGV from '../components/AboutUs/MGV'
import BJMMissionValues from '../components/AboutUs/MVO'

const AboutUs = () => {
  return (
    <div style={{ marginBlock: '3.125rem' }}>
      <SectionTitle center title="Our Team" />
      <ProfileCards />
      <BJMMissionValues />
      <MGV />
    </div>
  )
}
export default AboutUs
