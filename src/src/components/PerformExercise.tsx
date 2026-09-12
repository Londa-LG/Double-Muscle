import { Checkbox ,Group,ThemeIcon,Paper,Text,Flex } from '@mantine/core';
import { BarbellIcon } from '@phosphor-icons/react';

function ProgressExercise(props: { reps: number })
{
  return(
    <Paper w="100%" withBorder py="md" px="xl" >
      <Group justify="space-between">
        <Group>
        <ThemeIcon variant="default" size="xl">
          <BarbellIcon style={{ width: '70%', height: '70%' }} />
        </ThemeIcon>
        <Flex align="flex-start" direction="column">
          <Text size="lg">
            { props.reps }x Reps
          </Text>
        </Flex>
        </Group>
        <Checkbox varient="default" color="yellow" />
      </Group>
    </Paper>
  );
}

export default ProgressExercise;
