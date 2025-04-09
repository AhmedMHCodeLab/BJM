import { Card, Group, Text, UnstyledButton, Grid, Image } from "@mantine/core"
import { IconBrandFacebook, IconBrandTwitter, IconBrandLinkedin, IconBrandInstagram } from "@tabler/icons-react"
import styles from "./ProfileCards.module.css"

const designers = [
  {
    name: "Mr. Bakary Marong",
    title: "Managing Director/CEO",
    image: "https://bjmafrica.com/wp-content/uploads/2024/08/bmarong3.jpg",
    social: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      instagram: "https://instagram.com/johndoe",
    },
  },
  {
    name: "Mrs. Jainaba Jallow Marong",
    title: "Director, Corporate Affairs, Sales & Marketing",
    image: "https://bjmafrica.com/wp-content/uploads/2024/08/jMarong.jpg",
    social: {
      facebook: "https://facebook.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      instagram: "https://instagram.com/janesmith",
    },
  },
  {
    name: "Mr. Hadim Ndow",
    title: "Director, Business & Organization Development",
    image: "https://bjmafrica.com/wp-content/uploads/2024/08/mmarong-768x1128.jpg",
    social: {
      facebook: "https://facebook.com/bobbrown",
      linkedin: "https://linkedin.com/in/bobbrown",
      instagram: "https://instagram.com/bobbrown",
    },
  },
  // Add more designers as needed
]

// Update the DesignerCard component to improve image handling
const DesignerCard = ({ name, title, social, image }) => {
  return (
    <Card shadow="md" p={0} w="100%" className={styles.card} radius="lg">
      <div className={styles.imageContainer}>
        <Image
          src={image || "/placeholder.svg"}
          alt={`Portrait of ${name}, ${title}`}
          className={styles.cardImage}
          fit="cover"
          loading="lazy"
        />
      </div>
      <div className={styles.cardInner} aria-hidden="true"></div>
      <div className={styles.content}>
        <Text className={styles.title}>
          {name}
          <br />
          <span>{title}</span>
        </Text>
        <Group spacing="xs" className={styles.sci}>
          {social.facebook && (
            <UnstyledButton
              component="a"
              href={social.facebook}
              className={styles.socialButton}
              aria-label={`Visit ${name}'s Facebook profile`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandFacebook size={22} />
            </UnstyledButton>
          )}
          {social.twitter && (
            <UnstyledButton
              component="a"
              href={social.twitter}
              className={styles.socialButton}
              aria-label={`Visit ${name}'s Twitter profile`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandTwitter size={22} />
            </UnstyledButton>
          )}
          {social.linkedin && (
            <UnstyledButton
              component="a"
              href={social.linkedin}
              className={styles.socialButton}
              aria-label={`Visit ${name}'s LinkedIn profile`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandLinkedin size={22} />
            </UnstyledButton>
          )}
          {social.instagram && (
            <UnstyledButton
              component="a"
              href={social.instagram}
              className={styles.socialButton}
              aria-label={`Visit ${name}'s Instagram profile`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandInstagram size={22} />
            </UnstyledButton>
          )}
        </Group>
      </div>
    </Card>
  )
}

const DesignerGrid = () => {
  return (
    <section className={styles.container}>
      <Grid justify="center" gutter={{ base: 16, sm: 24, lg: 32 }}>
        {designers.map((designer, index) => (
          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }} key={index}>
            <DesignerCard name={designer.name} title={designer.title} image={designer.image} social={designer.social} />
          </Grid.Col>
        ))}
      </Grid>
    </section>
  )
}

export default DesignerGrid
