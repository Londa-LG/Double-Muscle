import Exercise  from './Exercise.tsx';
import { useDisclosure } from '@mantine/hooks';
import PerformExercise from './PerformExercise.tsx';
import { Badge,Paper,Flex,Space } from '@mantine/core';

function PerformWorkout()
{
  const [expanded, { toggle }] = useDisclosure(false);
  return(
    <Paper withBorder shadow="xs" p="md">
      <Flex align="center">
        <Badge variant="default" color="blue" size="xl" radius="md">
            Band Rows
        </Badge>
      </Flex>
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
