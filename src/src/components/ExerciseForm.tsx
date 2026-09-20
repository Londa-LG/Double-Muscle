import { useState } from 'react';
import Reps from './Reps.tsx';
import { Flex, Paper, Text, Space, TextInput, NumberInput, Button } from '@mantine/core';

function ExerciseForm()
{
  const [name,setName] = useState('');
  const [sets,setSets] = useState(0);
  const [reps,setReps] = useState([]);
  const [repIndex, setRepIndex] = useState(0);

  const addReps = () =>{
    let rep = { id: repIndex };
    setReps((current) => [...current,rep]);
    let newRepIndex = repIndex + 1;
    setRepIndex(newRepIndex);
  }

  const formReps = reps.map((rep) =>(
    <Reps key={rep.id}/>
  ));

  return(
    <Paper withBorder size="lg" p="md" mb="md">
      <Text fw={500} >Exercise:</Text>
      <Space h="sm" />
      <TextInput value={name} onChange={(event) => setName(event.currentTarget.value)} label="Name:" />
      <Space h="sm" />
      <NumberInput value={sets} onChange={setSets} label="Sets:" />
      <Space h="sm" />
      <Flex align="center" gap="md">
        { formReps }
      </Flex>
      <Space h="md" />
      <Button onClick={addReps} color="yellow">Add reps</Button>
    </Paper>
  );
}

export default ExerciseForm;
