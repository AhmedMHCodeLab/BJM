import { Card, Text, SimpleGrid, Container, Grid, Image } from '@mantine/core'
import { SectionTitle, ServicesAccordion, ServicesCard } from '../components'
import { services, solutions } from '../utils/constants'

const Services = () => {
  return (
    <Container fluid px={{ base: 16, sm: 32 }} maw="80rem" py={{ base: 40, md: 64 }}>
      <SectionTitle title="our services" />
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg" pt={32} pb={64}>
        {services.map((service, index) => {
          return <ServicesCard key={index} {...service} />
        })}
      </SimpleGrid>
      <SectionTitle title="how we operate" />
      <Grid gutter={{ base: "md", sm: "xl" }}>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Image
            w="100%"
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
            fit="cover"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <ServicesAccordion />
        </Grid.Col>
      </Grid>
    </Container>
  )
}
export default Services
