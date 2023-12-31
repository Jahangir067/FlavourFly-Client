import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: 'Salad',
    uv: 25,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Pizza',
    uv: 30,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Soap',
    uv: 47,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Dessert',
    uv: 88,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Drinks',
    uv: 55,
    pv: 4800,
    amt: 2181,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Rechart = () => {
    return (
        <BarChart
      width={370}
      height={300}
      data={data}
      className=''
      
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    );
};

export default Rechart;