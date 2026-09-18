import { Flex,Select,Text,Button,Space,Paper,TextInput } from '@mantine/core';
import ExerciseForm from './ExerciseForm.tsx';
import ExerciseLabel from './ExerciseLabel.tsx';

function WorkoutForm()
{
  return (
    <Paper withBorder p="md">
      <Text fw={500}>Create Workout:</Text>
      <Space h="lg" />
      <TextInput size="md" label="Title:"  />
      <Space h="md" />
      <ExerciseForm />
      <Space h="md" />
      <Flex justify="center">
      <Button>Add Exercise</Button>
      </Flex>
      <Select label="Week day:" data={["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]} />
      <Space h="md" />
      <Button fullWidth>Save workout</Button>
    </Paper>
  );
}

export default WorkoutForm;
