import { Grid,Flex,Paper } from '@mantine/core';
import ProgressDay from './ProgressDay.tsx';

function Progress()
{
  return(
    <Paper withBorder p="md">
      <Grid columns={16} gap="xs">
        {Array.from({ length: 16 * 7 }, (_, i) => (
          <Grid.Col key={i} span={1}>
            <ProgressDay trained={false}/>
          </Grid.Col>
        ))}
      </Grid>
    </Paper>
  );
}

export default Progress;
