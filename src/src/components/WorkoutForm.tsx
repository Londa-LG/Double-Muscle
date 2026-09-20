import { useState } from 'react';
import ExerciseForm from './ExerciseForm.tsx';
import ExerciseLabel from './ExerciseLabel.tsx';
import { Flex,Select,Text,Button,Space,Paper,TextInput } from '@mantine/core';

function WorkoutForm()
{
  const [exerciseForms, setExerciseForms] = useState([]);
  const [formIndex,setFormIndex] = useState(0);

  const addForm = () =>{
    let form = { id: formIndex };
    setExerciseForms((current) => [...current,form]);
    let newIndex = formIndex + 1;
    setFormIndex(newIndex);
  }

  const forms = exerciseForms.map((form) =>(
    <ExerciseForm key={form.id}/>
  ));

  return (
    <Paper withBorder p="md">
      <Text fw={500}>Create Workout:</Text>
      <Space h="lg" />
      <TextInput size="md" label="Title:"  />
      <Space h="md" />
      { forms }
      <Flex justify="center">
        <Button  onClick={addForm} color="yellow">Add Exercise</Button>
      </Flex>
      <Select label="Week day:" data={["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]} />
      <Space h="md" />
      <Button color="yellow" fullWidth>Create</Button>
    </Paper>
  );
}

export default WorkoutForm;
