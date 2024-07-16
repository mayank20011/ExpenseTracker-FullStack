import styles from "./History.module.css";
function History({ expense }) {
  return (
    <div className={styles.history}>
      <h3 style={{ borderBottom: "3px solid #ccc", paddingBottom: "3px" }}>
        History
      </h3>
      <div className={`${styles.historyList}`}>
        {expense.length ==0? <h2 className={styles.blank}>Currently, No History</h2> :<ul type="none">
          {expense.map((eachentry, index) => (
            <li key={index} className={`${styles.list} ${eachentry.amount>=0? styles.borderred: styles.bordergreen}`}>

              <div className={styles.title}>{eachentry.title} </div>

              <div className={styles.amount}>{eachentry.amount >=0? `+${eachentry.amount}` :eachentry.amount}</div>

            </li>
          ))}
        </ul>}
      </div>
    </div>
  );
}
export default History;
