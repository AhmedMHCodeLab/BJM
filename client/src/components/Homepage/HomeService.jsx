import { useState } from 'react'
import {
  Accordion,
  Container,
  Title,
  Text,
  Grid,
  Image,
  Flex,
} from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import classes from './HomeService.module.css'
import { SectionTitle } from '..'

function ArticleCard() {
  const [activeImage, setActiveImage] = useState(null)

  const handleAccordionChange = (value) => {
    setActiveImage(value)
  }

  const services = [
    {
      index: 1,
      name: 'Business Development and Advisory',
      description: 'Accelerate your business growth with strategic planning, targeted marketing insights, and expert proposal development.',
      image:
        'https://www.orkla.com/wp-content/uploads/sites/3/2023/12/L1490814-aspect-ratio-16-9-1920x1080.jpg',
    },
    {
      index: 2,
      name: 'Training, Learning, and Capacity Building',
      description: 'Empower your team with dynamic learning experiences that turn potential into measurable performance and innovation.',
      image:
        'https://athenauni.eu/wp-content/uploads/2023/01/Athena-BIP-16-9.jpg',
    },
    {
      index: 3,
      name: 'Policy and Governance Support',
      description: 'Develop robust organizational policies and governance structures that align with your strategic vision and operational excellence.',
      image:
        'https://us.123rf.com/450wm/fizkes/fizkes1805/fizkes180500740/102258630-diverse-young-people-talking-and-having-fun-together-in-cafe-girls-chatting-sharing-coffeehouse.jpg?ver=6',
    },
   
  ]

  const defaultImage =
    'https://www.soapeople.com/hubfs/Blog%20images/professional%20services%20Business%20Model.jpg'

  const ImageCard = ({ image, name, index, isDefault }) => {
    return (
      <Image
        src={activeImage === null ? defaultImage : image}
        alt={name || 'Default'}
        radius="xl"
        fit="cover"
        h={440}
        mah={600}
        m="auto"
        display={
          (isDefault && 'block') ||
          (activeImage === index.toString() ? 'block' : 'none')
        }
        style={{
          transition: 'opacity 0.3s ease',
        }}
      />
    )
  }

  return (
    <Container size="xl" className={classes.wrapper}>
      <SectionTitle title="Empowering Your Vision" center marginBottom={80} />
      <Grid justify="center" align="center">
        <Grid.Col span={{ base: 8, md: 'auto' }}>
          {services.map((service) => {
            return <ImageCard key={service.index} {...service} />
          })}
          {activeImage === null && <ImageCard image={defaultImage} isDefault />}
        </Grid.Col>
        <Grid.Col
          span={{ base: 8, md: 6 }}
          offset={{ base: 0, sm: 0.1, md: 0.3 }}
        >
          <Accordion
            variant="separated"
            chevron={<IconChevronDown size="1rem" />}
            classNames={{
              chevron: classes.chevron,
              item: classes.item,
              control: classes.control,
              content: classes.content,
            }}
            value={activeImage}
            onChange={handleAccordionChange}
          >
            {services.map((service) => (
              <Accordion.Item
                key={service.index}
                value={service.index.toString()}
              >
                <Accordion.Control>
                  <Text fw={500}>{service.name}</Text>
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="lg" c="dimmed">
                    {service.description}
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default ArticleCard
