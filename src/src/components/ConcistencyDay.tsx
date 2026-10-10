import { useDisclosure } from '@mantine/hooks';
import { Text,Popover,Paper } from '@mantine/core';

function ConcistencyDay(props: {trained:boolean, details:string})
{
  const [opened, { close, open }] = useDisclosure(false);
  let day = '<Paper withBorder p="md"></Paper>';

  if(props.trained)
  {
    day = '<Paper withBorder bg="yellow" p="md"></Paper>';
  }

  return (
    <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
      <Popover.Target>
        <Paper onMouseEnter={open} onMouseLeave={close} withBorder p="md">
        </Paper>
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: 'none' }}>
        <Text size="sm">
        { props.details }
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export default ConcistencyDay;
