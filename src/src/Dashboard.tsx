import Navbar from "./components/NavBar.tsx";
import { Space, AppShell, Text } from '@mantine/core';
import TodaysWorkout from "./components/TodaysWorkout.tsx";
import PerformWorkout from "./components/PerformWorkout.tsx";

export default function Dashboard()
{
  return(
    <AppShell padding="md" header={{ height: 70 }}>
      <AppShell.Header pl="md" pr="md" pt="sm">
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>
        <Text size="xl">Today's workout</Text>
        <Space h="md" />
        <PerformWorkout />
        <TodaysWorkout />
      </AppShell.Main>
    </AppShell>
  );
}

