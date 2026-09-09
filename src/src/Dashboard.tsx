import Navbar from "./components/NavBar.tsx";
import { AppShell, Text } from '@mantine/core';

export default function Dashboard()
{
  return(
    <AppShell padding="md" header={{ height: 70 }}>
      <AppShell.Header pl="md" pr="md" pt="sm">
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>
        <Text>Dashboard</Text>
      </AppShell.Main>
    </AppShell>
  );
}

