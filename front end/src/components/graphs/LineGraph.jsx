import {
  ComposedChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
} from 'recharts';

const data = [
  { day: 'Sunday', orders: 200, date: 'Mar 9th, 2025' },
  { day: 'Monday', orders: 350, date: 'Mar 10th, 2025' },
  { day: 'Tuesday', orders: 456, date: 'Mar 11th, 2025' },
  { day: 'Wednesday', orders: 300, date: 'Mar 12th, 2025' },
  { day: 'Thursday', orders: 320, date: 'Mar 13th, 2025' },
  { day: 'Friday', orders: 400, date: 'Mar 14th, 2025' },
  { day: 'Saturday', orders: 500, date: 'Mar 15th, 2025' },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-white px-4 py-2 rounded-xl shadow text-center border border-gray-100">
        <p className="font-semibold text-gray-800">{payload[0].value} Order</p>
        <p className="text-sm text-gray-500">{payload[0].payload.date}</p>
      </div>
    );
  }
  return null;
};

const OrderChart = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <ResponsiveContainer width="100%" height={200}>
        <ComposedChart
          data={data}
          margin={{ top: 10, right: 15, left: 15, bottom: 0 }} // increased left/right margins
        >
          <defs>
            <linearGradient id="colorRed" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F94F4F" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#F94F4F" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0} />

          <XAxis
            dataKey="day"
            interval={0}
            scale="point" // eliminates spacing between points
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 11, fill: '#464255' }}
            padding={{ left: 8, right: 8 }}
            tickFormatter={(value) => value}
          />

          <Tooltip content={<CustomTooltip />} cursor={false} />

          <Area type="monotone" dataKey="orders" fill="url(#colorRed)" />

          <Line
            type="monotone"
            dataKey="orders"
            stroke="#F94F4F"
            strokeWidth={3}
            dot={false}
            // dot={{ r: 6, fill: '#fff', stroke: '#F94F4F', strokeWidth: 3 }}
            activeDot={{ r: 8 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderChart;
