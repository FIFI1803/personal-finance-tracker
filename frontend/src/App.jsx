import { useEffect, useState } from "react";
import { getTransactions } from "./api/transactions";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then((response) => {
      setTransactions(response.data);
    });
  }, []);

 return (
    <div>
      <h1>Finance Tracker</h1>

      <ul>
        {transactions.map((tx) => (
          <li key={tx._id}>
            {tx.description}: ${tx.amount} on {new Date(tx.date).toLocaleDateString()}
          </li>
        ))}
      </ul> 
    </div>
  );
}

export default App;