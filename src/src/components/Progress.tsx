import { Badge,Text,Grid,Flex,Paper } from '@mantine/core';
import ProgressDay from './ProgressDay.tsx';

function Progress()
{
  return(
    <Paper withBorder p="md">
      <Flex>
        <Flex px="sm" gap="lg" justify="flex-start" direction="column">
          <Text c="dark">Mon</Text>
          <Text c="dark">Tue</Text>
          <Text c="dark">Wed</Text>
          <Text c="dark">Thur</Text>
          <Text c="dark">Fri</Text>
          <Text c="dark">Sat</Text>
          <Text c="dark">Sun</Text>
        </Flex>
        <Grid columns={16} gap="xs">
          {Array.from({ length: 16 * 7 }, (_, i) => (
            <Grid.Col key={i} span={1}>
              <ProgressDay trained={false}/>
            </Grid.Col>
          ))}
        </Grid>
      </Flex>
    </Paper>
  );
}

export default Progress;
