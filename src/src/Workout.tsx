import Navbar from "./components/NavBar.tsx";
import { Grid,AppShell, Text } from '@mantine/core';
import PerformWorkout from './components/PerformWorkout.tsx';
import ExerciseImage from './components/ExerciseImage.tsx';

export default function Workout()
{
  return(
    <AppShell padding="md" header={{ height: 70 }}>
      <AppShell.Header pl="md" pr="md" pt="sm">
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>
        <Grid>
          <Grid.Col span={8}>
            <ExerciseImage />
          </Grid.Col>
          <Grid.Col span={4}>
            <PerformWorkout />
          </Grid.Col>
        </Grid>
      </AppShell.Main>
    </AppShell>
  );
}

