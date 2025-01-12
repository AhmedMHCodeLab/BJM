import React from 'react';
import { Card, Group, Text, UnstyledButton, Grid } from '@mantine/core';
import { IconBrandFacebook, IconBrandTwitter, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-react';
import styles from './ProfileCards.module.css';

const designers = [
  {
    name: "Mr. Bakary Marong",
    title: "Managing Director/CEO",
    image: "https://bjmafrica.com/wp-content/uploads/2024/08/bmarong3.jpg",
    social: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      instagram: "https://instagram.com/johndoe"
    }
  },
  {
    name: "Mrs. Jainaba Jallow Marong",
    title: "Director, Corporate Affairs, Sales & Marketing",
    image: "https://bjmafrica.com/wp-content/uploads/2024/08/jMarong.jpg",
    social: {
      facebook: "https://facebook.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      instagram: "https://instagram.com/janesmith"
    }
  },
  {
    name: "Mr. Paul Joesph Musa",
    title: "Director, Director and Company Secretary",
    image: "https://bjmafrica.com/wp-content/uploads/2024/08/pBJM.jpg",
    social: {
      facebook: "https://facebook.com/alicejohnson",
      twitter: "https://twitter.com/alicejohnson",
      instagram: "https://instagram.com/alicejohnson"
    }
  },
  {
    name: "Mr. Hadim Ndow",
    title: "Director, Business & Organization Development",
    image: "https://bjmafrica.com/wp-content/uploads/2024/08/mmarong-768x1128.jpg",
    social: {
      facebook: "https://facebook.com/bobbrown",
      linkedin: "https://linkedin.com/in/bobbrown",
      instagram: "https://instagram.com/bobbrown"
  }
  },
  
  // Add more designers as needed
];
const DesignerCard = ({ name, title, social, image }) => {
  return (
    <Card size="lg" shadow="sm" p="lg" className={styles.card} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.cardInner}></div>
      <div className={styles.content}>
        <Text className={styles.title}>
          {name}<br /><span>{title}</span>
        </Text>
        <Group spacing="xs" className={styles.sci}>
          {social.facebook && (
            <UnstyledButton component="a" href={social.facebook} className={styles.socialButton}>
              <IconBrandFacebook size={20} />
            </UnstyledButton>
          )}
          {social.twitter && (
            <UnstyledButton component="a" href={social.twitter} className={styles.socialButton}>
              <IconBrandTwitter size={24} />
            </UnstyledButton>
          )}
          {social.linkedin && (
            <UnstyledButton component="a" href={social.linkedin} className={styles.socialButton}>
              <IconBrandLinkedin size={24} />
            </UnstyledButton>
          )}
          {social.instagram && (
            <UnstyledButton component="a" href={social.instagram} className={styles.socialButton}>
              <IconBrandInstagram size={24} />
            </UnstyledButton>
          )}
        </Group>
      </div>
    </Card>
  );
};



const DesignerGrid = () => {
  return (
    <div className={styles.container}>
      <Grid justify="center" align="stretch" gutter={{ base: 10, sm: 20, lg: 30 }}>
        {designers.map((designer, index) => (
          <Grid.Col span={{ base: 12, sm: 6, lg: 3 }} key={index}>
            <DesignerCard 
              name={designer.name}
              title={designer.title}
              image={designer.image}
              social={designer.social}
            />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default DesignerGrid;
