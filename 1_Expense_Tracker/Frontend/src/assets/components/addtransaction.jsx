import styles from "./addtransaction.module.css";
import Error from "./error";
import axios from "axios";
function AddTransaction({expense, setExpense})
{
  function handleForm(e)
  {
    e.preventDefault();
    const text=e.target[0].value;
    const amount=e.target[1].value;
    if(text.trim()=="" || amount.trim()=="")
    {
      alert("Fill Up both form values");
    }
    else
    {
      const no=Number(e.target[1].value.trim());
      if(no=="NaN")
        {
            alert("Amount Can only be a number");
        }
        else
        {
          const obj={
            text:e.target[0].value,
            amount:no
          }
          axios.post('http://localhost:5000/api/v1/transactions', obj)
          .then((response)=>
            {
              setExpense([response.data, ...expense],);
              console.log('request Successfull');
            })
          .catch(()=>
            {
              console.log('request Failed');
            });
          e.target[0].value="";
          e.target[1].value="";
        }
    }
  }
  return (
    <div className={styles.transactiondiv}>
      <h3 className={`${styles.h3}`}>Add new Transaction</h3>
      <form onSubmit={handleForm}>

        <div className={styles.formInput}>
          <label id="title" className={styles.label}>Text</label>
          <input type="text" placeholder="Enter text..." className={styles.input}></input>
        </div>
        <div className={styles.formInput}>
          <label id="expenseIncome" className={styles.label}>Amount<br/>(negative-expense, positive-income)</label>
          <input type="text" placeholder="Enter text..."
          className={styles.input}></input>
        </div>

        <button type="Submit" className={styles.button}>Add Transaction</button>

      </form>
    </div>
  );
}
export default AddTransaction;