import { Space,Badge,Text,Grid,Flex,Paper } from '@mantine/core';
import ConcistencyDay from './ConcistencyDay.tsx';

function Concistency()
{
  return(
    <Paper withBorder p="md" shadow="xs">
      <Badge variant="default" color="blue" size="xl" radius="md">
        Workout Concistency
      </Badge>
      <Space h="xl" />
      <Flex>
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
