import Header from "./assets/components/header";
import Balance from "./assets/components/balance";
import IncomeExpense from "./assets/components/incomeexpense";
import History from "./assets/components/History";
import "./App.css";
import data from "./data.jsx";
import { useState } from "react";
import AddTransaction from "./assets/components/addtransaction.jsx";

function App() {
  let [expense, setExpense]=useState(data);

  return (
    <div className="container">
      
      <Header title="Expense Tracker"/>

      <div className="tracker-container">
        <Balance expense={expense}/>
        <IncomeExpense expense={expense}/>
        <History expense={expense}/>
        <AddTransaction expense={expense} setExpense={setExpense}/>
      </div>

    </div>
  )
}

export default App;
