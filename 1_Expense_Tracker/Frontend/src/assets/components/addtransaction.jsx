import styles from "./addtransaction.module.css";
import Error from "./error";
function AddTransaction({expense, setExpense})
{
  function handleForm(e)
  {
    e.preventDefault();
    const title=e.target[0].value;
    const amount=e.target[1].value;
    if(title.trim()=="" || amount.trim()=="")
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
            title:e.target[0].value,
            amount:no
          }
          let arr=[];
          arr=[obj, ...expense];
          setExpense(arr);
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