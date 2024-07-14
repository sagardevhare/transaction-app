// src/components/BarChart.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

function CustomBarChart({ month }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/bar-chart', {
          params: { month }
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching bar chart data:', error);
      }
    };

    fetchData();
  }, [month]);

  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="priceRange" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
}

export default CustomBarChart;
