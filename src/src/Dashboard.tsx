import Navbar from "./components/NavBar.tsx";
import Calendar from "./components/WorkoutCalendar.tsx";
import { Grid, Space, AppShell, Text } from '@mantine/core';
import TodaysWorkout from "./components/TodaysWorkout.tsx";
import PerformWorkout from "./components/PerformWorkout.tsx";
import Concistency from './components/Concistency.tsx';
import Progress from './components/Progress.tsx';

export default function Dashboard()
{
  return(
    <AppShell padding="md" header={{ height: 70 }}>
      <AppShell.Header pl="md" pr="md" pt="sm">
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>
        <Progress />
        <Concistency />
      </AppShell.Main>
    </AppShell>
  );
}

