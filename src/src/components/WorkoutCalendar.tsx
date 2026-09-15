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
        <Grid.Col span={1.7}>
          <CalendarDay workout={true} day={8} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={false} day={9} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={false} day={10} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={true} day={11} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={false} day={12} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={false} day={13} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={false} day={14} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={true} day={15} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={false} day={16} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={false} day={17} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={true} day={18} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={false} day={19} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={false} day={20} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={false} day={21} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={true} day={22} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={false} day={23} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={false} day={24} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={true} day={25} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={false} day={26} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={false} day={27} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={false} day={28} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={true} day={29} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={false} day={30} />
        </Grid.Col>
        <Grid.Col span={1.7}>
          <CalendarDay workout={false} day={31} />
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default WorkoutCalendar;
