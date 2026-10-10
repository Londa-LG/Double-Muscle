import { Badge,Text,Grid,Flex,Paper } from '@mantine/core';
import ConcistencyDay from './ConcistencyDay.tsx';

function Concistency()
{
  return(
    <Paper withBorder p="md">
      <Flex>
        <Flex px="sm" gap="lg" justify="flex-start" direction="column">
          <Text >Mon</Text>
          <Text >Tue</Text>
          <Text >Wed</Text>
          <Text >Thur</Text>
          <Text >Fri</Text>
          <Text >Sat</Text>
          <Text >Sun</Text>
        </Flex>
        <Grid columns={16} gap="xs">
          {Array.from({ length: 16 * 7 }, (_, i) => (
            <Grid.Col key={i} span={1}>
              <ConcistencyDay trained={false} details={"Some details on the day"} />
            </Grid.Col>
          ))}
        </Grid>
      </Flex>
    </Paper>
  );
}

export default Concistency;
