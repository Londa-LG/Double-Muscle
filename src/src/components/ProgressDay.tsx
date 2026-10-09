import { useDisclosure } from '@mantine/hooks';
import { Text,Popover,Paper } from '@mantine/core';

function ProgressDay(props: {trained:bool})
{
  const [opened, { close, open }] = useDisclosure(false);
  const day = '<Paper withBorder p="md"></Paper>';

  if(props.trained)
  {
    const day = '<Paper withBorder bg="yellow" p="md"></Paper>';
  }

  return (
    <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
      <Popover.Target>
        <Paper onMouseEnter={open} onMouseLeave={close} withBorder p="md">
        </Paper>
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: 'none' }}>
        <Text size="sm">
          This popover is shown when user hovers the target element
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export default ProgressDay;
