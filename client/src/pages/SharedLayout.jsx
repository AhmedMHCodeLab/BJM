import { AppShell, Group, Button, Burger } from '@mantine/core'
import { Link, Outlet } from 'react-router'
import { Navbar } from '../components'
import { useDisclosure } from '@mantine/hooks'

const SharedLayout = () => {
  const [opened, { toggle }] = useDisclosure(false)

  return (
    <AppShell
      header={{ height: { base: 80, md: 100, lg: 120 }, breakpoint: 'sm' }}
      mx="auto"
      px={32}
      maw="80rem"
      withBorder={false}
    >
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
export default SharedLayout
