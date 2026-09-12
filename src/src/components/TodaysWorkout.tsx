import { Badge,Paper,Flex,Space } from '@mantine/core';
import Exercise  from './Exercise.tsx';

function TodaysWorkout()
{
  return(
    <Paper withBorder shadow="xs" p="md">
      <Badge variant="default" color="blue" size="xl" radius="md">
        Tuesday, 22 September 2026
      </Badge>
      <Space h="xl" />
      <Flex gap="sm" align="flex-start" direction="column">
        <Exercise exercise="Pike pushups" sets="5" />
        <Exercise exercise="Rows | Half band: grey" sets="5" />
        <Exercise exercise="Deadlift | Full band: grey " sets="5" />
        <Exercise exercise="Squat | Half band: blue" sets="5" />
        <Exercise exercise="Uppright rows: Half band: green" sets="5" />
      </Flex>
    </Paper>
  );
}

export default TodaysWorkout;
