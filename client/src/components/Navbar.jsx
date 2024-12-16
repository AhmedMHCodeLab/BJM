import { Burger, Button, Drawer, Flex, Grid, Image } from '@mantine/core'
import NavLinks from './NavLinks'
import logo from '../assets/images/logo.svg'
import { Link, NavLink } from 'react-router'
import { useDisclosure } from '@mantine/hooks'
import { navLinks } from '../utils/constants'

const Navbar = () => {
  const [opened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)

  return (
    <Grid mx="auto" px={32} maw="80rem" py="md" align="center">
      <Grid.Col span={{ base: 'auto', sm: 2 }}>
        <Link to="/">
          <Image
            src={logo}
            h={{ base: '50', sm: '70', md: '80' }}
            maw="180px"
            fit="cover"
          />
        </Link>
      </Grid.Col>
      <Grid.Col span="auto" offset={0.5} visibleFrom="sm">
        <NavLinks />
      </Grid.Col>
      <Burger
        opened={opened}
        onClick={toggleDrawer}
        size="sm"
        hiddenFrom="sm"
      />
      <Drawer
        opened={opened}
        onClose={closeDrawer}
        size="100%"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <Flex direction="column" justify="center" rowGap={5}>
          {navLinks.map((link, index) => {
            const { name, path } = link
            return (
              <NavLink
                key={index}
                to={path}
                onClick={closeDrawer}
                style={{ textDecoration: 'none' }}
              >
                {({ isActive }) => (
                  <Button
                    variant={isActive ? 'light' : 'subtle'}
                    color={isActive ? 'purpleBlue.2' : 'purpleBlue.5'}
                    size="lg"
                    fullWidth
                  >
                    {name}
                  </Button>
                )}
              </NavLink>
            )
          })}
        </Flex>
      </Drawer>
    </Grid>
  )
}
export default Navbar
