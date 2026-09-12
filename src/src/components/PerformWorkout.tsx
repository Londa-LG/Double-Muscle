import { Badge,Paper,Flex,Space } from '@mantine/core';
import Exercise  from './Exercise.tsx';
import PerformExercise from './PerformExercise.tsx';

function PerformWorkout()
{
  return(
    <Paper withBorder shadow="xs" p="md">
      <Badge variant="default" color="blue" size="xl" radius="md">
        Band Rows
      </Badge>
      <Space h="xl" />
      <Flex gap="sm" align="flex-start" direction="column">
        <PerformExercise reps={10} />
        <PerformExercise reps={5} />
        <PerformExercise reps={5} />
        <PerformExercise reps={5} />
        <PerformExercise reps={5} />
      </Flex>
    </Paper>
  );
}

export default PerformWorkout;
