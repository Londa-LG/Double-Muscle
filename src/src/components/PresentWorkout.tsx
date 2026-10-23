import Exercise  from './Exercise.tsx';
import ExerciseCard from './ExerciseCard.tsx';
import { useDisclosure } from '@mantine/hooks';
import PerformExercise from './PerformExercise.tsx';
import { Text,ScrollArea,Button,Badge,Paper,Flex,Space } from '@mantine/core';

function PresentWorkout(props: {setComplete:() =>void,workout:string,exercises:[]})
{
  const exercises = props.exercises.map((exercise,index) =>(
    <ExerciseCard key={index} exercise={exercise.name} sets={exercise.sets} />
  ));

  return(
    <Paper withBorder shadow="xs" p="md">
      <Badge variant="default" color="blue" size="xl" radius="md">
        { props.workout }
      </Badge>
      <Space h="xl" />
      <Flex justify="center" direction="column" gap="lg">
        { exercises }
      </Flex>
      <Space h="xl" />
      <Button onClick={props.setComplete}fullWidth color="yellow">
        <Text size="md">
          Complete
        </Text>
      </Button>
    </Paper>
  );
}

export default PresentWorkout;
