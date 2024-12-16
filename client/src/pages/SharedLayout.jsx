import { AppShell, Group, Button } from '@mantine/core'
import { Link, Outlet } from 'react-router'
import { NavLinks } from '../components'

const SharedLayout = () => {
  return (
    <AppShell header={{ height: 80 }} padding="xl">
      <AppShell.Header>
        <NavLinks />
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
export default SharedLayout
