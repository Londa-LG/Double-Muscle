import { useState } from 'react';
import { NumberInput } from '@mantine/core';

function Reps()
{
  const [reps,setReps] = useState(0);

  return(
      <NumberInput value={reps} onChange={setReps} label="Reps:" />
  );
}

export default Reps;
