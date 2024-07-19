import Header from "./assets/components/header";
import Balance from "./assets/components/balance";
import IncomeExpense from "./assets/components/incomeexpense";
import History from "./assets/components/History";
import "./App.css";
import { useState, useEffect} from "react";
import AddTransaction from "./assets/components/addtransaction.jsx";
import axios from "axios";

function App() {
useEffect(() => {
  console.log('App Rerendered');
  // Fetch data from the API
  axios.get('http://localhost:5000/api/v1/transactions')
    .then(response => {
      setExpense(response.data.datagot); // Update the state with the fetched data
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, []);

  let [expense, setExpense] = useState([]);

  return (
    <div className="container">
      <Header title="Expense Tracker"/>

      <div className="tracker-container">
        <Balance expense={expense}/>
        <IncomeExpense expense={expense}/>
        <History expense={expense} setExpense={setExpense}/>
        <AddTransaction expense={expense} setExpense={setExpense}/>
      </div>
    </div>
  );
}

export default App;


