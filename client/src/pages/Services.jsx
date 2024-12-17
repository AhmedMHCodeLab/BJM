import { Card, Text, SimpleGrid, Container } from '@mantine/core'
import { SectionTitle, ServicesCard } from '../components'
import { services } from '../utils/constants'

const Services = () => {
  return (
    <Container fluid px={32}>
      <SectionTitle title="our services" />
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg" py={32}>
        {services.map((service, index) => {
          return <ServicesCard key={index} {...service} />
        })}
      </SimpleGrid>
    </Container>
  )
}
export default Services
