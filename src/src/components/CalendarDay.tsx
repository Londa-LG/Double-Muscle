import { Tooltip,Paper,Flex,Text } from '@mantine/core';

function CalendarDay(props:{ workout: bool, day: number })
{
  if(props.workout){
    return(
      <Tooltip label="Workout day">
        <Paper bg="yellow" withBorder p="md">
          <Flex algin="center" justify="center">
            <Text c="white" size="xl">{ props.day }</Text>
          </Flex>
        </Paper>
      </Tooltip>
    );
  }
  return(
    <Tooltip label="Rest day">
      <Paper withBorder p="md">
        <Flex algin="center" justify="center">
          <Text size="xl">{ props.day }</Text>
        </Flex>
      </Paper>
    </Tooltip>
  );
}

export default CalendarDay;
