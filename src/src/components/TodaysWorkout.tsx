import { Button,Scroller,Badge,Paper,Group,Space } from '@mantine/core';
import Exercise  from './Exercise.tsx';

function TodaysWorkout()
{
  const exercises = [
    { exercise: "Pike pushups", sets: "5"},
    { exercise: "Rows (half band)", sets: "5"},
    { exercise: "Deadlifts (grey band)", sets: "5"},
    { exercise: "Squat (half band)", sets: "5"},
    { exercise: "Upright rows (half green)", sets: "5"},
  ]

  const workout = exercises.map((exercise) => (
    <Exercise exercise={exercise.exercise} sets={exercise.sets} />
  ));
  return(
    <Paper withBorder shadow="xs" p="md">
      <Badge variant="default" color="blue" size="xl" radius="md">
        Todays workout
      </Badge>
      <Space h="xl" />
      <Scroller draggable>
        <Group gap="xs" wrap="nowrap">
          { workout }
        </Group>
      </Scroller>
      <Space h="lg" />
      <Button fullWidth color="yellow">
        Start workout
      </Button>
    </Paper>
  );
}

export default TodaysWorkout;
