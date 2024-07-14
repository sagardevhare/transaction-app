// frontend/src/components/PieChart.js
import React from 'react';
import { Pie } from 'recharts';
<h1>hii</h1>
function PieChart({ data }) {
  return (
    <PieChart width={600} height={300}>
      <Pie data={data} dataKey="count" nameKey="_id" fill="#8884d8" />
    </PieChart>
  );
}

export default PieChart;
