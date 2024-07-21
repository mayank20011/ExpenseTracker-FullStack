import styles from "./addtransaction.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

function AddTransaction({ expense, setExpense, updatedobject }) {
  
  const [inputValue, setInputValue] = useState({
    _id: "",
    text: "",
    amount: "",
  });
  useEffect(() => {
    if (updatedobject) {
      setInputValue({
        _id: updatedobject._id,
        text: updatedobject.text,
        amount: updatedobject.amount,
      });
    }
  }, [updatedobject]);

  function updateObject(obj) {
    axios
      .patch(
        `http://localhost:5000/api/v1/transactions/${updatedobject._id}`,
        obj
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function createObject() {
    axios
      .post("http://localhost:5000/api/v1/transactions", obj)
      .then((response) => {
        setExpense([response.data, ...expense]);
        console.log("request Successfull");
      })
      .catch(() => {
        console.log("request Failed");
      });
  }

  function handleForm(e) {
    e.preventDefault();
    const text = e.target[0].value;
    const amount = e.target[1].value;
    if (text.trim() == "" || amount.trim() == "") {
      alert("Fill Up both form values");
    } else {
      const no = Number(e.target[1].value.trim());
      if (no == "NaN") {
        alert("Amount Can only be a number");
      } else {
        const obj = {
          text: e.target[0].value,
          amount: no,
        };
        if (e.target.children[2].innerHTML === "Add Transaction") {
          createObject(obj);
        } else {
          updateObject(obj);
        }
        e.target[0].value = "";
        e.target[1].value = "";
      }
    }
  }
  return (
    <div className={styles.transactiondiv}>
      <h3 className={`${styles.h3}`}>Add new Transaction</h3>
      <form onSubmit={handleForm}>
        <div className={styles.formInput}>
          <label id="title" className={styles.label}>
            Text
          </label>
          <input
            type="text"
            placeholder="Enter text..."
            className={styles.input}
            onChange={(e)=>
              {
                setInputValue({...inputValue, text:e.target.value})
              }}
            value={inputValue.text}
          ></input>
        </div>
        <div className={styles.formInput}>
          <label id="expenseIncome" className={styles.label}>
            Amount
            <br />
            (negative-expense, positive-income)
          </label>
          <input
            type="text"
            placeholder="Enter Amount..."
            value={inputValue.amount}
            className={styles.input}
            onChange={(e)=>
              {
                setInputValue({...inputValue, text:e.target.value})
              }}
          ></input>
        </div>

        <button type="Submit" className={styles.button}>
          {updatedobject ? "Update Transaction" : "Add Transaction"}
        </button>
      </form>
    </div>
  );
}
export default AddTransaction;
