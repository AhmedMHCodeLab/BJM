import { ActionIcon, Anchor, Container, Flex, Group, Text } from '@mantine/core'
import ImageLogo from './ImageLogo'
import { socialLinks } from '../utils/constants'

const Footer = () => {
  return (
    <Container
      fluid
      py={{ base: 'lg', sm: 0 }}
      px={{ base: 'xl', sm: 'lg', md: 'md', lg: 'sm' }}
      mt="auto"
      pos="relative"
      bg="purpleBlue.1"
    >
      <Flex
        gap="md"
        direction={{ base: 'column', sm: 'row' }}
        maw="80rem"
        mx="auto"
        justify="space-between"
        wrap="nowrap"
        align="center"
      >
        <ImageLogo />
        <Text fw={500}>
          Copyright &copy; BJM Management Consultancy Co. Ltd
        </Text>
        <Group gap={1} justify="flex-end" wrap="nowrap">
          {socialLinks.map((link, index) => {
            return (
              <Anchor href={link.url} key={index} target="_blank">
                <ActionIcon variant="subtle" color="purpleBlue.5" size="lg">
                  <link.icon />
                </ActionIcon>
              </Anchor>
            )
          })}
        </Group>
      </Flex>
    </Container>
  )
}
export default Footer
