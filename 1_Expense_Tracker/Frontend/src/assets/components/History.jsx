import styles from "./History.module.css";
import { useState } from "react";
import axios from "axios";
function History({ expense ,setExpense }) {
  let [showCloseBtn, setshowCloseBtn]=useState(false);
  function showclosebutton()
  {
    console.log('Hover');
    setshowCloseBtn(true);
  }
  function hideclosebutton()
  {
    console.log('Hover Out');
    setshowCloseBtn(false);
  }
  function dltItem(e)
  {
    const objid=e.target.id;
    axios.delete(`http://localhost:5000/api/v1/transactions/${objid}`)
    .then(()=>
      { 
        axios.get('http://localhost:5000/api/v1/transactions').then((res)=>
          {
            setExpense(res.data.datagot);
          })
        .catch((err)=>console.log(err));
      })
    .catch(((err)=>
      {
        console.log(err);
      }));
  }
  return (
    <div className={styles.history}>
      <h3 style={{ borderBottom: "3px solid #ccc", paddingBottom: "3px" }}>
        History
      </h3>
      <div className={`${styles.historyList}`}>
        {expense.length == 0 ? (
          <h2 className={styles.blank}>Currently, No History</h2>
        ) : (
          <ul type="none">
            {expense.map((eachentry) => (
              <li
                key={eachentry._id}
                className={`${styles.list} ${
                  eachentry.amount >= 0 ? styles.bordergreen : styles.borderred
                }`}
              // onMouseEnter={showclosebutton}
              // onMouseLeave={hideclosebutton}
              >
                <div className={styles.title}>{eachentry.text} </div>
                <div className={styles.closebtn} id={eachentry._id}onClick={dltItem}>X</div>
                <div className={styles.amount}>
                  {eachentry.amount >= 0
                    ? `+${eachentry.amount}`
                    : eachentry.amount}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default History;
