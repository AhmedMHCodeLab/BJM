import React from 'react'
import ProfileCards from '../components/AboutUs/ProfileCards'
import { SectionTitle } from '../components'
import MGV from '../components/AboutUs/MGV'
import { Container } from '@mantine/core'

const AboutUs = () => {
  return (
    <>
      <MGV />
      <Container fluid px={32} maw="80rem">
        <SectionTitle title="Our Team" />
      </Container>
      <ProfileCards />
    </>
  )
}
export default AboutUs
