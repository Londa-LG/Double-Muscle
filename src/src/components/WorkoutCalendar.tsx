import { Text,Badge ,Grid,Paper,Flex,Space } from '@mantine/core';
import CalendarDay from './CalendarDay';

function WorkoutCalendar()
{
  return(
    <Paper withBorder p="lg">
      <Badge variant="default" size="xl" radius="md">
        September 2026
      </Badge>
      <Space h="xl" />
      <Grid>
        <Grid.Col span={1.7}>
          <Text>
            M
          </Text>
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={true} day={1} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={false} day={2} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={false} day={3} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={true} day={4} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={false} day={5} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={false} day={6} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={false} day={7} />
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default WorkoutCalendar;
