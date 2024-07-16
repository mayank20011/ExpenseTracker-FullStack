import styles from "./error.module.css";
function Error({ mssg }) {
  return (
  <div className={styles.error}>
    <div className={styles.msg}>{mssg}</div>
    <div>X</div>
  </div>);
}
export default Error;
