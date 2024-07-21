import styles from "./History.module.css";
function ListStrip({ text, amount}) {
  return (
    <>
      <div className={styles.title}>{text} </div>
      <div className={styles.amount}>{amount >= 0 ? `+${amount}` : amount}</div>
    </>
  );
}
export default ListStrip;
