import { useState } from 'react';
import { useMantineColorScheme, AppShell, Button, ActionIcon, Group, Image, Flex, Avatar, Text, Divider, Space } from "@mantine/core";
import { MoonIcon, HouseIcon, BarbellIcon, PlusSquareIcon, SunDimIcon } from "@phosphor-icons/react";

export default function Navbar(){

  const { setColorScheme } = useMantineColorScheme();
  const [color, setColor] = useState("light");
  const [schemeBtn, setSchemeBtnColor ] = useState(<MoonIcon style={{ width: '70%', height: '70%' }} />);

  function toggleColorScheme()
  {
    if(color === "light"){
      setColor("dark");
      setSchemeBtnColor(<SunDimIcon style={{ width: '70%', height: '70%' }} />)
      setColorScheme("dark");
    }
    if(color === "dark"){
      setColor("light");
      setSchemeBtnColor(<MoonIcon style={{ width: '70%', height: '70%' }} />)
      setColorScheme("light");
    }
  }

  return(
      <Flex justify="space-between" align="center">
        <Image h={35} w={40} radius="md" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png" />

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
          <Avatar />
          <Text>Taint Levin</Text>
          <ActionIcon onClick={ toggleColorScheme } variant="default" size="lg" aria-label="light-mode">
            { schemeBtn }
          </ActionIcon>
        </Group>
      </Flex>
  );
}
