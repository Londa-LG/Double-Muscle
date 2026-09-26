import { Space,Flex,BackgroundImage,Button,Badge} from '@mantine/core';

function ExerciseImage()
{
  return(
    <BackgroundImage pos="relative" h="100%" p="md" radius="md" src="https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVzaHVwc3xlbnwwfHwwfHx8MA%3D%3D">
      <Badge pos="absolute" top={12} left={12} variant="default"  color="yellow" size="xl" radius="md">
        8 reps.
      </Badge>
      <Button pos="absolute" right={12} bottom={12} color="yellow">
        Next
      </Button>
    </BackgroundImage>
  );
}

export default ExerciseImage;
