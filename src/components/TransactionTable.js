// frontend/src/components/TransactionTable.js
import React, { useEffect,useState } from 'react';
import axios from 'axios';

function TransactionTable({ transactions }) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState(transactions);

  const handleSearch = async () => {
    const { data } = await axios.get(`/api/transactions?month=3&search=${search}&page=${page}`);
    setData(data);
  };

  useEffect(() => {
    handleSearch();
  }, [search, page]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Date of Sale</th>
          </tr>
        </thead>
        <tbody>
          {data.map(transaction => (
            <tr key={transaction._id}>
              <td>{transaction.title}</td>
              <td>{transaction.description}</td>
              <td>{transaction.price}</td>
              <td>{new Date(transaction.dateOfSale).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}

export default TransactionTable;
