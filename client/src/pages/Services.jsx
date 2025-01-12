import { Card, Text, SimpleGrid, Container } from '@mantine/core'
import { SectionTitle, ServicesAccordion, ServicesCard } from '../components'
import { services, solutions } from '../utils/constants'

const Services = () => {
  return (
    <Container fluid px={32}>
      <SectionTitle title="our services" />
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg" py={32} mb={32}>
        {services.map((service, index) => {
          return <ServicesCard key={index} {...service} />
        })}
      </SimpleGrid>
      <SectionTitle title="how we operate" />
      <ServicesAccordion />
    </Container>
  )
}
export default Services
