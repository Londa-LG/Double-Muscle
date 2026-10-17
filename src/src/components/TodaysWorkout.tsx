import { Button,Scroller,Badge,Paper,Group,Space } from '@mantine/core';
import Exercise  from './Exercise.tsx';

function TodaysWorkout()
{
  return(
    <Paper withBorder shadow="xs" p="md">
      <Badge variant="default" color="blue" size="xl" radius="md">
        Todays workout
      </Badge>
      <Space h="xl" />
      <Scroller draggable>
        <Group gap="xs" wrap="nowrap">
          <Exercise exercise="Pike pushups" sets="5" />
          <Exercise exercise="Rows | Half band: grey" sets="5" />
          <Exercise exercise="Deadlift | Full band: grey " sets="5" />
          <Exercise exercise="Squat | Half band: blue" sets="5" />
          <Exercise exercise="Uppright rows: Half band: green" sets="5" />
        </Group>
      </Scroller>
      <Space h="lg" />
      <Button fullWidth color="yellow">
        Start workout
      </Button>
    </Paper>
  );
}

export default TodaysWorkout;
