import Timer from './components/Timer.tsx';
import Navbar from "./components/NavBar.tsx";
import { Grid,AppShell, Text } from '@mantine/core';
import PresentWorkout from './components/PresentWorkout.tsx';
import ExerciseImage from './components/ExerciseImage.tsx';

export default function Workout()
{
  const exercises = [
    { name:"Pike pushups",sets:[9,9,9,9,8]}, 
    { name:"Rows",sets:[12,12,12,12,12]}, 
    { name:"Deadlift",sets:[13,12,12,12,12]}, 
    { name:"Squat",sets:[13,12,12,12,12]}, 
    { name:"Upright row",sets:[8,8,7,7,7]}, 
  ];
  return(
    <AppShell padding="md" header={{ height: 70 }}>
      <AppShell.Header pl="md" pr="md" pt="sm">
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>
        <Timer minutes={10} />
        <PresentWorkout workout="Upper day" exercises={exercises}/>
      </AppShell.Main>
    </AppShell>
  );
}

