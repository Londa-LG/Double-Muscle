import { useState } from 'react';
import { Paper, Text, Space, TextInput, NumberInput, Button } from '@mantine/core';

function ExerciseForm()
{
  const [name,setName] = useState('');
  const [sets,setSets] = useState(0);
  const [reps,setReps] = useState(0);


  return(
    <Paper withBorder size="lg" p="md">
      <Text fw={500} >Exercise:</Text>
      <Space h="sm" />
      <TextInput value={name} onChange={(event) => setName(event.currentTarget.value)} label="Name:" />
      <Space h="sm" />
      <NumberInput value={sets} onChange={(event) => setSets(event.currentTarget.value)} label="Sets:" />
      <Space h="sm" />
      <NumberInput value={reps} onChange={(event) => setReps(event.currentTarget.value)} label="Reps:" />
      <Space h="md" />
    </Paper>
  );
}

export default ExerciseForm;
