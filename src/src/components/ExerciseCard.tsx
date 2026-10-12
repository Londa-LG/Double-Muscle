import Exercise  from './Exercise.tsx';
import { useDisclosure } from '@mantine/hooks';
import PerformExercise from './PerformExercise.tsx';
import { Text,ScrollArea,Button,Badge,Paper,Flex,Space } from '@mantine/core';

function ExerciseCard(props: {exercise:string,sets:[]})
{

  const exercises = props.sets.map((set) =>(
    <PerformExercise reps={set} />
  ));
  return(
    <Paper withBorder shadow="xs" p="md">
      <Flex align="center">
        <Badge variant="default" color="blue" size="xl" radius="md">
          { props.exercise }
        </Badge>
      </Flex>
      <Space h="xl" />
      <Flex gap="sm" align="flex-start" direction="column">
        { exercises }
      </Flex>
      <Space h="xl" />
    </Paper>
  );
}

export default ExerciseCard;
