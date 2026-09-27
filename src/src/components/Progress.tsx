import { Flex,Paper } from '@mantine/core';
import ProgressDay from './ProgressDay.tsx';

function Progress()
{
  return(
    <Paper withBorder p="sm">
      <Flex wrap="wrap">
        <ProgressDay />
        <ProgressDay />
        <ProgressDay />
        <ProgressDay />
        <ProgressDay />
        <ProgressDay />
        <ProgressDay />
        <ProgressDay />
        <ProgressDay />
        <ProgressDay />
      </Flex>
    </Paper>
  );
}

export default Progress;
