import { Title } from '@mantine/core'

const SectionTitle = ({ title, marginBottom, center }) => {
  return (
    <Title
      size="h2"
      tt="capitalize"
      textWrap="balance"
      align={center ? 'center' : 'left'}
      mb={marginBottom || 40}
      style={{ letterSpacing: '1px' }}
    >
      {title}
    </Title>
  )
}
export default SectionTitle
