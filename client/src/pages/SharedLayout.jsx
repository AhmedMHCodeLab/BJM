import { AppShell } from '@mantine/core'
import { Outlet } from 'react-router'
import { Footer, Navbar, WhatsAppBtn } from '../components'

const SharedLayout = () => {
  return (
    <>
      <AppShell
        header={{ height: { base: 80, md: 100, lg: 100 }, breakpoint: 'sm' }}
        mx="auto"
        maw="100vw"
        withBorder={false}
      >
        <AppShell.Header>
          <Navbar />
        </AppShell.Header>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
      <Footer />
      <WhatsAppBtn />
    </>
  )
}
export default SharedLayout
