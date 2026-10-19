import { Space,Badge,Text,Grid,Flex,Paper } from '@mantine/core';
import ConcistencyDay from './ConcistencyDay.tsx';

function Concistency()
{
  const records = [
    { index: 1, trained: true, details: "Completed workout"},
    { index: 2, trained: true, details: "Completed workout"},
    { index: 3, trained: true, details: "Completed workout"},
    { index: 4, trained: false, details: "Failed to complete workout"},
    { index: 5, trained: true, details: "Completed workout"},
    { index: 6, trained: true, details: "Completed workout"},
  ];

  const display_items = Array.from({length: 127}, (_,i) => i < records.length ? records[i] : { index : i, trained: false, details: "No record yet" });
  
  const maped_records = display_items.map((record) =>(
    <Grid.Col key={record.index} span={1}>
      <ConcistencyDay trained={record.trained} details={record.details} />
    </Grid.Col>
  ));

  return(
    <Paper withBorder p="md" shadow="xs">
      <Badge variant="default" color="blue" size="xl" radius="md">
        Workout Concistency
      </Badge>
      <Space h="xl" />
      <Flex>
        <Grid columns={16} gap="md">
          { maped_records }
        </Grid>
      </Flex>
    </Paper>
  );
}

export default Concistency;
