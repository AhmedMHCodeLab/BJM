import { Group, Button, useMatches } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../utils/constants'

const NavLinks = () => {
  const size = useMatches({
    base: 'xs',
    md: 'sm',
    lg: 'md',
  })

  return (
    <Group h="100%">
      {navLinks.map((link, index) => {
        const { name, path } = link
        return (
          <NavLink key={index} to={path}>
            {({ isActive }) => (
              <Button
                variant={isActive ? 'light' : 'subtle'}
                color={isActive ? 'purpleBlue.2' : 'purpleBlue.5'}
                size={size}
              >
                {name}
              </Button>
            )}
          </NavLink>
        )
      })}
    </Group>
  )
}
export default NavLinks
