import { TextInput, NumberInput, Button } from '@mantine/core';

function ExerciseForm()
{
  return(
    <>
      <TextInput label="Exercise Name" />
      <NumberInput label="Sets" />
      <NumberInput label="Reps" />
      <Button>Save</Button>
    </>
  );
}

export default ExerciseForm;
