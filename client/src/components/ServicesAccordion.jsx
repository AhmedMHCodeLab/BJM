import { Accordion, Text } from '@mantine/core'
import { solutions } from '../utils/constants'

const ServicesAccordion = () => {
  return (
    <Accordion variant="separated" mb={32} radius="md">
      {solutions.map((solution, index) => {
        return (
          <Accordion.Item key={index} value={solution.name} bg="purpleBlue.0">
            <Accordion.Control
              icon={<solution.icon fontSize="1rem" />}
              style={{ fontSize: '2rem' }}
            >
              <Text size="xl">{solution.name}</Text>
            </Accordion.Control>
            <Accordion.Panel>
              <Text size="lg">{solution.description}</Text>
            </Accordion.Panel>
          </Accordion.Item>
        )
      })}
    </Accordion>
  )
}
export default ServicesAccordion
