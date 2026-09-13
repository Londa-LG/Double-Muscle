import { Paper,Flex,Space } from '@mantine/core';
import CalendarDay from './CalendarDay';

function WorkoutCalendar()
{
  return(
    <Paper withBorder p="lg">
      <Flex justify="center" algin="center" direction="column" wrap="nowrap">
        <Flex gap="lg" algin="center" wrap="nowrap" >
          <CalendarDay day={1} />
          <CalendarDay day={2} />
          <CalendarDay day={3} />
          <CalendarDay day={4} />
          <CalendarDay day={5} />
          <CalendarDay day={6} />
          <CalendarDay day={7} />
        </Flex>
        <Space h="lg" />
        <Flex gap="lg" algin="center" wrap="nowrap" >
          <CalendarDay day={8} />
          <CalendarDay day={9} />
          <CalendarDay day={10} />
          <CalendarDay day={11} />
          <CalendarDay day={12} />
          <CalendarDay day={13} />
          <CalendarDay day={14} />
        </Flex>
        <Space h="lg" />
        <Flex gap="lg" algin="center" wrap="nowrap" >
          <CalendarDay day={15} />
          <CalendarDay day={16} />
          <CalendarDay day={17} />
          <CalendarDay day={18} />
          <CalendarDay day={19} />
          <CalendarDay day={20} />
          <CalendarDay day={21} />
        </Flex>
        <Space h="lg" />
        <Flex gap="lg" algin="center" wrap="nowrap" >
          <CalendarDay day={22} />
          <CalendarDay day={23} />
          <CalendarDay day={24} />
          <CalendarDay day={25} />
          <CalendarDay day={26} />
          <CalendarDay day={27} />
          <CalendarDay day={28} />
        </Flex>
        <Space h="lg" />
        <Flex gap="lg" algin="center" wrap="nowrap" >
          <CalendarDay day={29} />
          <CalendarDay day={30} />
          <CalendarDay day={31} />
        </Flex>
      </Flex>
    </Paper>
  );
}

export default WorkoutCalendar;
