import { Space,Badge,Text,Grid,Paper } from '@mantine/core';
import LineGraph from './LineGraph.tsx';

function Progress()
{
  const lines = [
        { name: 'Pike pushups', color: 'violet.6' },
        { name: 'Rows', color: 'blue.6' },
        { name: 'Deadlifts', color: 'lime.6' },
        { name: 'Squats', color: 'yellow.6' },
        { name: 'Upright rows', color: 'orange.6' },
      ]
  const weight = [
    {week:"2 Nov - 8 Nov",'Pike pushups':10,'Rows':20,Deadlifts:6,Squats:6,'Upright rows':6},
    {week:"9 Nov - 15 Nov",'Pike pushups':11,'Rows':21,Deadlifts:7,Squats:7,'Upright rows':7},
    {week:"16 Nov - 22 Nov",'Pike pushups':12,'Rows':22,Deadlifts:7,Squats:8,'Upright rows':8},
    {week:"23 Nov - 29 Nov",'Pike pushups':11,'Rows':22,Deadlifts:8,Squats:9,'Upright rows':9},
  ];
  const reps = [
    {week:"02 Nov - 08 Nov",'Pike pushups':6,'Rows':6,Deadlifts:6,Squats:6,'Upright rows':6},
    {week:"09 Nov - 15 Nov",'Pike pushups':7,'Rows':7,Deadlifts:7,Squats:7,'Upright rows':7},
    {week:"16 Nov - 22 Nov",'Pike pushups':8,'Rows':8,Deadlifts:7,Squats:8,'Upright rows':8},
    {week:"23 Nov - 29 Nov",'Pike pushups':8,'Rows':9,Deadlifts:8,Squats:9,'Upright rows':9},
  ];
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
          <LineGraph data={reps} labels={lines} />
        </Grid.Col>
        <Grid.Col span={6} align="center">
          <Text>Weight</Text>
          <Space h={10} />
          <LineGraph data={weight} labels={lines} />
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default Progress;
