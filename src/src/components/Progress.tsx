import { Space,Badge,Text,Grid,Paper } from '@mantine/core';
import ProgressReps from './ProgressReps.tsx';
import ProgressWeight from './ProgressWeight.tsx';

function Progress()
{
  return(
    <Paper withBorder p="md" shadow="xs">
      <Badge variant="default" color="blue" size="xl" radius="md">
        Workout Progress
      </Badge>
      <Space h="xl" />
      <Grid>
        <Grid.Col span={6} align="center">
          <Text>Reps</Text>
          <Space h={10} />
          <ProgressReps />
        </Grid.Col>
        <Grid.Col span={6} align="center">
          <Text>Weight</Text>
          <Space h={10} />
          <ProgressWeight />
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default Progress;
