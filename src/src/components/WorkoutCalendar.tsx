import { Text,Badge,Flex,Table,Paper,Space } from '@mantine/core';
import CalendarDay from './CalendarDay';

function WorkoutCalendar()
{
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
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
              <Table.Td></Table.Td>
              <Table.Td><CalendarDay workout={true} day={1} /></Table.Td>
              <Table.Td><CalendarDay workout={false} day={2} /></Table.Td>
              <Table.Td><CalendarDay workout={false} day={3} /></Table.Td>
              <Table.Td><CalendarDay workout={false} day={4} /></Table.Td>
            </Table.Tr>
            <Table.Tr key="week2">
              <Table.Td><CalendarDay workout={true} day={5} /></Table.Td>
              <Table.Td><CalendarDay workout={false} day={6} /></Table.Td>
              <Table.Td><CalendarDay workout={false} day={7} /></Table.Td>
              <Table.Td><CalendarDay workout={true} day={8} /></Table.Td>
              <Table.Td><CalendarDay workout={false} day={9} /></Table.Td>
              <Table.Td><CalendarDay workout={false} day={10} /></Table.Td>
              <Table.Td><CalendarDay workout={false} day={11} /></Table.Td>
            </Table.Tr>
            <Table.Tr key="week3">
              <Table.Td><CalendarDay workout={true} day={12} /></Table.Td>
              <Table.Td><CalendarDay workout={false} day={13} /></Table.Td>
              <Table.Td><CalendarDay workout={false} day={14} /></Table.Td>
              <Table.Td><CalendarDay workout={true} day={15} /></Table.Td>
              <Table.Td><CalendarDay workout={false} day={16} /></Table.Td>
              <Table.Td><CalendarDay workout={false} day={17} /></Table.Td>
              <Table.Td><CalendarDay workout={false} day={18} /></Table.Td>
            </Table.Tr>
            <Table.Tr key="week4">
              <Table.Td><CalendarDay workout={true} day={19} /></Table.Td>
              <Table.Td><CalendarDay workout={false} day={20} /></Table.Td>
              <Table.Td><CalendarDay workout={false} day={21} /></Table.Td>
              <Table.Td><CalendarDay workout={true} day={22} /></Table.Td>
              <Table.Td><CalendarDay workout={false} day={23} /></Table.Td>
              <Table.Td><CalendarDay workout={false} day={24} /></Table.Td>
              <Table.Td><CalendarDay workout={false} day={25} /></Table.Td>
            </Table.Tr>
            <Table.Tr key="week5">
              <Table.Td><CalendarDay workout={true} day={26} /></Table.Td>
              <Table.Td><CalendarDay workout={false} day={27} /></Table.Td>
              <Table.Td><CalendarDay workout={false} day={28} /></Table.Td>
              <Table.Td><CalendarDay workout={true} day={29} /></Table.Td>
              <Table.Td><CalendarDay workout={false} day={30} /></Table.Td>
              <Table.Td><CalendarDay workout={false} day={31} /></Table.Td>
              <Table.Td></Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Flex>
    </Paper>
  );
}

export default WorkoutCalendar;
