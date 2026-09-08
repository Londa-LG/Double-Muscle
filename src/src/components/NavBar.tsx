import { AppShell, Button, ActionIcon, Group, Image, Flex, Avatar, Text, Divider, Space } from "@mantine/core";
import { HouseIcon, BarbellIcon, PlusSquareIcon, SunDimIcon } from "@phosphor-icons/react";

export default function Navbar(){
  return(
    <AppShell padding="md" header={{ height: 70 }}>
    <AppShell.Header pl="md" pr="md" pt="sm">
      <Flex justify="space-between" align="center">
        <Image h={40} w={50} radius="md" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png" />

        <Group justify="center" gap="xs">
          <Button leftSection={<HouseIcon size={20} />} variant="subtle" color="yellow" component="a" href="/">
            Home
          </Button>
          <Button leftSection={<BarbellIcon size={20} />} variant="subtle" color="yellow" component="a" href="/workout">
            Workout
          </Button>
          <Button leftSection={<PlusSquareIcon size={20} />} variant="subtle" color="yellow" component="a" href="/create">
            Create Workout
          </Button>
        </Group>

        <Group justify="center" gap="md">
          <Group>
            <Avatar />
            <Text>Taint Levin</Text>
          </Group>
          <ActionIcon variant="default" size="lg" aria-label="light-mode">
            <SunDimIcon style={{ width: '70%', height: '70%' }} />
          </ActionIcon>
        </Group>
      </Flex>
    </AppShell.Header>
    </AppShell>
  );
}
