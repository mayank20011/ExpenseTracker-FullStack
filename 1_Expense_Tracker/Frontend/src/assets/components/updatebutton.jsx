import "./updatebtn.css";
import axios from "axios";
function UpdateButton({ id, updateobj }) {

  function updatetransaction(e) {
    e.stopPropagation();
    let title=e.target.parentElement.children[1].innerHTML;
    let amount=e.target.parentElement.children[2].innerHTML;
    let obj = {
      _id: id,
      text: title,
      amount: Number(amount),
    };
    updateobj(obj);
  }
  return (
      <i
        id={id}
        className="fa-regular fa-pen-to-square updatebtn"
        onClick={updatetransaction}
      ></i>
  );
}
export default UpdateButton;
