import { Button, Center, Flex, Text, Title } from '@mantine/core'
import { Link } from 'react-router'

const Error = () => {
  return (
    <Center h="100vh">
      <Flex direction="column" align="center" rowGap={5}>
        <Title
          c="purpleBlue.2"
          style={{ letterSpacing: '1px', fontSize: '5rem' }}
        >
          404
        </Title>
        <Text
          size="lg"
          c="purpleBlue.5"
          ta="center"
          fw={500}
          style={{ fontSize: '1.5rem' }}
        >
          Sorry, the page you are looking for does not exist.
        </Text>
        <Link to="/">
          <Button variant="subtle" color="purpleBlue.3" size="lg" mt="lg">
            Back Home
          </Button>
        </Link>
      </Flex>
    </Center>
  )
}
export default Error
