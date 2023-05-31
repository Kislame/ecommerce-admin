import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function Chart({ title, data, dataKey }) {
  return (
    <div className="p-6 mt-7 shadow-md rounded-xl ">
      <h2 className="mb-8 lg:text-2xl sm:text-xl  text-lg font-semibold ">
        {title}
      </h2>
      <ResponsiveContainer width="100%" height={'80%'}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={'name'} stroke="#7852a9" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke="#7852a9" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
