import { BarChart } from '@mantine/charts';

function ProgressWeight() {
  const data = [
    {week:"2 Nov - 8 Nov",'Pike pushups':6,'Rows':6,Deadlifts:6,Squats:6,'Upright rows':6},
    {week:"9 Nov - 15 Nov",'Pike pushups':7,'Rows':7,Deadlifts:7,Squats:7,'Upright rows':7},
    {week:"16 Nov - 22 Nov",'Pike pushups':8,'Rows':8,Deadlifts:7,Squats:8,'Upright rows':8},
    {week:"23 Nov - 29 Nov",'Pike pushups':8,'Rows':9,Deadlifts:8,Squats:9,'Upright rows':9},
  ];
  return (
      <BarChart
        h={300}
        data={data}
        dataKey="week"
        series={[
          { name: 'Pike pushups', color: 'violet.6' },
          { name: 'Rows', color: 'blue.6' },
          { name: 'Deadlifts', color: 'lime.6' },
          { name: 'Squats', color: 'yellow.6' },
          { name: 'Upright rows', color: 'orange.6' },
        ]}
        tickLine="y"
      />
  );
}

export default ProgressWeight;
