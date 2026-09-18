import { Paper, Text, Space, NumberInput, Button } from '@mantine/core';

function ExerciseLabel(props: { name:string, sets:number, reps:number })
{
  return(
    <Paper withBorder size="lg" p="md">
      <Text fw={500} >Exercise:</Text>
      <Space h="sm" />
      <Text>Name: {props.name}</Text>
      <Space h="sm" />
      <Text>Sets: {props.sets}</Text>
      <Space h="sm" />
      <Text>Reps: {props.reps}</Text>
      <Space h="md" />
      <Button>Edit</Button>
    </Paper>
  );
}

export default ExerciseLabel;
