import styles from "./History.module.css";
import { useState } from "react";
import axios from "axios";
import DltBtn from "./dltbutton.jsx";
import UpdateButton from "./updatebutton.jsx";
import ListStrip from "./liststrip.jsx";
function History({ expense, setExpense, updateobj}) {
  let [showCloseBtn, setshowCloseBtn] = useState(false);
  function showclosebutton() {
    // console.log('Entered');
    setshowCloseBtn(true);
  }
  function hideclosebutton() {
    // console.log('out');
    setshowCloseBtn(false);
  }
  function dltItem(e) {
    console.log("btnclicked");
    const objid = e.target.id;
    axios
      .delete(`http://localhost:5000/api/v1/transactions/${objid}`)
      .then(() => {
        axios
          .get("http://localhost:5000/api/v1/transactions")
          .then((res) => {
            setExpense(res.data.datagot);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });
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
                }`
              }
              onMouseEnter={showclosebutton}
              onMouseLeave={hideclosebutton}
              >
                {showCloseBtn && (
                  <DltBtn id={eachentry._id} dltItem={dltItem} />
                )}

                <ListStrip
                  text={eachentry.text}
                  amount={eachentry.amount}
                />

                {showCloseBtn && <UpdateButton id={eachentry._id} updateobj={updateobj}/>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default History;
