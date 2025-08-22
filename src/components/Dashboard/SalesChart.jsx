import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { month: 'ינואר', sales: 1200 },
  { month: 'פברואר', sales: 2100 },
  { month: 'מרץ', sales: 800 },
  { month: 'אפריל', sales: 1600 },
  { month: 'מאי', sales: 900 },
  { month: 'יוני', sales: 1700 },
];

const SalesChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#2563eb" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
