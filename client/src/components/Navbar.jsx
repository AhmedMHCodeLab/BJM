import {
  Burger,
  Button,
  Drawer,
  Flex,
  Grid,
  Group,
  useMatches,
} from '@mantine/core'
import NavLinks from './NavLinks'
import { NavLink } from 'react-router'
import { useDisclosure } from '@mantine/hooks'
import { navLinks } from '../utils/constants'
import ImageLogo from './ImageLogo'
import QuotaModal from './QuotaModal'

const Navbar = () => {
  const [opened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)
  const span = useMatches({
    base: 'auto',
    sm: 2,
  })

  return (
    <Grid mx="auto" px={32} maw="80rem" py="sm" align="center">
      <Grid.Col span={span}>
        <Flex>
          <ImageLogo />
        </Flex>
      </Grid.Col>
      <Grid.Col span="auto" visibleFrom="sm">
        <NavLinks />
      </Grid.Col>
      <Grid.Col span={span}>
        <QuotaModal />
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
