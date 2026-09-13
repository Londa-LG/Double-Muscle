import { Paper,Flex,Text } from '@mantine/core';

function CalendarDay(props:{ day: number })
{
  return(
    <Paper withBorder p="md">
      <Flex algin="center" justify="center">
        <Text size="xl">{ props.day }</Text>
      </Flex>
    </Paper>
  );
}

export default CalendarDay;
