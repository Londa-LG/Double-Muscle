import { Button,Group,ThemeIcon,Paper,Text,Flex } from '@mantine/core';
import { BarbellIcon } from '@phosphor-icons/react';

function Exercise(props: { exercise: string, sets: number })
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
            { props.exercise }
          </Text>
          <Text size="md" c="dimmed">
            { props.sets }x sets
          </Text>
        </Flex>
        </Group>
        <Button varient="default" color="yellow">
          Start workout
        </Button>
      </Group>
    </Paper>
  );
}

export default Exercise;
