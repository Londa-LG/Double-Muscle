import Navbar from "./components/NavBar.tsx";
import Calendar from "./components/WorkoutCalendar.tsx";
import { Grid, Space, AppShell, Text } from '@mantine/core';
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
        <Grid>
          <Grid.Col span={6}>
            <TodaysWorkout />
          </Grid.Col>
          <Grid.Col span={6}>
            <Calendar />
          </Grid.Col>
        </Grid>
      </AppShell.Main>
    </AppShell>
  );
}

