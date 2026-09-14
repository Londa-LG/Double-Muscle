import { Paper,Flex,Text } from '@mantine/core';

function CalendarDay(props:{ workout: bool, day: number })
{
  if(props.workout){
    return(
      <Paper bg="yellow" withBorder p="md">
        <Flex algin="center" justify="center">
          <Text c="white" size="xl">{ props.day }</Text>
        </Flex>
      </Paper>
    );
  }
  return(
    <Paper  withBorder p="md">
      <Flex algin="center" justify="center">
        <Text c="white" size="xl">{ props.day }</Text>
      </Flex>
    </Paper>
  );
}

export default CalendarDay;
