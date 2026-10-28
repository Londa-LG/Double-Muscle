import { useState } from 'react';
import Navbar from "./components/NavBar.tsx";
import Dashboard from "./components/Dashboard.tsx";
import { FileButton,Center, Button, Flex,  Space, AppShell, Text } from '@mantine/core';
import { FilePlusIcon,UploadSimpleIcon } from "@phosphor-icons/react";

export default function Home()
{
  const [data,setData] = useState(null);

  async function loadFile(file: File | null)
  {
    if(!file)
    {
      return
    }

    const fileData = await file.text();
    setData(JSON.parse(fileData));
  }

  if(data != null)
  {
    console.log(data.workout_plan);
    return(
      <AppShell padding="md" header={{ height: 70 }}>
        <AppShell.Header pl="md" pr="md" pt="sm">
          <Navbar />
        </AppShell.Header>
        <AppShell.Main>
          <Dashboard />
        </AppShell.Main>
      </AppShell>
    );
  }
  else
  {
    return(
      <AppShell padding="md" header={{ height: 70 }}>
        <AppShell.Header pl="md" pr="md" pt="sm">
          <Navbar />
        </AppShell.Header>
        <AppShell.Main>
          <Center mih="100vh" miw="100%">
            <Flex direction="column" align="center" justify="center">
              <Button leftSection={<FilePlusIcon size={14} />} variant="default">Create new</Button>
              <Space h="md" />
              <FileButton onChange={loadFile} accept="json">
              { (props) => <Button {...props}  leftSection={<UploadSimpleIcon size={14} />} variant="filled" color="yellow">Load from file</Button> }
              </FileButton>
            </Flex>
          </Center>
        </AppShell.Main>
      </AppShell>
    );
  }
}

