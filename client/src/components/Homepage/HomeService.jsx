import { useState } from 'react';
import { Accordion, Container, Title, Text, Grid, Image } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './HomeService.module.css';
import { SectionTitle } from '..'

const services = [
  {
    index: 1,
    name: "Service 1",
    description: "",
    image: "https://www.orkla.com/wp-content/uploads/sites/3/2023/12/L1490814-aspect-ratio-16-9-1920x1080.jpg"
  },
  {
    index: 2,
    name: "Service 2",
    description: "Description for service 2",
    image: "https://athenauni.eu/wp-content/uploads/2023/01/Athena-BIP-16-9.jpg"
  },
  {
    index: 3,
    name: "Service 3",
    description: "Description for service 3",
    image: "https://us.123rf.com/450wm/fizkes/fizkes1805/fizkes180500740/102258630-diverse-young-people-talking-and-having-fun-together-in-cafe-girls-chatting-sharing-coffeehouse.jpg?ver=6"
  },
  {
    index: 4,
    name: "Service 4",
    description: "Description for service 4",
    image: "/api/placeholder/600/800?text=Service+4"
  }
];

const defaultImage = "https://www.soapeople.com/hubfs/Blog%20images/professional%20services%20Business%20Model.jpg";

function ArticleCard() {
  const [activeImage, setActiveImage] = useState(null);

  const handleAccordionChange = (value) => {
    setActiveImage(value);
  };

  return (
    <Container size="xl" className={classes.wrapper}>
       <div style={{ marginBottom: '60px', textAlign: 'center' }}>
        <SectionTitle title="Empowering Your Vision" />
       </div>
       
      
      <Grid align='center'>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <div>
            {services.map((service) => (
              <Image
                key={service.index}
                src={service.image}
                alt={service.name}
                radius="xl"
                style={{ 
                  width: '70%',
                  height: '440px',
                  maxHeight: '600px',
                  objectFit: 'cover',
                  display: activeImage === service.index.toString() ? 'block' : 'none',
                  transition: 'opacity 0.3s ease',
                  margin: 'auto'
                }}
              />
            ))}
            {activeImage === null && (
              <Image
                src={defaultImage}
                alt="Default"
                radius="xl"
                style={{ 
                  width: '70%',
                  height: '440px',
                  maxHeight: '600px',
                  objectFit: 'cover',
                  transition: 'opacity 0.3s ease',
                  margin: 'auto'
                }}
              />
            )}
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Accordion 
            variant="separated"
            chevron={<IconChevronDown size="1rem" />}
            classNames={{
              chevron: classes.chevron,
              item: classes.item,
              control: classes.control,
              content: classes.content
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
                  <Text size="sm" c="dimmed">
                    {service.description}
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default ArticleCard;