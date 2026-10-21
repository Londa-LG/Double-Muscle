import { Text,Badge,Flex,Table,Paper,Space } from '@mantine/core';
import CalendarDay from './CalendarDay';

function WorkoutCalendar()
{
  const week1 = [
    { workout: null, day: null },
    { workout: null, day: null },
    { workout: null, day: null },
    { workout: true, day: 1 },
    { workout: false, day: 2 },
    { workout: false, day: 3 },
    { workout: false, day: 4 },
  ];
  const week2 = [
    { workout: true, day: 5 },
    { workout: false, day: 6 },
    { workout: false, day: 7 },
    { workout: true, day: 8 },
    { workout: false, day: 9 },
    { workout: false, day: 10 },
    { workout: false, day: 11 },
  ];
  const week3 = [
    { workout: true, day: 12 },
    { workout: false, day: 13 },
    { workout: false, day: 14 },
    { workout: true, day: 15 },
    { workout: false, day: 16 },
    { workout: false, day: 17 },
    { workout: false, day: 18 },
  ];
  const week4 = [
    { workout: true, day: 19 },
    { workout: false, day: 20 },
    { workout: false, day: 21 },
    { workout: true, day: 22 },
    { workout: false, day: 23 },
    { workout: false, day: 24 },
    { workout: false, day: 25 },
  ];
  const week5 = [
    { workout: true, day: 26 },
    { workout: false, day: 27 },
    { workout: false, day: 28 },
    { workout: true, day: 29 },
    { workout: false, day: 30 },
    { workout: false, day: 31 },
    { workout: null, day: null },
  ];

  const week1_mapping = week1.map((week) => (
    <Table.Td key={week.day}>
      { week.workout != null && (
        <CalendarDay workout={week.workout} day={week.day} />
      )}
    </Table.Td>
  ));
  const week2_mapping = week2.map((week) => (
    <Table.Td key={week.day}>
      { week.workout != null && (
        <CalendarDay workout={week.workout} day={week.day} />
      )}
    </Table.Td>
  ));
  const week3_mapping = week3.map((week) => (
    <Table.Td key={week.day}>
      { week.workout != null && (
        <CalendarDay workout={week.workout} day={week.day} />
      )}
    </Table.Td>
  ));
  const week4_mapping = week4.map((week) => (
    <Table.Td key={week.day}>
      { week.workout != null && (
        <CalendarDay workout={week.workout} day={week.day} />
      )}
    </Table.Td>
  ));
  const week5_mapping = week4.map((week) => (
    <Table.Td key={week.day}>
      { week.workout != null && (
        <CalendarDay workout={week.workout} day={week.day} />
      )}
    </Table.Td>
  ));
  
  return(
    <Paper withBorder p="md">
      <Badge variant="default" size="xl" radius="md">
        October 2026
      </Badge>
      <Space h="xl" />
      <Flex justify="center">
        <Table withRowBorders={false} tabularNums>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Mon</Table.Th>
              <Table.Th>Tue</Table.Th>
              <Table.Th>Wed</Table.Th>
              <Table.Th>Thu</Table.Th>
              <Table.Th>Fri</Table.Th>
              <Table.Th>Sat</Table.Th>
              <Table.Th>Sun</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr key="week1">
              { week1_mapping }
            </Table.Tr>
            <Table.Tr key="week2">
              { week2_mapping }
            </Table.Tr>
            <Table.Tr key="week3">
              { week3_mapping }
            </Table.Tr>
            <Table.Tr key="week4">
              { week4_mapping }
            </Table.Tr>
            <Table.Tr key="week5">
              { week5_mapping }
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Flex>
    </Paper>
  );
}

export default WorkoutCalendar;

