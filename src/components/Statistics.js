// frontend/src/components/Statistics.js
import React from 'react';

function Statistics({ statistics }) {
  return (
    <div>
      <h2>Statistics</h2>
      <div>Total Sale Amount: {statistics.totalSaleAmount}</div>
      <div>Total Sold Items: {statistics.totalSoldItems}</div>
      <div>Total Not Sold Items: {statistics.totalNotSoldItems}</div>
    </div>
  );
}

export default Statistics;
