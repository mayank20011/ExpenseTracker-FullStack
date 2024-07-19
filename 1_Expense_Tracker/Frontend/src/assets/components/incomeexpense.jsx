import styles from "./incomeexpense.module.css";
function IncomeExpense({ expense}) {
  let income = 0;
  let expensee = 0;
  expense.forEach((eachdata) => {
    if (eachdata.amount >= 0) {
      income = income + eachdata.amount;
    } else {
      expensee = expensee + eachdata.amount;
    }
  });

  return (
    <div className={styles.incomeexpense}>
      <div className={`${styles.container} ${styles.borderright}`}>
        <h4>Income</h4>
        <h3 style={{ color: "green" }}>${income}</h3>
      </div>
      <div className={styles.container}>
        <h4>Expense</h4>
        <h3 style={{ color: "red" }}>${expensee}</h3>
      </div>
    </div>
  );
}
export default IncomeExpense;
