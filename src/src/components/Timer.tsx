import { Paper, Text, RingProgress } from '@mantine/core';
import { useEffect, useState } from "react";

function Timer(props: {minutes:number}) {
  const time = props.minutes * 60;
  const [secondsLeft, setSecondsLeft] = useState(time);
  const [value, setValue] = useState(secondsLeft/time * 100);

  useEffect(() => {
    if (secondsLeft === 0) return;

    const intervalId = setInterval(() => {
      setSecondsLeft((seconds) => seconds - 1);
    }, 1000);

    setValue(secondsLeft/time * 100);

    return () => clearInterval(intervalId);
  }, [secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <RingProgress size={220} thickness={13} roundCaps 
        sections={[
          { value: {value}, color: 'cyan' }
        ]}
        label={
          <Text size="lg" ta="center">
            {minutes}:{String(seconds).padStart(2, "0")}
          </Text>
        }
    />
  );
}

export default Timer;

