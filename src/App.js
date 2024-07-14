import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionTable from './components/TransactionTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

function App() {
  const [month, setMonth] = useState('March');
  const [transactions, setTransactions] = useState([]);
  const [statistics, setStatistics] = useState({});
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        console.log('Fetching data for month:', month);
        const { data } = await axios.get(`/api/all-data?month=${month}`);
        console.log('Data fetched:', data);
        setTransactions(data.transactions);
        setStatistics(data.statistics);
        setBarChartData(data.barChart);
        setPieChartData(data.pieChart);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [month]);

  return (
    <div>
      <h1>Fetching Data</h1>
      <select value={month} onChange={(e) => setMonth(e.target.value)}>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>

      {loading ? <p>Loading...</p> : (
        <>
          <TransactionTable transactions={transactions} />
          <Statistics statistics={statistics} />
          <BarChart data={barChartData} />
          <PieChart data={pieChartData} />
        </>
      )}
    </div>
  );
}

export default App;
