import { Accordion, Text } from '@mantine/core'
import { solutions } from '../utils/constants'

const ServicesAccordion = () => {
  return (
    <Accordion py={32} variant="separated" mb={32}>
      {solutions.map((solution, index) => {
        return (
          <Accordion.Item key={index} value={solution.name}>
            <Accordion.Control
              icon={<solution.icon />}
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
