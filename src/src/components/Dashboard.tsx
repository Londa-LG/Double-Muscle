import Navbar from "./NavBar.tsx";
import Calendar from "./WorkoutCalendar.tsx";
import { Grid, Space, AppShell, Text } from '@mantine/core';
import TodaysWorkout from "./TodaysWorkout.tsx";
import Concistency from './Concistency.tsx';
import Progress from './Progress.tsx';
import WorkoutCalendar from './WorkoutCalendar.tsx';

function Dashboard()
{
  return(
      <>
        <TodaysWorkout />
        <Space h="xl" />
        <Progress />
        <Space h="xl" />
        <Concistency />
        <Space h="xl" />
        <WorkoutCalendar />
        <Space h="xl" />
    </>
  );
}

export default Dashboard;
