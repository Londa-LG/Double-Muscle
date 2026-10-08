import { Paper } from '@mantine/core';

function ProgressDay(props: {trained:bool})
{
  if(props.trained)
  {
    return(
      <Paper withBorder bg="yellow" p="md">
      </Paper>
    );
  }
  else{
    return(
      <Paper withBorder p="md">
      </Paper>
    );
  }
}

export default ProgressDay;
