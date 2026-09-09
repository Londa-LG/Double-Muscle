import Navbar from "./components/NavBar.tsx";
import { AppShell, Text } from '@mantine/core';

export default function Workout()
{
  return(
    <AppShell padding="md" header={{ height: 70 }}>
      <AppShell.Header pl="md" pr="md" pt="sm">
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>
        <Text>Workout</Text>
      </AppShell.Main>
    </AppShell>
  );
}

