import { Space,Badge,Text,Grid,Flex,Paper } from '@mantine/core';
import ProgressReps from './ProgressReps.tsx';
import ProgressWeight from './ProgressWeight.tsx';

function Progress()
{
  return(
    <Paper withBorder p="md">
      <Flex gap="md" justify="flex-start" align="center" direction="row" wrap="wrap">
        <Text fw={700} size="lg">Reps:</Text>
        <Space h={50} />
        <ProgressReps />
        <Space h={50} />
        <Text fw={700} size="lg">Weight:</Text>
        <ProgressWeight />
      </Flex>
    </Paper>
  );
}

export default Progress;
