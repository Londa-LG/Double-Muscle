import { BarbellIcon } from '@phosphor-icons/react';
import { ThemeIcon,Tooltip,Paper,Flex,Text } from '@mantine/core';

function CalendarDay(props:{ workout: bool, day: number })
{
  if(props.workout){
    return(
      <Tooltip label="Workout day">
        <Flex justify="flex-start">
          <Flex justify="center" align="center" direction="column">
            <Text>{props.day}</Text>
            <Paper withBorder>
              <Flex algin="center" justify="center">
                <ThemeIcon color="yellow" size="xl">
                  <BarbellIcon style={{ width: '70%', height: '70%' }} />
                </ThemeIcon>
              </Flex>
            </Paper>
          </Flex>
        </Flex>
      </Tooltip>
    );
  }
  return(
    <Tooltip label="Rest day">
      <Flex justify="flex-start">
        <Flex align="center" direction="column">
          <Text>{props.day}</Text>
          <Paper withBorder p="lg">
          </Paper>
        </Flex>
      </Flex>
    </Tooltip>
  );
}

export default CalendarDay;
