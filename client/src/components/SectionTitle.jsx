import { Title } from '@mantine/core'

const SectionTitle = ({ title }) => {
  return (
    <Title
      size="h2"
      tt="capitalize"
      textWrap="balance"
      style={{ letterSpacing: '1px' }}
    >
      {title}
    </Title>
  )
}
export default SectionTitle
