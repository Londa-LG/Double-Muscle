import { Paper,TextInput } from '@mantine/core';
import ExerciseForm from './ExerciseForm.tsx';

function WorkoutForm()
{
  return (
    <Paper>
      <TextInput size="md" label="Title"  />
      <ExerciseForm />
      <ExerciseForm />
    </Paper>
  );
}

export default WorkoutForm;
