import { Group, Button } from '@mantine/core'
import { Link } from 'react-router'

const NavLinks = () => {
  return (
    <Group h="100%" px="xl">
      <Link to="/">
        <Button variant="filled" color="rgba(196, 37, 37, 1)">
          Home
        </Button>
      </Link>
      <Link to="about-us">
        <Button>About Us</Button>
      </Link>
      <Link to="gallery">
        <Button>Gallery</Button>
      </Link>
      <Link to="program">
        <Button>Program</Button>
      </Link>
      <Link to="services">
        <Button>Services</Button>
      </Link>
    </Group>
  )
}
export default NavLinks
