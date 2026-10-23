import { useState } from 'react';
import Navbar from "./components/NavBar.tsx";
import { Grid,AppShell, Text } from '@mantine/core';
import PresentWorkout from './components/PresentWorkout.tsx';
import ExerciseImage from './components/ExerciseImage.tsx';

export default function Workout()
{
  const [workout,setWorkout] = useState({ 
    title: "Upper day",
    complete: false,
    week_day: "Monday",
    exercises: [
      { date: new Date("2026-10-23"),name:"Pike pushups",sets:[9,9,9,9,8] }, 
      { date: new Date("2026-10-23"),name:"Rows",sets:[12,12,12,12,12] }, 
      { date: new Date("2026-10-23"),name:"Deadlift",sets:[13,12,12,12,12] }, 
      { date: new Date("2026-10-23"),name:"Squat",sets:[13,12,12,12,12] }, 
      { date: new Date("2026-10-23"),name:"Upright row",sets:[8,8,7,7,7] }, 
    ],
  });

  function setComplete(){
    workout.complete = true;
    setWorkout(workout);
  };

  return(
    <AppShell padding="md" header={{ height: 70 }}>
      <AppShell.Header pl="md" pr="md" pt="sm">
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>
        <PresentWorkout setComplete={setComplete} workout={workout.title} exercises={workout.exercises}/>
      </AppShell.Main>
    </AppShell>
  );
}

