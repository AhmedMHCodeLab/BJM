import '@mantine/core/styles.css'

import {
  AppShell,
  Button,
  Group,
  MantineProvider,
  Skeleton,
} from '@mantine/core'

export default function App() {
  return (
    <MantineProvider>
      <AppShell
        header={{ height: { base: 60, md: 65, lg: 70 } }}
        navbar={{
          width: { base: 100, md: 200, lg: 300 },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md" justify="center">
            <Button>Home</Button>
            <Button>Services</Button>
            <Button>About</Button>
            <Button>Contact</Button>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          Navbar
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={20} mt="sm" animate={true} />
            ))}
        </AppShell.Navbar>
      </AppShell>
    </MantineProvider>
  )
}
