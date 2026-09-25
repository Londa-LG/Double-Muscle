import { Space,Paper,BackgroundImage,Button,Badge} from '@mantine/core';

function ExerciseImage()
{
  return(
    <Paper w="100%" withBorder p="md">
      <Badge variant="default"  color="yellow" size="xl" radius="md">
        8 reps.
      </Badge>
      <BackgroundImage src="https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVzaHVwc3xlbnwwfHwwfHx8MA%3D%3D">
        <Space h="xl" />
      </BackgroundImage>
    </Paper>
  );
}

export default ExerciseImage;
