import { Card, Text, ThemeIcon, Title } from '@mantine/core'

const ServicesCard = ({ name, description, index }) => {
  return (
    <Card shadow="md" radius="md" padding="xl">
      <ThemeIcon
        variant="light"
        fw={700}
        size={40}
        radius={40}
        color="purpleBlue.3"
      >
        {index}
      </ThemeIcon>
      <Text mt="md" fw={500} size="lg" c="purpleBlue.5">
        {name}
      </Text>
      <Text mt="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </Card>
  )
}
export default ServicesCard
