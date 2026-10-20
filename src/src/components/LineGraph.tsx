import { LineChart } from '@mantine/charts';

function LineGraph(props:{data:[],labels:[]}) {
  return (
    <LineChart
      h={300}
      data={props.data}
      dataKey="week"
      series={props.labels}
      curveType="bump"
      connectNulls
    />
  );
}

export default LineGraph;
