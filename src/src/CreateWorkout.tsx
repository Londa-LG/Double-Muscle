import Navbar from "./components/NavBar.tsx";
import { AppShell, Text } from '@mantine/core';
import WorkoutForm from './components/WorkoutForm.tsx';

export default function CreateWorkout()
{
  return(
    <AppShell padding="md" header={{ height: 70 }}>
      <AppShell.Header pl="md" pr="md" pt="sm">
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>
        <WorkoutForm />
      </AppShell.Main>
    </AppShell>
  );
}

